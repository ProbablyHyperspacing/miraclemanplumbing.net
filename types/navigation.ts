export interface NavigationItem {
  href: string
  label: string
  hasDropdown?: boolean
  dropdownItems?: {
    href: string
    label: string
  }[]
}