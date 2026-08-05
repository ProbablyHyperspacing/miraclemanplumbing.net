import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const getResendInstance = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set')
  }
  return new Resend(apiKey)
}

const careersFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  yearsExperience: z.string().min(1, 'Years of experience is required'),
  driversLicense: z.boolean().optional(),
  experience: z.string().min(1, 'Experience is required'),
  resumeLink: z.string().url().optional().or(z.literal('')),
  message: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = careersFormSchema.parse(body)

    if (!process.env.RESEND_API_KEY) {
      console.log('Careers form submission received (Resend not configured):', validatedData)
      return NextResponse.json({
        success: true,
        message: 'Thank you for your application! We\'ll be in touch soon.',
      })
    }

    const resend = getResendInstance()
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@miraclemanplumbing.com',
      to: process.env.CONTACT_EMAIL || 'miraclemanplumbing@yahoo.com',
      subject: `New Job Application - ${validatedData.name}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Years of Experience:</strong> ${validatedData.yearsExperience}</p>
        <p><strong>Valid Driver's License:</strong> ${validatedData.driversLicense ? 'Yes' : 'No'}</p>
        <p><strong>Experience:</strong></p>
        <p>${validatedData.experience.replace(/\n/g, '<br>')}</p>
        ${validatedData.resumeLink ? `<p><strong>Resume:</strong> <a href="${validatedData.resumeLink}">${validatedData.resumeLink}</a></p>` : ''}
        ${validatedData.message ? `<p><strong>Additional Notes:</strong></p><p>${validatedData.message.replace(/\n/g, '<br>')}</p>` : ''}
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you for your application! We\'ll be in touch soon.',
    })
  } catch (error) {
    console.error('Careers form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.issues },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to send application. Please try again.' },
      { status: 500 }
    )
  }
}
