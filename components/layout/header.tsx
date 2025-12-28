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
    <header className="shadow-md">
      <div className="hidden lg:block">
        {/* Top section with yellow background */}
        <div className="bg-[#EDB23A] py-2">
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
                  className="flex items-center space-x-2 bg-[#0B2545] hover:bg-[#C08222] text-white border-none"
                >
                  <Link href={REVIEW_LINK} target="_blank" rel="noopener noreferrer">
                    <StarIcon className="h-3 w-3" />
                    <span className="text-xs font-semibold">Review Us</span>
                  </Link>
                </Button>

                {/* Phone Number */}
                <Button
                  variant="secondary"
                  size="sm"
                  asChild
                  className="flex items-center space-x-2 bg-[#0B2545] hover:bg-[#C08222] text-white border-none"
                >
                  <Link href={`tel:${SITE_CONFIG.phone}`}>
                    <Phone className="h-3 w-3" />
                    <span className="text-xs font-semibold">{SITE_CONFIG.phoneDisplay}</span>
                  </Link>
                </Button>

                {/* Location */}
                <Button
                  variant="secondary"
                  size="sm"
                  asChild
                  className="flex items-center space-x-2 bg-[#0B2545] hover:bg-[#C08222] text-white border-none"
                >
                  <Link href={LOCATION_LINK} target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs font-semibold">{SITE_CONFIG.address}</span>
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
                      className="text-[#0B2545] hover:text-[#C08222] transition-colors"
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

        {/* Bottom section with dark navy background */}
        <div className="bg-[#0B2545] py-4">
          <div className="container mx-auto px-4">

            {/* Bottom Navigation Row with Logo */}
            <div className="flex items-center justify-center h-24">
              {/* Logo - Much bigger */}
              <div className="flex items-center pr-12">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/MiracleMan_Logo_Colour.png"
                    alt="Miracle Man Plumbing"
                    width={400}
                    height={150}
                    className="h-36 w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Main Navigation with Blame Sport font */}
              <nav className="flex items-center space-x-10 nav-font">
                {NAVIGATION_ITEMS.map((item) => {
                  if (item.hasDropdown && item.dropdownItems) {
                    return (
                      <DropdownMenu key={item.href}>
                        <DropdownMenuTrigger asChild>
                          <button className="flex items-center space-x-1 text-white hover:text-[#EDB23A] text-lg tracking-wide transition-colors focus:outline-none">
                            <span>{item.label}</span>
                            <ChevronDown className="h-4 w-4" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-80 bg-[#0B2545] border-[#95C4E2]" align="start">
                          {item.dropdownItems.map((dropdownItem) => (
                            <DropdownMenuItem key={dropdownItem.href} asChild>
                              <Link
                                href={dropdownItem.href}
                                className="w-full cursor-pointer text-white hover:text-[#EDB23A] hover:bg-[#0B2545]/80"
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
                      className="text-white hover:text-[#EDB23A] text-lg tracking-wide transition-colors"
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
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            {/* Logo Row */}
            <div className="flex items-center justify-center py-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/MiracleMan_Logo_Colour.png"
                  alt="Miracle Man Plumbing"
                  width={320}
                  height={120}
                  className="h-28 w-auto"
                />
              </Link>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center justify-center gap-3 pb-4">
              <Button
                size="sm"
                asChild
                className="bg-[#EDB23A] hover:bg-[#C08222] text-white font-semibold px-6 rounded-md"
              >
                <Link href={`tel:${SITE_CONFIG.phone}`}>
                  Call Now
                </Link>
              </Button>

              <Button
                size="sm"
                asChild
                variant="outline"
                className="border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white font-semibold px-6 rounded-md"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#0B2545] hover:text-[#EDB23A] hover:bg-transparent ml-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#95C4E2]/30 bg-[#0B2545]">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-3 nav-font">
              {NAVIGATION_ITEMS.map((item) => {
                if (item.hasDropdown && item.dropdownItems) {
                  return (
                    <div key={item.href} className="space-y-2">
                      <Link
                        href={item.href}
                        className="text-white hover:text-[#EDB23A] font-medium transition-colors py-2 block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <div className="pl-4 space-y-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="text-[#95C4E2] hover:text-[#EDB23A] text-sm transition-colors py-1 block"
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
                    className="text-white hover:text-[#EDB23A] font-medium transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Mobile Contact Buttons */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-[#95C4E2]/30">
              <Button
                size="sm"
                asChild
                className="justify-start bg-[#EDB23A] hover:bg-[#C08222] text-white"
              >
                <Link href={`tel:${SITE_CONFIG.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  {SITE_CONFIG.phoneDisplay}
                </Link>
              </Button>

              <Button
                size="sm"
                asChild
                className="justify-start bg-[#EDB23A] hover:bg-[#C08222] text-white"
              >
                <Link href={LOCATION_LINK} target="_blank" rel="noopener noreferrer">
                  <MapPin className="h-4 w-4 mr-2" />
                  {SITE_CONFIG.address}
                </Link>
              </Button>

              <Button
                size="sm"
                asChild
                className="justify-start bg-[#EDB23A] hover:bg-[#C08222] text-white"
              >
                <Link href={REVIEW_LINK} target="_blank" rel="noopener noreferrer">
                  <StarIcon className="h-4 w-4 mr-2" />
                  Review Us
                </Link>
              </Button>
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-[#95C4E2]/30">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#95C4E2] hover:text-[#EDB23A] transition-colors"
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