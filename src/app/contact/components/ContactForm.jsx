'use client'

import { useState } from 'react'
import { useForm } from '@sonordev/site-kit/forms'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Width utility — maps field.width to Tailwind col-span classes     */
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
/*  Dynamic field renderer                                            */
/* ------------------------------------------------------------------ */
function ManagedField({ field, value, error, onChange }) {
  const id = field.slug

  const renderControl = () => {
    if (field.field_type === 'select') {
      return (
        <Select
          value={value ?? ''}
          onValueChange={(v) => onChange(field.slug, v)}
        >
          <SelectTrigger className={inputCls}>
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
          rows={6}
          required={field.is_required}
          placeholder={field.placeholder}
          value={value ?? ''}
          onChange={(e) => onChange(field.slug, e.target.value)}
          className={`${inputCls} resize-none`}
        />
      )
    }

    // text, email, phone, tel, number, url, etc.
    const typeMap = { phone: 'tel' }
    const inputType = typeMap[field.field_type] || field.field_type || 'text'

    return (
      <Input
        id={id}
        type={inputType}
        required={field.is_required}
        placeholder={field.placeholder}
        value={value ?? ''}
        onChange={(e) => onChange(field.slug, e.target.value)}
        className={inputCls}
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
        <p className="text-xs text-gray-500">{field.help_text}</p>
      )}
      {error && (
        <p className="text-xs text-red-600">{error}</p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Fallback form — rendered when managed forms API is unreachable    */
/*  Identical layout to the original hardcoded form, POSTs to         */
/*  /api/contact so it still works without the platform.              */
/* ------------------------------------------------------------------ */
function FallbackForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [financingType, setFinancingType] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      company: e.target.company.value,
      financingType,
      loanAmount: e.target.loanAmount.value,
      location: e.target.location.value,
      message: e.target.message.value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <div className="inline-flex p-4 bg-green-100 rounded-full mb-6">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-[#081c3e] mb-4">
          Thank You!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We&apos;ve received your inquiry and will get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-[#b9945a] text-[#b9945a] hover:bg-[#b9945a] hover:text-white"
        >
          Submit Another Inquiry
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-[#081c3e] mb-2">
        Start Your Financing Journey
      </h2>
      <p className="text-gray-600 mb-8">
        Fill out the form below and one of our financing experts will contact you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input id="firstName" name="firstName" required placeholder="John" className={inputCls} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input id="lastName" name="lastName" required placeholder="Doe" className={inputCls} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" required placeholder="john@company.com" className={inputCls} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" className={inputCls} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" name="company" placeholder="Your Company LLC" className={inputCls} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="financingType">Financing Type *</Label>
            <Select required value={financingType} onValueChange={setFinancingType}>
              <SelectTrigger className={inputCls}>
                <SelectValue placeholder="Select financing type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="construction">Construction Loan</SelectItem>
                <SelectItem value="permanent">Permanent Mortgage</SelectItem>
                <SelectItem value="refinancing">Refinancing</SelectItem>
                <SelectItem value="acquisition">Acquisition &amp; Renovation</SelectItem>
                <SelectItem value="retail">Retail Property</SelectItem>
                <SelectItem value="office">Office Building</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Estimated Loan Amount</Label>
            <Input id="loanAmount" name="loanAmount" placeholder="$5,000,000" className={inputCls} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Property Location (City, State)</Label>
          <Input id="location" name="location" placeholder="Rochester, NY" className={inputCls} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Project Details *</Label>
          <Textarea id="message" name="message" required rows={6} placeholder="Tell us about your project, timeline, and any specific requirements..." className={`${inputCls} resize-none`} />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-[#b9945a] hover:bg-[#a5834f] text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Send Inquiry
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

/* ------------------------------------------------------------------ */
/*  Main component — managed form with fallback                       */
/* ------------------------------------------------------------------ */
export default function ContactForm() {
  const {
    form,
    visibleFields,
    values,
    errors,
    setFieldValue,
    submit,
    isSubmitting,
    isComplete,
    isLoading,
    fetchError,
    reset,
  } = useForm('contact')

  /* ---- Loading state ---- */
  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-10 w-10 text-[#b9945a] animate-spin" />
      </div>
    )
  }

  /* ---- API unreachable — render hardcoded fallback ---- */
  if (fetchError) {
    return <FallbackForm />
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
  const handleSubmit = (e) => {
    e.preventDefault()
    submit()
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-[#081c3e] mb-2">
        Start Your Financing Journey
      </h2>
      <p className="text-gray-600 mb-8">
        Fill out the form below and one of our financing experts will contact you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
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

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
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
