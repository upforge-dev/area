'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Building2, Phone, Mail, MapPin, Menu, X, ShoppingCart, Building, Landmark, Scale, Handshake } from 'lucide-react'

export default function LayoutClient({ children }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      id: 'construction-loans',
      title: "Construction Loans",
      path: "/services/construction-loans",
      icon: Building2
    },
    {
      id: 'permanent-mortgages',
      title: "Permanent Mortgages",
      path: "/services/permanent-mortgages",
      icon: Landmark
    },
    {
      id: 'commercial-refinancing',
      title: "Commercial Real Estate Refinancing",
      path: "/services/commercial-real-estate-refinancing",
      icon: Scale
    },
    {
      id: 'acquisition-renovation',
      title: "Acquisition & Renovation Financing",
      path: "/services/acquisition-renovation-financing",
      icon: Handshake
    },
    {
      id: 'retail-financing',
      title: "Retail Property Financing",
      path: "/services/retail-property-financing",
      icon: ShoppingCart
    },
    {
      id: 'office-financing',
      title: "Office Building Financing",
      path: "/services/office-building-financing",
      icon: Building
    }
  ]

  const isActivePath = (path) => pathname === path
  const isServicesSection =
    pathname === '/services' || pathname.startsWith('/services/')

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center">
                <img src="/LogoDark.png" alt="Adams Real Estate Advisors Logo" className="h-8 w-8 mr-3" />
                <span className="text-xl font-bold text-[#081c3e]">Adams Real Estate Advisors</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="/about"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActivePath('/about') ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                >
                  About Us
                </Link>
                <div className="relative group">
                  <Link
                    href="/services"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isServicesSection ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                  >
                    Client Services
                  </Link>
                  <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-md py-2 w-64 right-0 top-full mt-1 border border-gray-200 z-50">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={service.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#b9945a]/10 hover:text-[#081c3e] transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/transactions"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActivePath('/transactions') ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                >
                  Closed Transactions
                </Link>
                <Link
                  href="/contact"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActivePath('/contact') ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                >
                  Contact Us
                </Link>
                <Link
                  href="/lender-program"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActivePath('/lender-program') ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                >
                  Lender Network
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#081c3e] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#b9945a]"
                >
                  {mobileMenuOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActivePath('/about') ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isServicesSection ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                  >
                    Client Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={service.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-6 py-2 rounded-md text-sm transition-colors ${isActivePath(service.path) ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-600 hover:text-[#081c3e] hover:bg-gray-50'}`}
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    href="/transactions"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActivePath('/transactions') ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                  >
                    Closed Transactions
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActivePath('/contact') ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/lender-program"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActivePath('/lender-program') ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                  >
                    Lender Network
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
        
        <main>
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-[#081c3e] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <img src="/Logonotextwhite.svg" alt="Adams Real Estate Advisors Logo" className="h-8 w-8 mr-3" />
                  <h3 className="text-xl font-bold">Adams Real Estate Advisors</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Your trusted partner for commercial real estate financing. We provide expert guidance and tailored debt solutions for developers and investors, specializing in construction loans, permanent mortgages, and refinancing across the United States.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-[#b9945a]/20 border border-[#b9945a] rounded-full px-4 py-2">
                    <span className="text-[#b9945a] font-semibold text-sm">$1.8B+ Financed</span>
                  </div>
                  <div className="bg-[#b9945a]/20 border border-[#b9945a] rounded-full px-4 py-2">
                    <span className="text-[#b9945a] font-semibold text-sm">35+ Years Experience</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Core Services</h3>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service.id}>
                      <Link href={service.path} className="text-gray-400 hover:text-white">
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Ready to discuss your commercial real estate financing needs? Our team is here to help.
                </p>
                <Link href="/contact">
                  <button className="bg-[#b9945a] hover:bg-[#a5834f] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} Adams Real Estate Advisors. All rights reserved.</p>
              <p className="mt-3 text-xs opacity-60">
                Built by{' '}
                <a href="https://upforge.io" target="_blank" rel="noopener nofollow" className="text-[#b9945a] hover:text-[#b9945a]/80 transition-colors">
                  Upforge
                </a>
                {' · '}
                Powered by{' '}
                <a href="https://sonor.io" target="_blank" rel="noopener nofollow" className="text-[#b9945a] hover:text-[#b9945a]/80 transition-colors">
                  Sonor
                </a>
              </p>
            </div>
          </div>
        </footer>
      </>
    )
}
