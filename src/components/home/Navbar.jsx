import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "./../ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./../ui/Dropdown-menu"
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
    setIsMobileMenuOpen(false)
  }

  const NavItem = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="relative">
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between"
        >
          {label} <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
        {isOpen && (
          <div className="mt-2 space-y-2 pl-4 overflow-hidden">
            {items.map((item, index) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full text-left transition-all duration-300 ease-in-out"
                style={{
                  transform: `translateY(${isOpen ? '0' : '-10px'})`,
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: `${index * 50}ms`
                }}
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    )
  }

  const menuItems = [
    {
      label: 'Festivals',
      items: [
        { label: 'Diwali', path: '/festivals/diwali' },
        { label: 'Eid', path: '/festivals/eid' },
        { label: 'Christmas', path: '/festivals/christmas' },
        { label: 'Holi', path: '/festivals/holi' },
        { label: 'Navratri', path: '/festivals/navratri' },
        { label: 'Durga Puja', path: '/festivals/durga-puja' },
      ],
    },
    {
      label: 'Special Days',
      items: [
        { label: 'Friendship Day', path: '/special-days/friendship-day' },
        { label: "Father's Day", path: '/special-days/fathers-day' },
        { label: "Mother's Day", path: '/special-days/mothers-day' },
        { label: "Valentine's Day", path: '/special-days/valentines-day' },
        { label: "Teacher's Day", path: '/special-days/teachers-day' },
        { label: "Children's Day", path: '/special-days/childrens-day' },
      ],
    },
    {
      label: 'Anniversaries',
      items: [
        { label: 'Wedding Anniversary', path: '/anniversaries/wedding' },
        { label: 'Work Anniversary', path: '/anniversaries/work' },
        { label: 'Relationship Milestones', path: '/anniversaries/relationship' },
        { label: 'Business Anniversary', path: '/anniversaries/business' },
      ],
    },
    {
      label: 'More',
      items: [
        { label: 'Birthdays', path: '/more/birthdays' },
        { label: 'Graduations', path: '/more/graduations' },
        { label: 'Baby Showers', path: '/more/baby-showers' },
        { label: 'Retirements', path: '/more/retirements' },
        { label: 'New Job', path: '/more/new-job' },
      ],
    },
  ]

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">Badhai Bazaar</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Button variant="ghost" onClick={() => handleNavigation('/')}>Home</Button>
              
              {menuItems.map((item) => (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">{item.label} <ChevronDown className="ml-1 h-4 w-4" /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.label} onSelect={() => handleNavigation(subItem.path)}>
                        {subItem.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Button variant="ghost" className="block w-full text-left" onClick={() => handleNavigation('/')}>Home</Button>
          {menuItems.map((item) => (
            <NavItem key={item.label} label={item.label} items={item.items} />
          ))}
        </div>
      </div>
    </nav>
  )
}