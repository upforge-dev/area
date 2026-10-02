/**
 * The one place this site names how to reach it, and the Sonor form its
 * contact page submits to.
 *
 * The contact form's "call or email us" messages read the phone and email from
 * here. The contact page and the form both read the slug from here, because
 * useForm only trusts the config the page fetched on the server when its slug
 * matches the one it's asked for. If the two ever disagree, the form fetches
 * again in the browser and flashes a spinner.
 *
 * ContactInfo, ContactFAQ, AboutCTA and ServiceCTA still spell the phone and
 * email out themselves. Point them here whenever one of them is touched.
 */
export const CONTACT_FORM_SLUG = 'contact'

export const PHONE_DISPLAY = '(585) 303-2423'
export const PHONE_HREF = `tel:${PHONE_DISPLAY.replace(/\D/g, '')}`

export const EMAIL = 'Alan@AdamsRealEstateAdvisors.com'
