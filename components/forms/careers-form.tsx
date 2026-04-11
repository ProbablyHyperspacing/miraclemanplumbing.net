'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

const careersFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  experience: z.string().min(1, 'Please tell us about your experience'),
  resumeLink: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  message: z.string().optional(),
})

type CareersFormData = z.infer<typeof careersFormSchema>

export function CareersForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareersFormData>({
    resolver: zodResolver(careersFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      experience: '',
      resumeLink: '',
      message: '',
    },
  })

  const onSubmit = async (data: CareersFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: 'Application sent!',
          description: result.message,
        })
        reset()
      } else {
        throw new Error(result.error || 'Failed to send application')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send application',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="name" className="text-[#0B2545] font-medium">Full Name *</Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email" className="text-[#0B2545] font-medium">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone" className="text-[#0B2545] font-medium">Phone *</Label>
          <Input
            id="phone"
            {...register('phone')}
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="experience" className="text-[#0B2545] font-medium">Plumbing Experience *</Label>
        <Textarea
          id="experience"
          {...register('experience')}
          placeholder="Tell us about your plumbing experience, certifications, and specialties..."
          rows={4}
        />
        {errors.experience && (
          <p className="text-sm text-destructive mt-1">{errors.experience.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="resumeLink" className="text-[#0B2545] font-medium">Resume Link</Label>
        <Input
          id="resumeLink"
          type="url"
          {...register('resumeLink')}
          placeholder="https://drive.google.com/your-resume"
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-[#0B2545] font-medium">Anything else?</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Anything else you'd like us to know..."
          rows={3}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#EDB23A] hover:bg-[#C08222] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Submit Application'}
      </button>
    </form>
  )
}
