import { ContactForm } from '@/components/forms/contact-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { generatePageMetadata } from '@/lib/metadata'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata = generatePageMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Miracle Man Plumbing for all your plumbing needs. 24/7 emergency service available.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Ready to solve your plumbing problems? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get in touch</CardTitle>
              <CardDescription>
                Multiple ways to reach us for your convenience.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">{SITE_CONFIG.phone}</p>
                <p className="text-sm text-muted-foreground">{SITE_CONFIG.hours.emergency}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">{SITE_CONFIG.email}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">{SITE_CONFIG.address}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-muted-foreground">{SITE_CONFIG.hours.regular}</p>
                <p className="text-sm text-primary font-medium">{SITE_CONFIG.hours.emergency}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}