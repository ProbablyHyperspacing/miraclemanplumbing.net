'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  service: z.string().min(1, 'Service type is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      const result = await response.json()
      
      if (response.ok) {
        toast({
          title: 'Message sent!',
          description: result.message,
        })
        reset()
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send message',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-[#0B2545] font-medium">Name *</Label>
          <Input
            id="name"
            {...register('name')}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>
        
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
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        
        <div>
          <Label htmlFor="service" className="text-[#0B2545] font-medium">Service Type *</Label>
          <Select onValueChange={(value) => setValue('service', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="emergency">Emergency Repair</SelectItem>
              <SelectItem value="installation">Installation</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="drain-cleaning">Drain Cleaning</SelectItem>
              <SelectItem value="water-heater">Water Heater</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-sm text-destructive mt-1">{errors.service.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <Label htmlFor="message" className="text-[#0B2545] font-medium">Message *</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Describe your plumbing needs..."
          rows={5}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>
      
      <Button type="submit" disabled={isSubmitting} className="w-full bg-[#EDB23A] hover:bg-[#C08222] text-white">
        {isSubmitting ? 'Sending...' : 'Get Free Quote'}
      </Button>
    </form>
  )
}