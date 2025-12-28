export const SITE_CONFIG = {
  name: 'Miracle Man Plumbing',
  description: 'Professional plumbing services you can trust. Emergency repairs, installations, and maintenance.',
  url: 'https://miraclemanplumbing.com',
  phone: '(928) 830-3575',
  phoneDisplay: '928 830 3575',
  email: 'info@miraclemanplumbing.com',
  address: 'Prescott Valley, AZ',
  hours: {
    emergency: '24/7 Emergency Service',
    regular: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM'
  }
}

// Import service data to generate navigation dynamically
import serviceDataFile from './service-pages-data.json'

const generateServiceNavItems = () => {
  return Object.values(serviceDataFile).map((service: any) => ({
    href: `/${service.slug}`,
    label: service.hero.title.split(' IN ')[0].toLowerCase().replace(/\b\w/g, (l: string) => l.toUpperCase())
  }))
}

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Home' },
  {
    href: '/plumbing-services',
    label: 'Services',
    hasDropdown: true,
    dropdownItems: generateServiceNavItems()
  },
  { href: '/reviews', label: 'Reviews' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/areas-we-serve', label: 'Areas We Serve' },
  { href: '/blog', label: 'Blog' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact Us' },
]

export const SERVICES = [
  {
    title: 'Emergency Repairs',
    description: '24/7 emergency plumbing repairs',
    href: '/emergency-plumbing'
  },
  {
    title: 'Installation',
    description: 'Professional plumbing installation services',
    href: '/plumbing-services'
  },
  {
    title: 'Maintenance',
    description: 'Regular maintenance and inspections',
    href: '/plumbing-services'
  },
  {
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning services',
    href: '/drain-cleaning'
  },
]

export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/MiracleManPlumbing/',
    icon: 'Facebook'
  },
  {
    name: 'Instagram', 
    url: 'https://instagram.com/miraclemanplumbing/?hl=en',
    icon: 'Instagram'
  },
  {
    name: 'Yelp',
    url: 'https://yelp.com/biz/miracle-man-plumbing-inc-prescott-valley',
    icon: 'Star'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/miracle-man-plumbing-inc./about/',
    icon: 'Linkedin'
  },
  {
    name: 'Google',
    url: 'https://www.google.com/maps/place/Miracle+Man+Plumbing+Inc./@34.5960357,-112.4599726,12z/data=!4m6!3m5!1s0x872d23e640d81ab1:0xbd6ed9ae57a8535!8m2!3d34.5960609!4d-112.4597164!16s%2Fg%2F1tgmwrsy!5m1!1e1?entry=ttu',
    icon: 'Chrome'
  }
]

export const REVIEW_LINK = 'https://search.google.com/local/writereview?placeid=ChIJsRrYQOYjLYcRNYV65Zrt1gs'

export const LOCATION_LINK = 'https://www.google.com/maps/place/Miracle+Man+Plumbing+Inc./@34.5960357,-112.4599726,12z/data=!4m6!3m5!1s0x872d23e640d81ab1:0xbd6ed9ae57a8535!8m2!3d34.5960609!4d-112.4597164!16s%2Fg%2F1tgmwrsy!5m1!1e1?entry=ttu'