'use client'

import { useSyncExternalStore } from 'react'
import { useForm } from '@sonordev/site-kit/forms'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import { CONTACT_FORM_SLUG, PHONE_DISPLAY, PHONE_HREF, EMAIL } from '@/lib/site-contact'

/* ------------------------------------------------------------------ */
/*  Width utility: maps field.width to Tailwind col-span classes      */
/* ------------------------------------------------------------------ */
const widthClass = (width) => {
  switch (width) {
    case 'half':    return 'md:col-span-1'
    case 'third':   return 'md:col-span-1 lg:col-span-1'
    case 'quarter': return 'md:col-span-1'
    default:        return 'md:col-span-2'   // 'full' or undefined
  }
}

/* ------------------------------------------------------------------ */
/*  Input class shared across all field types                         */
/* ------------------------------------------------------------------ */
const inputCls = 'border-gray-300 focus:border-[#b9945a] focus:ring-[#b9945a]'

/* ------------------------------------------------------------------ */
/*  How to reach us when the form can't take an inquiry. The same      */
/*  phone and email the Contact Information card shows beside it, from */
/*  src/lib/site-contact.js.                                           */
/* ------------------------------------------------------------------ */
const linkCls = 'font-semibold text-[#b9945a] underline hover:text-[#a5834f]'

function ReachUs() {
  return (
    <>
      call us at{' '}
      <a href={PHONE_HREF} className={linkCls}>{PHONE_DISPLAY}</a>
      {' '}or email{' '}
      <a href={`mailto:${EMAIL}`} className={`${linkCls} break-all`}>{EMAIL}</a>
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Autocomplete tokens. Browser autofill, password managers and AI    */
/*  assistants filling the form for someone read them. A wrong token   */
/*  is worse than none, so only exact matches get one: these are the   */
/*  tokens site-kit's own managed forms give the same fields.          */
/*                                                                     */
/*  A stand-in for site-kit's autocompleteFor, which the kit uses for  */
/*  its own forms but 7.2.0 doesn't export. Swap this map for it once  */
/*  it does, so there's one list of tokens.                            */
/* ------------------------------------------------------------------ */
const AUTOCOMPLETE_BY_SLUG = {
  firstname: 'given-name',
  lastname: 'family-name',
  email: 'email',
  phone: 'tel',
  company: 'organization',
}

const autoCompleteFor = (field) => {
  if (field.field_type === 'email') return 'email'
  if (field.field_type === 'phone' || field.field_type === 'tel') return 'tel'
  return AUTOCOMPLETE_BY_SLUG[String(field.slug).toLowerCase().replace(/[^a-z0-9]/g, '')]
}

/* ------------------------------------------------------------------ */
/*  False in the server-rendered HTML and while React hydrates, true   */
/*  once the form can actually send. The fields are in the page HTML,  */
/*  and a native submit before that would reload the page with what    */
/*  was typed in the address bar instead of sending it.                */
/* ------------------------------------------------------------------ */
const subscribeNever = () => () => {}
const isHydrated = () => true
const isNotHydrated = () => false

/* ------------------------------------------------------------------ */
/*  Dynamic field renderer                                            */
/* ------------------------------------------------------------------ */
function ManagedField({ field, value, error, onChange }) {
  const id = field.slug
  const errorId = `${id}-error`
  const helpId = `${id}-help`

  // Ties the error and help text to the control, so screen readers and AI
  // assistants read them with it.
  const a11y = {
    'aria-invalid': error ? true : undefined,
    'aria-describedby':
      [error ? errorId : null, field.help_text ? helpId : null].filter(Boolean).join(' ') || undefined,
  }

  // The text controls take `defaultValue`, not `value`, on purpose. The fields
  // are in the server-rendered HTML, so a visitor (or browser autofill) can
  // fill them before React hydrates. A controlled `value` would reset the box
  // to the empty state the first time React renders it, and what was typed
  // would vanish. Left uncontrolled, the DOM keeps it, and useForm's
  // handleSubmit reads any control its state missed, so what's in the box is
  // what gets sent.
  const renderControl = () => {
    if (field.field_type === 'select') {
      // No `name` on the Select, on purpose. Radix mirrors it into a hidden
      // native <select> that reads as its first option while nothing is
      // chosen, and site-kit's handleSubmit reads controls by name, so a name
      // here would send that first option for a required field the visitor
      // never answered.
      return (
        <Select
          value={value ?? ''}
          onValueChange={(v) => onChange(field.slug, v)}
        >
          <SelectTrigger id={id} className={inputCls} {...a11y}>
            <SelectValue placeholder={field.placeholder || `Select ${field.label.toLowerCase()}`} />
          </SelectTrigger>
          <SelectContent>
            {(field.options || []).map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )
    }

    if (field.field_type === 'textarea') {
      return (
        <Textarea
          id={id}
          name={field.slug}
          rows={6}
          required={field.is_required}
          placeholder={field.placeholder}
          defaultValue={value ?? ''}
          onChange={(e) => onChange(field.slug, e.target.value)}
          className={`${inputCls} resize-none`}
          {...a11y}
        />
      )
    }

    // text, email, phone, tel, number, url, etc.
    const typeMap = { phone: 'tel' }
    const inputType = typeMap[field.field_type] || field.field_type || 'text'

    return (
      <Input
        id={id}
        name={field.slug}
        type={inputType}
        autoComplete={autoCompleteFor(field)}
        required={field.is_required}
        placeholder={field.placeholder}
        defaultValue={value ?? ''}
        onChange={(e) => onChange(field.slug, e.target.value)}
        className={inputCls}
        {...a11y}
      />
    )
  }

  return (
    <div className={`space-y-2 ${widthClass(field.width)}`}>
      <Label htmlFor={id}>
        {field.label}{field.is_required ? ' *' : ''}
      </Label>
      {renderControl()}
      {field.help_text && (
        <p id={helpId} className="text-xs text-gray-500">{field.help_text}</p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-xs text-red-600">{error}</p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main component: the Sonor managed form "contact"                  */
/*                                                                    */
/*  Rendered headless with useForm so it keeps this site's markup.    */
/*  Every submission goes through site-kit, which sends the proof     */
/*  that a browser rendered the page. Sonor refuses a submission      */
/*  without it and writes nothing, which is why there is no           */
/*  hand-rolled fallback POST here: the old one went through a        */
/*  server route on this site, which can't carry that proof.          */
/*                                                                    */
/*  `initialForm` is the form's config, fetched on the server by the  */
/*  page (getFormConfig), so the fields are in the page HTML. Without */
/*  it useForm fetches the config in the browser and the form shows a */
/*  spinner until it arrives.                                         */
/* ------------------------------------------------------------------ */
export default function ContactForm({ initialForm }) {
  const {
    form,
    allFields,
    visibleFields,
    values,
    errors,
    setFieldValue,
    handleSubmit,
    toolAttributes,
    isSubmitting,
    isComplete,
    isLoading,
    fetchError,
    submitError,
    reset,
  } = useForm(CONTACT_FORM_SLUG, { initialForm })

  const hydrated = useSyncExternalStore(subscribeNever, isHydrated, isNotHydrated)

  /* ---- Loading state ---- */
  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-10 w-10 text-[#b9945a] animate-spin" />
      </div>
    )
  }

  /* ---- No usable form config: say so, and give a way to reach us ---- */
  if (fetchError || !form || allFields.length === 0) {
    return (
      <div role="alert" className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-[#081c3e] mb-4">
          Our contact form isn&apos;t loading right now
        </h2>
        <p className="text-lg text-gray-600">
          Sorry about that. Please <ReachUs /> and one of our financing experts will take it from there.
        </p>
      </div>
    )
  }

  /* ---- Success state ---- */
  if (isComplete) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <div className="inline-flex p-4 bg-green-100 rounded-full mb-6">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-[#081c3e] mb-4">
          Thank You!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          {form?.success_message ||
            "We've received your inquiry and will get back to you within 24 hours."}
        </p>
        <Button
          onClick={reset}
          variant="outline"
          className="border-[#b9945a] text-[#b9945a] hover:bg-[#b9945a] hover:text-white"
        >
          Submit Another Inquiry
        </Button>
      </div>
    )
  }

  /* ---- Managed form ---- */
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-[#081c3e] mb-2">
        Start Your Financing Journey
      </h2>
      <p className="text-gray-600 mb-8">
        Fill out the form below and one of our financing experts will contact you shortly.
      </p>

      <form onSubmit={handleSubmit} {...toolAttributes} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {visibleFields.map((field) => (
            <ManagedField
              key={field.slug}
              field={field}
              value={values[field.slug]}
              error={errors[field.slug]}
              onChange={setFieldValue}
            />
          ))}
        </div>

        {submitError && (
          <div role="alert" className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {submitError} If it keeps happening, please <ReachUs />.
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={!hydrated || isSubmitting}
          className="w-full bg-[#b9945a] hover:bg-[#a5834f] text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              {form?.submit_button_text || 'Send Inquiry'}
            </>
          )}
        </Button>

        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to be contacted by Adams Real Estate Advisors regarding your inquiry.
        </p>
      </form>
    </div>
  )
}
