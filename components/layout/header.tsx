'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  Facebook, 
  Instagram, 
  Star, 
  Linkedin, 
  Chrome,
  Phone,
  MapPin,
  StarIcon,
  Menu,
  X,
  ChevronDown
} from 'lucide-react'
import { SITE_CONFIG, SOCIAL_LINKS, REVIEW_LINK, LOCATION_LINK, NAVIGATION_ITEMS } from '@/lib/constants'
import { useState } from 'react'

const iconMap = {
  Facebook,
  Instagram, 
  Star,
  Linkedin,
  Chrome
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="hidden lg:block">
        {/* Top section with blue background */}
        <div className="bg-[#1d588d] py-2">
          <div className="container mx-auto px-4">
            {/* Top Navigation Row - Contact Info */}
            <div className="flex items-center justify-between h-8">
              {/* Empty left spacer */}
              <div className="flex-1"></div>
              
              {/* Center - Contact buttons */}
              <div className="flex items-center space-x-6">
                {/* Review Us Button */}
                <Button 
                  variant="secondary" 
                  size="sm" 
                  asChild
                  className="flex items-center space-x-2 bg-white/90 hover:bg-white text-[#1d588d] border-white/20"
                >
                  <Link href={REVIEW_LINK} target="_blank" rel="noopener noreferrer">
                    <StarIcon className="h-3 w-3" />
                    <span className="text-xs">Review Us</span>
                  </Link>
                </Button>

                {/* Phone Number */}
                <Button 
                  variant="secondary" 
                  size="sm" 
                  asChild
                  className="flex items-center space-x-2 bg-white/90 hover:bg-white text-[#1d588d] border-white/20"
                >
                  <Link href={`tel:${SITE_CONFIG.phone}`}>
                    <Phone className="h-3 w-3" />
                    <span className="text-xs">{SITE_CONFIG.phoneDisplay}</span>
                  </Link>
                </Button>

                {/* Location */}
                <Button 
                  variant="secondary" 
                  size="sm" 
                  asChild
                  className="flex items-center space-x-2 bg-white/90 hover:bg-white text-[#1d588d] border-white/20"
                >
                  <Link href={LOCATION_LINK} target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs">{SITE_CONFIG.address}</span>
                  </Link>
                </Button>
              </div>

              {/* Right - Social Media Icons */}
              <div className="flex items-center space-x-3 flex-1 justify-end">
                {SOCIAL_LINKS.map((social) => {
                  const IconComponent = iconMap[social.icon as keyof typeof iconMap]
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <IconComponent className="h-4 w-4" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with white background */}
        <div className="bg-white py-2">
          <div className="container mx-auto px-4">

            {/* Bottom Navigation Row with Logo */}
            <div className="flex items-center justify-center h-16">
              {/* Logo */}
              <div className="flex items-center pr-8">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/MM-logo.png"
                    alt="Miracle Man Plumbing"
                    width={200}
                    height={72}
                    className="h-16 w-auto object-contain"
                    onError={(e) => {
                      // Fallback to text if image doesn't exist
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                  <span className="hidden font-bold text-2xl text-primary ml-4">
                    Miracle Man Plumbing
                  </span>
                </Link>
              </div>

              {/* Main Navigation */}
              <nav className="flex items-center space-x-8">
                {NAVIGATION_ITEMS.map((item) => {
                  if (item.hasDropdown && item.dropdownItems) {
                    return (
                      <DropdownMenu key={item.href}>
                        <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium transition-colors focus:outline-none">
                          <span>{item.label}</span>
                          <ChevronDown className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          {item.dropdownItems.map((dropdownItem) => (
                            <DropdownMenuItem key={dropdownItem.href} asChild>
                              <Link
                                href={dropdownItem.href}
                                className="w-full cursor-pointer"
                              >
                                {dropdownItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )
                  }
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-700 hover:text-primary font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-2">
              {/* Mobile Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/MM-logo.png"
                  alt="Miracle Man Plumbing"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                  onError={(e) => {
                    // Fallback to text if image doesn't exist
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <span className="hidden font-bold text-xl text-primary ml-2">
                  Miracle Man Plumbing
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-3">
              {NAVIGATION_ITEMS.map((item) => {
                if (item.hasDropdown && item.dropdownItems) {
                  return (
                    <div key={item.href} className="space-y-2">
                      <Link
                        href={item.href}
                        className="text-gray-700 hover:text-primary font-medium transition-colors py-2 block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <div className="pl-4 space-y-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="text-gray-600 hover:text-primary text-sm transition-colors py-1 block"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-primary font-medium transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Mobile Contact Buttons */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="justify-start"
              >
                <Link href={`tel:${SITE_CONFIG.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  {SITE_CONFIG.phoneDisplay}
                </Link>
              </Button>

              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="justify-start"
              >
                <Link href={LOCATION_LINK} target="_blank" rel="noopener noreferrer">
                  <MapPin className="h-4 w-4 mr-2" />
                  {SITE_CONFIG.address}
                </Link>
              </Button>

              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="justify-start"
              >
                <Link href={REVIEW_LINK} target="_blank" rel="noopener noreferrer">
                  <StarIcon className="h-4 w-4 mr-2" />
                  Review Us
                </Link>
              </Button>
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <IconComponent className="h-6 w-6" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}