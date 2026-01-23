import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Building2, Phone, Mail, MapPin, DollarSign, TrendingUp, Users, Award, Handshake, Landmark, Scale, Lightbulb, CheckCircle, Quote, Globe, Briefcase, DollarSign as DollarSignIcon, FileText, Banknote, RefreshCcw, Home, Target, TrendingUpIcon, ShieldCheck, Zap, UserCheck, BriefcaseBusiness, PiggyBank, BarChart3, MessageSquareText, CalendarCheck, ShoppingCart, Building, Star, Clock, Calculator, Percent, User, Shield, Menu, X } from 'lucide-react'
import './App.css'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  // URL path mappings
  const sectionToPath = {
    home: "/",
    services: "/services",
    "construction-loans": "/services/construction-loans",
    "permanent-mortgages": "/services/permanent-mortgages",
    "commercial-refinancing": "/services/commercial-real-estate-refinancing",
    "acquisition-renovation": "/services/acquisition-renovation-financing",
    "retail-financing": "/services/retail-property-financing",
    "office-financing": "/services/office-building-financing",
    about: "/about",
    deals: "/transactions",
    contact: "/contact",
    "lender-program": "/lender-program",
  }

  const pathToSection = Object.fromEntries(
    Object.entries(sectionToPath).map(([sec, path]) => [path, sec])
  )

  const [activeSection, setActiveSection] = useState(
    pathToSection[location.pathname] || "home"
  )
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Update active section when URL changes
  useEffect(() => {
    const section = pathToSection[location.pathname] || "home"
    setActiveSection(section)
  }, [location.pathname])

  // Scroll to top function with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Navigation handler that changes section, updates URL, and scrolls to top
  const handleNavigation = (section) => {
    const path = sectionToPath[section] || "/"
    if (location.pathname !== path) {
      navigate(path)
    }
    setActiveSection(section)
    scrollToTop()
  }

  // Mobile navigation handler that also closes mobile menu
  const handleMobileNavigation = (section) => {
    const path = sectionToPath[section] || "/"
    if (location.pathname !== path) {
      navigate(path)
    }
    setActiveSection(section)
    setMobileMenuOpen(false)
    scrollToTop()
  }

  const deals = [
    { name: "Hampton Inn & Suites West Carson", type: "Construction Loan", amount: "$11,984,235", location: "Pittsburgh, PA", image: "/HamptonInn.png", alt: "Hampton Inn & Suites West Carson" },
    { name: "Brickstone Senior Housing Apartments", type: "Permanent Mortgage", amount: "$27,000,000", location: "Brighton, NY", image: "/Brickstone.webp", alt: "Brickstone Senior Housing Apartments" },
    { name: "Dockside Apartments II", type: "Permanent Mortgage", amount: "$8,560,000", location: "Buffalo, NY", image: "/DocksideApartments.jpg", alt: "Dockside Apartments II" },
    { name: "Addisville Commons Retail Center", type: "Construction Loan", amount: "$18,022,271", location: "Richboro, PA", image: "/AddisvilleCommons.webp", alt: "Addisville Commons Retail Center" },
    { name: "Peregrine - Colonie, NY", type: "Construction Loan", amount: "$7,900,000", location: "Colonie, NY", image: "/PeregrineMemoryCare.jpg", alt: "Peregrine - Colonie, NY" },
    { name: "Brooklyn Pointe Senior Living Development", type: "Construction Loan", amount: "$12,779,380", location: "Cleveland, OH", image: "/BrooklynPointeSeniorLivingDevelopment.jpg", alt: "Brooklyn Pointe Senior Living Development" },
    { name: "Stonebriar Glen Apartments", type: "Construction Loan", amount: "$16,104,950", location: "Brockport, NY", image: "/StonebriarGlenApartments.webp", alt: "Stonebriar Glen Apartments" },
    { name: "Villa Bordeaux 146 Units", type: "Refinance", amount: "$8,500,000", location: "Peoria, IL", image: "/VillaBordeaux.webp", alt: "Villa Bordeaux 146 Units" },
    { name: "Flats on Fifth Apartments", type: "Construction Loan", amount: "$10,790,000", location: "Pittsburgh, PA", image: "/Flatsonfifth.webp", alt: "Flats on Fifth Apartments" },
    { name: "Maumee Senior Living Development", type: "Permanent Mortgage", amount: "$11,726,248", location: "Maumee, OH", image: "/MaumeeSeniorLivingDevelopment.webp", alt: "Maumee Senior Living Development" },
    { name: "Gateway Flats Apartments", type: "Construction Loan", amount: "$11,800,000", location: "Dayton, KY", image: "/DJI_0374.jpg", alt: "Gateway Flats Apartments" },
    { name: "Doud Apartments", type: "Construction Loan", amount: "$26,603,730", location: "Gates, NY", image: "/DoudApartments.webp", alt: "Doud Apartments" },
    { name: "Skaneateles Social", type: "Refinance", amount: "$7,500,000", location: "Skaneateles, NY", image: "/SkaneatelesSocial.avif", alt: "Skaneateles Social" },
    { name: "Green Bay Portfolio Apartments", type: "Refinance", amount: "$13,645,280", location: "Wisconsin", image: "/GreenBayPortfolio.jpg", alt: "Green Bay Portfolio Apartments" },
    { name: "High End Resort", type: "Construction Loan", amount: "$10,000,000+", location: "Skaneateles, NY", image: "/HighendResort.avif", alt: "High End Resort" }
  ]

  const services = [
    {
      id: 'construction-loans',
      title: "Construction Loans",
      description: "Secure funding for new commercial construction projects with flexible terms and competitive rates. We specialize in ground-up developments, expansions, and major renovations across hotels, multifamily apartments, retail centers, and specialized senior living facilities.",
      icon: Building2
    },
    {
      id: 'permanent-mortgages',
      title: "Permanent Mortgages",
      description: "Obtain long-term, stable financing for income-producing commercial properties with competitive rates and predictable payments. Our permanent mortgage solutions provide the financial stability essential for successful real estate investments across various property sectors.",
      icon: Landmark
    },
    {
      id: 'commercial-refinancing',
      title: "Commercial Real Estate Refinancing",
      description: "Optimize your existing commercial debt with strategic refinancing options designed to lower costs and improve cash flow. Whether seeking better rates, extracting equity, or consolidating debt, we provide tailored refinancing solutions to enhance your investment returns.",
      icon: Scale
    },
    {
      id: 'acquisition-renovation',
      title: "Acquisition & Renovation Financing",
      description: "Comprehensive financing for purchasing and improving commercial properties through integrated loan solutions. Perfect for value-add strategies, our acquisition and renovation loans provide the capital needed to transform underperforming assets into high-value investments.",
      icon: Handshake
    },
    {
      id: 'retail-financing',
      title: "Retail Property Financing",
      description: "Specialized financing solutions for retail properties including shopping centers, strip malls, and standalone retail buildings. We understand retail real estate dynamics and provide flexible funding options tailored to the unique challenges and opportunities in retail investments.",
      icon: ShoppingCart
    },
    {
      id: 'office-financing',
      title: "Office Building Financing",
      description: "Comprehensive financing options for office buildings, corporate parks, and medical office facilities. From single-tenant to multi-tenant office complexes, we provide tailored solutions that align with current office market trends and investment strategies.",
      icon: Building
    }
  ]

  const stats = [
    { label: "Total Financing", value: "$1.8B+", icon: DollarSignIcon },
    { label: "Years Experience", value: "35+", icon: Award },
    { label: "Successful Deals", value: "500+", icon: TrendingUp },
    { label: "Happy Clients", value: "200+", icon: Users }
  ]

  const testimonials = [
    {
      quote: "Adams Real Estate Advisors secured the perfect construction loan for our hotel project. Their expertise and network are unmatched!",
      author: "John Doe",
      title: "CEO, Hospitality Group"
    },
    {
      quote: "The refinancing options provided by Adams Real Estate Advisors significantly improved our cash flow. Highly recommend their services.",
      author: "Jane Smith",
      title: "Real Estate Investor"
    },
    {
      quote: "Their team made the acquisition and renovation financing process seamless. A true partner in commercial real estate.",
      author: "Peter Jones",
      title: "Property Developer"
    }
  ]

  const Navigation = () => (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/LogoDark.png" alt="Adams Real Estate Advisors Logo" className="h-8 w-8 mr-3" />
              <span className="text-xl font-bold text-[#081c3e]">Adams Real Estate Advisors</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavigation('home')} className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>Home</button>
              <div className="relative group">
                <button onClick={() => handleNavigation('services')} className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'services' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>Services</button>
                <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-md py-2 w-64 right-0 top-full mt-1 border border-gray-200 z-50">
                  {services.map((service) => (
                    <button 
                      key={service.id} 
                      onClick={() => handleNavigation(service.id)} 
                      className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#b9945a]/10 hover:text-[#081c3e] transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => handleNavigation('about')} className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>About</button>
              <button onClick={() => handleNavigation('deals')} className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'deals' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>Transactions</button>
              <button onClick={() => handleNavigation('contact')} className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'contact' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>Contact</button>
              <button onClick={() => handleNavigation('lender-program')} className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'lender-program' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>Lender Program</button>
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
                <button 
                  onClick={() => handleMobileNavigation('home')} 
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === 'home' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => handleMobileNavigation('services')} 
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === 'services' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                >
                  All Services
                </button>
                {services.map((service) => (
                  <button 
                    key={service.id}
                    onClick={() => handleMobileNavigation(service.id)} 
                    className={`block w-full text-left px-6 py-2 rounded-md text-sm transition-colors ${activeSection === service.id ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-600 hover:text-[#081c3e] hover:bg-gray-50'}`}
                  >
                    {service.title}
                  </button>
                ))}
                <button 
                  onClick={() => handleMobileNavigation('about')} 
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === 'about' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                >
                  About
                </button>
                <button 
                  onClick={() => handleMobileNavigation('deals')} 
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === 'deals' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                >
                  Transactions
                </button>
                <button 
                  onClick={() => handleMobileNavigation('contact')} 
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === 'contact' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                >
                  Contact
                </button>
                <button 
                  onClick={() => handleMobileNavigation('lender-program')} 
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === 'lender-program' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}
                >
                  Lender Program
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
  )

  const Hero = () => (
    <section 
      className="hero-background text-white py-20 relative overflow-hidden animate-fade-in"
      style={{ 
        backgroundImage: "url('/AdobeStock_551358729.jpeg')",
        animationDelay: '0.2s',
        animationFillMode: 'both'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premier Commercial Real Estate Financing
            <span className="block text-[#b9945a]">Solutions for Developers & Investors</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Adams Real Estate Advisors is your trusted partner for securing competitive commercial mortgages, construction loans, and refinancing options. 
            With over $1.8 billion financed, we empower real estate developers and investors to achieve their project goals across the United States.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#b9945a] text-white hover:bg-[#a5834f] px-8 py-3 text-lg"
              onClick={() => handleNavigation('contact')}
            >
              Get a Free Consultation
            </Button>
            <Button 
              size="lg" 
              className="bg-[#b9945a] text-white hover:bg-[#a5834f] px-8 py-3 text-lg"
              onClick={() => handleNavigation('deals')}
            >
              Explore Our Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  )

  const Stats = () => (
    <section className="py-16 bg-[#081c3e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-12 w-12 text-[#b9945a]" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const WhyChooseUsHome = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Why Partner with Adams Real Estate Advisors?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine deep industry knowledge with a client-centric approach to deliver superior commercial real estate financing outcomes.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg shadow-md bg-[#b9945a]/5">
            <Award className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Proven Expertise</h3>
            <p className="text-gray-700">Over 35 years of experience in complex commercial real estate finance.</p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-md bg-[#b9945a]/5">
            <Users className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Vast Lender Network</h3>
            <p className="text-gray-700">Access to a broad network of traditional and private capital sources.</p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-md bg-[#b9945a]/5">
            <Handshake className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
            <p className="text-gray-700">Customized financing strategies designed for your unique project needs.</p>
          </div>
        </div>
      </div>
    </section>
  )

  const OurProcessHome = () => (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Our Streamlined Financing Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We guide you through every step of the commercial real estate financing journey with clarity and efficiency.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg shadow-md bg-white">
            <Lightbulb className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">1. Consultation & Strategy</h3>
            <p className="text-gray-700">We begin with an in-depth discussion to understand your project, financial goals, and specific requirements. We then develop a tailored financing strategy.</p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-md bg-white">
            <Handshake className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">2. Lender Matching & Negotiation</h3>
            <p className="text-gray-700">Leveraging our extensive network, we identify the most suitable lenders and negotiate competitive terms on your behalf.</p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-md bg-white">
            <CheckCircle className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">3. Closing & Beyond</h3>
            <p className="text-gray-700">We manage the closing process efficiently, ensuring a smooth transaction. Our support extends beyond closing to foster long-term partnerships.</p>
          </div>
        </div>
      </div>
    </section>
  )

  const FeaturedServices = () => (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{backgroundImage: 'url(/AdobeStock_246426046.jpeg)'}}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Our Featured Commercial Real Estate Financing Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the core financing solutions Adams Real Estate Advisors offers to drive your project's success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow border-[#b9945a]/20 cursor-pointer group"
              onClick={() => handleNavigation(service.id)}
            >
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-[#b9945a] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl group-hover:text-[#b9945a] transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const ClientTestimonials = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from satisfied clients who have successfully financed their commercial real estate projects with Adams Real Estate Advisors.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-[#b9945a]/20">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-[#b9945a] mb-4" />
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#081c3e]">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const ServicesPage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#081c3e] to-[#0a2147] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: 'url(/AdobeStock_246426046.jpeg)'}}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Commercial Real Estate Financing Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Comprehensive financing solutions for every commercial real estate project. From construction loans to permanent mortgages, we have the expertise and lender relationships to get your deal done.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Our Complete Service Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adams Real Estate Advisors offers a full spectrum of commercial real estate financing solutions. With over 35 years of experience and $1.8 billion in successful transactions, we have the expertise to handle any project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 border-[#b9945a]/20 cursor-pointer group transform hover:-translate-y-1"
                onClick={() => handleNavigation(service.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-[#b9945a]/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-[#b9945a]/20 transition-colors">
                    <service.icon className="h-8 w-8 text-[#b9945a]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#081c3e] group-hover:text-[#b9945a] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">{service.description}</p>
                  <div className="text-center">
                    <Button className="w-full bg-[#b9945a] hover:bg-[#a5834f] group-hover:shadow-lg transition-all">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Adams */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Why Choose Adams Real Estate Advisors?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">$1.8B+ Financed</h3>
              <p className="text-gray-600">Proven track record with over $1.8 billion in successful commercial real estate financing</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">25+ Lender Network</h3>
              <p className="text-gray-600">Extensive relationships with banks, credit unions, and private lenders nationwide</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">35+ Years Experience</h3>
              <p className="text-gray-600">Decades of expertise in commercial real estate financing across all property types</p>
            </div>
            <div className="text-center">
              <Handshake className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">500+ Transactions</h3>
              <p className="text-gray-600">Successfully closed hundreds of deals for satisfied clients nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#b9945a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Finance Your Next Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact Adams Real Estate Advisors today to discuss your commercial real estate financing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#b9945a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={() => window.open("tel:+15853032423")}>
              Call (585) 303-2423
            </Button>
            <Button size="lg" className="bg-white text-[#b9945a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={() => handleNavigation('contact')}>
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  )

  const AboutPage = () => (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#081c3e] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Your trusted partner in commercial real estate financing for over three decades
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center p-8">
                <img 
                  src="/Alanupscaled.jpg" 
                  alt="Alan Adams - Founder & Principal of Adams Real Estate Advisors" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="text-[#b9945a] font-semibold text-lg mb-4 tracking-wide">ABOUT ADAMS REAL ESTATE ADVISORS</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6 leading-tight">
                Providing Commercial Real Estate Financing for 35+ Years
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Relationships Matter. As the commercial real estate market continues to evolve, the importance of strong lender relationships is key. Adams Real Estate Advisors has achieved success by cultivating relationships with some of the nation's premier lending institutions including life insurance companies, conduits, banks, and private lenders.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                In today's changing market, Adams Real Estate Advisors' role is more valuable than ever. We have access to a number of different lending sources that help to ensure you secure the most competitive financing available today.
              </p>
              <div className="border-l-4 border-[#b9945a] pl-6">
                <div className="text-3xl text-[#081c3e] mb-2" style={{fontFamily: 'Dancing Script, cursive', fontWeight: '600'}}>Alan Adams</div>
                <div className="text-[#b9945a] font-semibold">FOUNDER & PRINCIPAL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[#b9945a] font-semibold text-lg mb-4 tracking-wide">PROVEN TRACK RECORD</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">It's in the Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adams Real Estate Advisors' impressive transaction volume and experience gives us an exceptional vantage point from which to view commercial real estate capital markets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#b9945a]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-10 w-10 text-[#b9945a]" />
              </div>
              <div className="text-4xl font-bold text-[#081c3e] mb-2">$1.8B+</div>
              <div className="text-gray-600">Total Production</div>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-[#b9945a]" />
              </div>
              <div className="text-4xl font-bold text-[#081c3e] mb-2">25+</div>
              <div className="text-gray-600">Lender Relationships</div>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-[#b9945a]" />
              </div>
              <div className="text-4xl font-bold text-[#081c3e] mb-2">500+</div>
              <div className="text-gray-600">Transactions Closed</div>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-[#b9945a]" />
              </div>
              <div className="text-4xl font-bold text-[#081c3e] mb-2">35+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[#b9945a] font-semibold text-lg mb-4 tracking-wide">OUR JOURNEY</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Company History</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading commercial real estate financing firm
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#b9945a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1989</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Company Founded</h3>
              <p className="text-gray-600">Alan Adams establishes Adams Real Estate Advisors with a vision to revolutionize commercial real estate financing</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1995</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Regional Expansion</h3>
              <p className="text-gray-600">Expanded operations to serve clients across the Midwest, establishing key lender relationships</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2005</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">$500M Milestone</h3>
              <p className="text-gray-600">Reached $500 million in total financing, cementing our position as a trusted industry leader</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2010</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Technology Integration</h3>
              <p className="text-gray-600">Implemented cutting-edge technology platforms to streamline the financing process for clients</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2015</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">$1B Achievement</h3>
              <p className="text-gray-600">Surpassed $1 billion in total financing, demonstrating consistent growth and client trust</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2020</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Market Leadership</h3>
              <p className="text-gray-600">Navigated challenging market conditions while maintaining strong performance and client relationships</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2022</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Digital Innovation</h3>
              <p className="text-gray-600">Launched advanced digital platforms for enhanced client experience and faster processing</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2024</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">$1.8B+ Milestone</h3>
              <p className="text-gray-600">Achieved $1.8 billion in total financing, continuing our legacy of excellence and growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[#b9945a] font-semibold text-lg mb-4 tracking-wide">HOW WE WORK</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">The Adams Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven six-step process ensures optimal financing solutions for every client
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#b9945a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Needs Identification</h3>
              <p className="text-gray-600">We begin by understanding your specific financing requirements and project goals</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Market Analysis</h3>
              <p className="text-gray-600">Our team analyzes current market conditions and identifies optimal lending sources</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Proposal Development</h3>
              <p className="text-gray-600">We craft compelling loan proposals that highlight your project's strengths</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Lender Negotiation</h3>
              <p className="text-gray-600">We leverage our relationships to negotiate the best possible terms for your financing</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Transaction Management</h3>
              <p className="text-gray-600">We manage every aspect of the transaction from application to closing</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">6</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Ongoing Support</h3>
              <p className="text-gray-600">Our relationship continues beyond closing with ongoing support and future financing needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[#b9945a] font-semibold text-lg mb-4 tracking-wide">WHY CHOOSE US</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of partnering with Adams Real Estate Advisors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-[#b9945a]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-[#b9945a]" />
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Relationship-Driven</h3>
              <p className="text-gray-600">We prioritize long-term relationships over short-term transactions, ensuring your success is our success</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-[#b9945a]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#b9945a]" />
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Extensive Network</h3>
              <p className="text-gray-600">Access to 25+ premier lending institutions including life insurance companies, banks, and private lenders</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-[#b9945a]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#b9945a]" />
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Proven Expertise</h3>
              <p className="text-gray-600">35+ years of experience with $1.8B+ in successful financing across diverse property types</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-[#b9945a]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#b9945a]" />
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Efficient Process</h3>
              <p className="text-gray-600">Streamlined procedures and technology integration for faster approvals and closings</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-[#b9945a]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-[#b9945a]" />
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Tailored Solutions</h3>
              <p className="text-gray-600">Customized financing strategies designed specifically for your unique project requirements</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-[#b9945a]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#b9945a]" />
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">Market Knowledge</h3>
              <p className="text-gray-600">Deep understanding of market conditions and trends to secure optimal financing terms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[#b9945a] font-semibold text-lg mb-4 tracking-wide">OUR TEAM</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Meet Our Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team brings decades of commercial real estate financing expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="/Alanupscaled.jpg" 
                  alt="Alan Adams - Founder & Principal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Alan Adams</h3>
              <p className="text-[#b9945a] font-semibold mb-3">Founder & Principal</p>
              <p className="text-gray-600 text-sm">Rochester, NY</p>
              <p className="text-gray-600 mt-3">35+ years of commercial real estate financing experience with expertise in construction loans, permanent mortgages, and complex transactions.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6 flex items-center justify-center">
                <User className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Senior Associate</h3>
              <p className="text-[#b9945a] font-semibold mb-3">Loan Origination</p>
              <p className="text-gray-600 text-sm">Midwest Region</p>
              <p className="text-gray-600 mt-3">Specializes in multifamily and commercial property financing with extensive lender relationship management.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6 flex items-center justify-center">
                <User className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Transaction Manager</h3>
              <p className="text-[#b9945a] font-semibold mb-3">Operations</p>
              <p className="text-gray-600 text-sm">Rochester, NY</p>
              <p className="text-gray-600 mt-3">Manages transaction processing and client communications to ensure smooth closings and exceptional service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lender Partnership Contact Form */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: 'url(/AdobeStock_246426046.jpeg)'}}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#081c3e] mb-4">Partner With Us Today</h2>
              <p className="text-xl text-gray-600">
                Submit your information to join our exclusive lender network and start accessing high-quality commercial real estate deals
              </p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your full name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Name of business seeking funding" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="your.email@company.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title/Position</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your title" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Geographic Focus</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select primary market</option>
                  <option value="iowa">Iowa</option>
                  <option value="nebraska">Nebraska</option>
                  <option value="chicago-suburbs">Chicago Suburbs</option>
                  <option value="midwest">General Midwest</option>
                  <option value="national">National</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loan Types of Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select loan type</option>
                  <option value="construction">Construction Loans</option>
                  <option value="permanent">Permanent Mortgages</option>
                  <option value="refinancing">Refinancing</option>
                  <option value="acquisition">Acquisition & Renovation</option>
                  <option value="all">All Loan Types</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Typical Loan Size Range</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select range</option>
                  <option value="750k-2m">$750K - $2M</option>
                  <option value="2m-5m">$2M - $5M</option>
                  <option value="5m-10m">$5M - $10M</option>
                  <option value="10m-25m">$10M - $25M</option>
                  <option value="25m-40m">$25M - $40M</option>
                  <option value="40m+">$40M+</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Tell us about your lending criteria, requirements, or any specific information about your business..."></textarea>
              </div>
              
              <div className="md:col-span-2">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-sm text-gray-600">
                    I consent to Adams Real Estate Advisors contacting me about partnership opportunities and understand that my information will be kept confidential and used solely for business development purposes.
                  </span>
                </label>
              </div>
              
              <div className="md:col-span-2 text-center">
                <Button type="submit" size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-12 py-4 text-lg font-semibold">
                  Submit Partnership Inquiry
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll review your information and contact you within 24-48 hours to discuss partnership opportunities.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#b9945a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Adams Advantage?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let our 35+ years of experience and $1.8B+ in successful financing work for your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#b9945a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={() => handleNavigation('contact')}>
              Start Your Project
            </Button>
            <Button size="lg" className="bg-white text-[#b9945a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={() => window.open('tel:+15853032423')}>
              Call (585) 303-2423
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              📍 112 Old English Drive, Rochester, NY 14616 | 📧 Alan@AdamsRealEstateAdvisors.com | 📞 (585) 303-2423
            </p>
          </div>
        </div>
      </section>
    </div>
  )

  const OldAboutPage = () => (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">About Adams Real Estate Advisors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 35 years of experience and $1.8 billion in successful financing, Adams Real Estate Advisors is your trusted partner in commercial real estate finance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#081c3e] mb-6">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Founded with a vision to simplify commercial real estate financing, Adams Real Estate Advisors has grown to become a leading mortgage brokerage firm. 
              Our extensive network of lenders and deep industry expertise enable us to secure optimal financing solutions for our clients.
            </p>
            <p className="text-gray-700 mb-4">
              We specialize in construction loans, permanent mortgages, and refinancing for a wide range of commercial properties including multifamily, retail, office, and hospitality assets.
            </p>
          </div>
          <div className="bg-[#b9945a]/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#081c3e] mb-6">Our Mission</h3>
            <p className="text-gray-700">
              To provide exceptional commercial real estate financing services that empower our clients to achieve their investment goals through innovative solutions, competitive terms, and unparalleled customer service.
            </p>
          </div>
        </div>
      </div>
    </section>
  )

  const Deals = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Recent Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successfully financed commercial real estate projects across various property types and markets.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-[#b9945a]/20">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center" style={{display: 'none'}}>
                  <Building2 className="h-12 w-12 text-gray-500" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{deal.name}</CardTitle>
                <CardDescription>{deal.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary" className="bg-[#b9945a]/10 text-[#b9945a]">
                    {deal.type}
                  </Badge>
                  <span className="font-bold text-[#081c3e]">{deal.amount}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const Contact = () => (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Contact Adams Real Estate Advisors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to secure financing for your commercial real estate project? Get in touch with our experienced team today.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#081c3e] mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#b9945a] mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#081c3e]">Address</h4>
                  <p className="text-gray-700">112 Old English Drive<br />Rochester, NY 14616</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#b9945a] mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#081c3e]">Email</h4>
                  <a href="mailto:Alan@AdamsRealEstateAdvisors.com" className="text-[#b9945a] hover:underline">
                    Alan@AdamsRealEstateAdvisors.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#b9945a] mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#081c3e]">Phone</h4>
                  <a href="tel:+15853032423" className="text-[#b9945a] hover:underline">
                    (585) 303-2423
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#081c3e] mb-6">Request a Consultation</h3>
            <p className="text-gray-700 mb-6">
              Fill out the form below and we'll get back to you within 24 hours to discuss your commercial real estate financing needs.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b9945a]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b9945a]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b9945a]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b9945a]" placeholder="Tell us about your project..."></textarea>
              </div>
              <Button className="w-full bg-[#b9945a] hover:bg-[#a5834f]">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const ConstructionLoansPage = () => (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#081c3e] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Construction Loans: Building Your Vision from the Ground Up
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Secure competitive construction financing for commercial real estate projects from 
              <span className="text-[#b9945a] font-semibold"> $750K to $40M</span>. 
              Fast approvals, flexible terms, and expert guidance throughout your construction journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] px-8 py-4 text-lg" onClick={() => handleNavigation('contact')}>
                Get Construction Loan Quote
              </Button>
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-4 text-lg" onClick={() => window.open("mailto:alan@adamsrealestateadvisors.com")}>
                View Construction Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Why Choose Adams Real Estate Advisors for Construction Loans?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 35 years of experience securing construction financing for developers, contractors, and investors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Building2 className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Fast Approvals</h3>
              <p className="text-gray-600">Streamlined process with decisions in 7-14 days</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <TrendingUp className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Market-leading rates starting at 6.10%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Dedicated support throughout construction</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <CheckCircle className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Flexible Terms</h3>
              <p className="text-gray-600">Customized loan structures for your project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Loan Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Construction Loan Terms & Features</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Loan Amounts</h4>
                    <p className="text-gray-600">$750,000 to $40,000,000 for qualified projects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Loan-to-Cost Ratio</h4>
                    <p className="text-gray-600">Up to 80% of total project costs including land acquisition</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Interest Rates</h4>
                    <p className="text-gray-600">Competitive floating rates starting at 6.10% (Prime + margin)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Construction Period</h4>
                    <p className="text-gray-600">12-36 months with interest-only payments during construction</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Draw Schedule</h4>
                    <p className="text-gray-600">Flexible draw schedules based on construction milestones</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Property Types We Finance</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Multifamily</h4>
                  <p className="text-sm text-gray-600">Apartments, condos, senior living</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Retail</h4>
                  <p className="text-sm text-gray-600">Shopping centers, strip malls</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Office</h4>
                  <p className="text-sm text-gray-600">Office buildings, medical facilities</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Industrial</h4>
                  <p className="text-sm text-gray-600">Warehouses, manufacturing</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Hospitality</h4>
                  <p className="text-sm text-gray-600">Hotels, resorts, restaurants</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Mixed-Use</h4>
                  <p className="text-sm text-gray-600">Combined residential/commercial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Our Construction Loan Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined approval process designed to get your construction project funded quickly
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Application & Review</h3>
              <p className="text-gray-600">Submit project plans, budgets, and financial documentation for initial review</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Underwriting & Approval</h3>
              <p className="text-gray-600">Comprehensive analysis of project feasibility, borrower qualifications, and market conditions</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Closing & Funding</h3>
              <p className="text-gray-600">Execute loan documents and establish draw schedule for construction phases</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Construction Monitoring</h3>
              <p className="text-gray-600">Regular inspections and draw releases throughout the construction process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Construction Loan Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Experience:</strong> Minimum 3 years of commercial construction or development experience
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Down Payment:</strong> 20-30% of total project cost required
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Credit Score:</strong> Minimum 650 personal credit score for principals
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Financial Strength:</strong> Demonstrated liquidity and net worth requirements
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Project Plans:</strong> Complete architectural plans and construction budget
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>General Contractor:</strong> Licensed, bonded contractor with relevant experience
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Required Documentation</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Completed loan application</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Personal and business financial statements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Tax returns (3 years)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Architectural plans and specifications</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Detailed construction budget</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Market analysis and rent roll projections</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>General contractor information and references</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Environmental and engineering reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-[#081c3e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Construction Loan Success Stories</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real projects we've financed across the United States
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Hampton Inn & Suites</h3>
              <p className="text-blue-100 mb-4">Pittsburgh, PA</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$11.98M</div>
              <p className="text-sm text-blue-100">120-room hotel construction loan with 18-month term</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Stonebriar Glen Apartments</h3>
              <p className="text-blue-100 mb-4">Brockport, NY</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$16.10M</div>
              <p className="text-sm text-blue-100">144-unit multifamily construction with permanent takeout</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Doud Apartments</h3>
              <p className="text-blue-100 mb-4">Gates, NY</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$26.60M</div>
              <p className="text-sm text-blue-100">Large-scale apartment complex with phased construction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lender Partnership Contact Form */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: 'url(/AdobeStock_246426046.jpeg)'}}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#081c3e] mb-4">Partner With Us Today</h2>
              <p className="text-xl text-gray-600">
                Submit your information to join our exclusive lender network and start accessing high-quality commercial real estate deals
              </p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your full name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Name of business seeking funding" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="your.email@company.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title/Position</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your title" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Geographic Focus</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select primary market</option>
                  <option value="iowa">Iowa</option>
                  <option value="nebraska">Nebraska</option>
                  <option value="chicago-suburbs">Chicago Suburbs</option>
                  <option value="midwest">General Midwest</option>
                  <option value="national">National</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loan Types of Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select loan type</option>
                  <option value="construction">Construction Loans</option>
                  <option value="permanent">Permanent Mortgages</option>
                  <option value="refinancing">Refinancing</option>
                  <option value="acquisition">Acquisition & Renovation</option>
                  <option value="all">All Loan Types</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Typical Loan Size Range</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select range</option>
                  <option value="750k-2m">$750K - $2M</option>
                  <option value="2m-5m">$2M - $5M</option>
                  <option value="5m-10m">$5M - $10M</option>
                  <option value="10m-25m">$10M - $25M</option>
                  <option value="25m-40m">$25M - $40M</option>
                  <option value="40m+">$40M+</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Tell us about your lending criteria, requirements, or any specific information about your business..."></textarea>
              </div>
              
              <div className="md:col-span-2">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-sm text-gray-600">
                    I consent to Adams Real Estate Advisors contacting me about partnership opportunities and understand that my information will be kept confidential and used solely for business development purposes.
                  </span>
                </label>
              </div>
              
              <div className="md:col-span-2 text-center">
                <Button type="submit" size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-12 py-4 text-lg font-semibold">
                  Submit Partnership Inquiry
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll review your information and contact you within 24-48 hours to discuss partnership opportunities.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#b9945a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free consultation and construction loan quote within 24 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#b9945a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={() => handleNavigation('contact')}>
              Get Free Quote
            </Button>
            <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-4 text-lg" onClick={() => window.open("mailto:alan@adamsrealestateadvisors.com")}>
              Call (585) 303-2423
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              📍 112 Old English Drive, Rochester, NY 14616 | 📧 Alan@AdamsRealEstateAdvisors.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )

  const PermanentMortgagesPage = () => (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#081c3e] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Permanent Mortgages: Securing Your Long-Term Investment
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Stabilize your commercial real estate investments with permanent financing from 
              <span className="text-[#b9945a] font-semibold"> $750K to $40M</span>. 
              Fixed rates, long-term stability, and predictable cash flow for income-producing properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] px-8 py-4 text-lg" onClick={() => handleNavigation('contact')}>
                Get Permanent Mortgage Quote
              </Button>
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-4 text-lg" onClick={() => window.open("mailto:alan@adamsrealestateadvisors.com")}>
                View Mortgage Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Why Choose Our Permanent Mortgage Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive permanent financing solutions designed for long-term commercial real estate success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <TrendingUp className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Stable Rates</h3>
              <p className="text-gray-600">Fixed-rate options for predictable payments</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Building2 className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Long Terms</h3>
              <p className="text-gray-600">Up to 25-year amortization periods</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <CheckCircle className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">High LTV</h3>
              <p className="text-gray-600">Up to 80% loan-to-value ratios</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Expert Service</h3>
              <p className="text-gray-600">Dedicated relationship management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Permanent Mortgage Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Permanent Mortgage Terms & Features</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Loan Amounts</h4>
                    <p className="text-gray-600">$750,000 to $40,000,000 for stabilized properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Loan-to-Value Ratio</h4>
                    <p className="text-gray-600">Up to 75% standard, up to 80% for newer multifamily properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Interest Rates</h4>
                    <p className="text-gray-600">Competitive fixed rates starting at 6.10% (5-7 year terms)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Amortization</h4>
                    <p className="text-gray-600">Up to 25-year amortization for lower monthly payments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">DSCR Requirements</h4>
                    <p className="text-gray-600">Minimum 1.20x debt service coverage ratio</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Prepayment Options</h4>
                    <p className="text-gray-600">Flexible prepayment terms with step-down penalties</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Property Types for Permanent Financing</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Multifamily</h4>
                  <p className="text-sm text-gray-600">Apartments, condos, senior housing</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Office Buildings</h4>
                  <p className="text-sm text-gray-600">Class A, B, C office properties</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Retail Centers</h4>
                  <p className="text-sm text-gray-600">Shopping centers, strip malls</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Industrial</h4>
                  <p className="text-sm text-gray-600">Warehouses, distribution centers</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Hospitality</h4>
                  <p className="text-sm text-gray-600">Hotels, extended stay properties</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Mixed-Use</h4>
                  <p className="text-sm text-gray-600">Combined use developments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Permanent Mortgage Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Our Permanent Mortgage Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined process to secure long-term financing for your stabilized commercial properties
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Property Analysis</h3>
              <p className="text-gray-600">Comprehensive review of property financials, rent rolls, and market position</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Lender Matching</h3>
              <p className="text-gray-600">Identify optimal lenders based on property type, location, and loan requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Underwriting</h3>
              <p className="text-gray-600">Complete underwriting process including appraisal, environmental, and financial review</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Closing</h3>
              <p className="text-gray-600">Coordinate closing process and ensure smooth transition to permanent financing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Permanent Mortgage Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Stabilized Property:</strong> Minimum 90% occupancy for 12+ months
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Cash Flow:</strong> Positive net operating income with 1.20x DSCR minimum
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Experience:</strong> Minimum 3 years commercial real estate ownership/management
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Credit Score:</strong> Minimum 650 personal credit score for guarantors
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Net Worth:</strong> Demonstrated liquidity and net worth requirements
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Property Condition:</strong> Well-maintained property in good physical condition
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Required Documentation</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Completed loan application</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Property operating statements (3 years)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Current rent roll and lease abstracts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Personal and business financial statements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Tax returns (3 years personal and entity)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Property management agreements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Insurance certificates and policies</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Environmental and engineering reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-[#081c3e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Permanent Mortgage Success Stories</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stabilized properties we've successfully financed with permanent mortgages
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Brickstone Senior Housing</h3>
              <p className="text-blue-100 mb-4">Brighton, NY</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$27.00M</div>
              <p className="text-sm text-blue-100">156-unit senior living facility with 7-year fixed rate</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Dockside Apartments II</h3>
              <p className="text-blue-100 mb-4">Buffalo, NY</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$8.56M</div>
              <p className="text-sm text-blue-100">Stabilized multifamily property with competitive permanent financing</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Maumee Senior Living</h3>
              <p className="text-blue-100 mb-4">Maumee, OH</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$11.73M</div>
              <p className="text-sm text-blue-100">Long-term permanent mortgage for senior housing development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Permanent Financing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Benefits of Permanent Mortgage Financing</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <TrendingUp className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Predictable Payments</h3>
              <p className="text-gray-600">Fixed-rate options provide stable monthly payments for better cash flow planning and budgeting.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Long-Term Stability</h3>
              <p className="text-gray-600">Extended amortization periods reduce monthly payments and improve property cash flow.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Portfolio Growth</h3>
              <p className="text-gray-600">Free up capital for additional investments while maintaining ownership of cash-flowing assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lender Partnership Contact Form */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: 'url(/AdobeStock_246426046.jpeg)'}}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#081c3e] mb-4">Partner With Us Today</h2>
              <p className="text-xl text-gray-600">
                Submit your information to join our exclusive lender network and start accessing high-quality commercial real estate deals
              </p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your full name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Name of business seeking funding" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="your.email@company.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title/Position</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your title" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Geographic Focus</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select primary market</option>
                  <option value="iowa">Iowa</option>
                  <option value="nebraska">Nebraska</option>
                  <option value="chicago-suburbs">Chicago Suburbs</option>
                  <option value="midwest">General Midwest</option>
                  <option value="national">National</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loan Types of Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select loan type</option>
                  <option value="construction">Construction Loans</option>
                  <option value="permanent">Permanent Mortgages</option>
                  <option value="refinancing">Refinancing</option>
                  <option value="acquisition">Acquisition & Renovation</option>
                  <option value="all">All Loan Types</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Typical Loan Size Range</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select range</option>
                  <option value="750k-2m">$750K - $2M</option>
                  <option value="2m-5m">$2M - $5M</option>
                  <option value="5m-10m">$5M - $10M</option>
                  <option value="10m-25m">$10M - $25M</option>
                  <option value="25m-40m">$25M - $40M</option>
                  <option value="40m+">$40M+</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Tell us about your lending criteria, requirements, or any specific information about your business..."></textarea>
              </div>
              
              <div className="md:col-span-2">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-sm text-gray-600">
                    I consent to Adams Real Estate Advisors contacting me about partnership opportunities and understand that my information will be kept confidential and used solely for business development purposes.
                  </span>
                </label>
              </div>
              
              <div className="md:col-span-2 text-center">
                <Button type="submit" size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-12 py-4 text-lg font-semibold">
                  Submit Partnership Inquiry
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll review your information and contact you within 24-48 hours to discuss partnership opportunities.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#b9945a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Permanent Financing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free permanent mortgage analysis and competitive rate quote for your stabilized property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#b9945a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={() => handleNavigation('contact')}>
              Get Free Analysis
            </Button>
            <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-4 text-lg" onClick={() => window.open("mailto:alan@adamsrealestateadvisors.com")}>
              Call (585) 303-2423
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              📍 112 Old English Drive, Rochester, NY 14616 | 📧 Alan@AdamsRealEstateAdvisors.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )

  const CommercialRefinancingPage = () => (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#081c3e] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Commercial Real Estate Refinancing: Optimize Your Investment
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Lower your payments, access equity, or improve loan terms with strategic refinancing from 
              <span className="text-[#b9945a] font-semibold"> $750K to $40M</span>. 
              Competitive rates, fast closings, and expert guidance to maximize your property's potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] px-8 py-4 text-lg" onClick={() => handleNavigation('contact')}>
                Get Refinancing Quote
              </Button>
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-4 text-lg" onClick={() => window.open("mailto:alan@adamsrealestateadvisors.com")}>
                Calculate Savings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Why Refinance Your Commercial Property?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic refinancing can unlock significant value and improve your property's financial performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <TrendingUp className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Lower Rates</h3>
              <p className="text-gray-600">Reduce monthly payments with better interest rates</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Building2 className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Access Equity</h3>
              <p className="text-gray-600">Cash out equity for new investments or improvements</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <CheckCircle className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Better Terms</h3>
              <p className="text-gray-600">Improve loan structure and remove guarantees</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Fast Process</h3>
              <p className="text-gray-600">Streamlined refinancing in 30-45 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Refinancing Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Refinancing Options & Terms</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#081c3e] mb-8">Rate & Term Refinancing</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Lower Interest Rates</h4>
                    <p className="text-gray-600">Competitive rates starting at 6.10% to reduce monthly payments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Extended Terms</h4>
                    <p className="text-gray-600">Up to 25-year amortization to improve cash flow</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Fixed Rate Options</h4>
                    <p className="text-gray-600">Lock in stable payments with 5-10 year fixed rates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Remove Guarantees</h4>
                    <p className="text-gray-600">Transition to non-recourse financing when possible</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#081c3e] mb-8">Cash-Out Refinancing</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Access Property Equity</h4>
                    <p className="text-gray-600">Up to 75% LTV to unlock capital for new investments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Property Improvements</h4>
                    <p className="text-gray-600">Fund renovations to increase property value and rents</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Portfolio Expansion</h4>
                    <p className="text-gray-600">Use proceeds for down payments on additional properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Debt Consolidation</h4>
                    <p className="text-gray-600">Consolidate multiple loans into single payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Refinance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">When Should You Refinance?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identify the optimal timing for refinancing your commercial real estate investment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <TrendingUp className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Interest Rates Drop</h3>
              <p className="text-gray-600">Market rates are 0.5% or more below your current rate, making refinancing financially beneficial.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Property Value Increased</h3>
              <p className="text-gray-600">Significant appreciation allows for better loan terms or cash-out opportunities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Loan Maturity</h3>
              <p className="text-gray-600">Existing loan is approaching maturity and needs to be renewed or replaced.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Improved Credit</h3>
              <p className="text-gray-600">Better credit profile or property performance qualifies for improved terms.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Cash Flow Needs</h3>
              <p className="text-gray-600">Need to improve monthly cash flow through lower payments or longer terms.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <TrendingUp className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Growth Capital</h3>
              <p className="text-gray-600">Need capital for property improvements or additional real estate investments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Refinancing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Our Refinancing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined process designed to close your refinancing quickly and efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Analysis</h3>
              <p className="text-gray-600 text-sm">Review current loan and property performance</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Strategy</h3>
              <p className="text-gray-600 text-sm">Develop optimal refinancing strategy and terms</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Application</h3>
              <p className="text-gray-600 text-sm">Submit applications to multiple qualified lenders</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Underwriting</h3>
              <p className="text-gray-600 text-sm">Manage underwriting and appraisal process</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">5</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Closing</h3>
              <p className="text-gray-600 text-sm">Coordinate closing and fund new loan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Refinancing Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Seasoning:</strong> Minimum 12 months ownership of existing property
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Cash Flow:</strong> Positive NOI with minimum 1.20x debt service coverage
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Occupancy:</strong> Minimum 85% occupancy for stabilized properties
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Credit Score:</strong> Minimum 650 personal credit score for guarantors
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Financial Strength:</strong> Adequate liquidity and net worth requirements
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Property Condition:</strong> Well-maintained property in good physical condition
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Required Documentation</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Current loan documents and payment history</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Property operating statements (2-3 years)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Current rent roll and lease abstracts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Personal and business financial statements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Tax returns (3 years personal and entity)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Property insurance and management agreements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Recent property appraisal (if available)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-[#081c3e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Refinancing Success Stories</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real refinancing transactions that delivered significant value to our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Villa Bordeaux Apartments</h3>
              <p className="text-blue-100 mb-4">Peoria, IL</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$8.50M</div>
              <p className="text-sm text-blue-100">146-unit refinance with 1.5% rate reduction and cash-out</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Skaneateles Social</h3>
              <p className="text-blue-100 mb-4">Skaneateles, NY</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$7.50M</div>
              <p className="text-sm text-blue-100">Mixed-use property refinance with improved terms and cash-out</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Green Bay Portfolio</h3>
              <p className="text-blue-100 mb-4">Wisconsin</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$13.65M</div>
              <p className="text-sm text-blue-100">Multi-property portfolio refinance with consolidated financing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lender Partnership Contact Form */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: 'url(/AdobeStock_246426046.jpeg)'}}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#081c3e] mb-4">Partner With Us Today</h2>
              <p className="text-xl text-gray-600">
                Submit your information to join our exclusive lender network and start accessing high-quality commercial real estate deals
              </p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your full name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Name of business seeking funding" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="your.email@company.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title/Position</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your title" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Geographic Focus</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select primary market</option>
                  <option value="iowa">Iowa</option>
                  <option value="nebraska">Nebraska</option>
                  <option value="chicago-suburbs">Chicago Suburbs</option>
                  <option value="midwest">General Midwest</option>
                  <option value="national">National</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loan Types of Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select loan type</option>
                  <option value="construction">Construction Loans</option>
                  <option value="permanent">Permanent Mortgages</option>
                  <option value="refinancing">Refinancing</option>
                  <option value="acquisition">Acquisition & Renovation</option>
                  <option value="all">All Loan Types</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Typical Loan Size Range</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select range</option>
                  <option value="750k-2m">$750K - $2M</option>
                  <option value="2m-5m">$2M - $5M</option>
                  <option value="5m-10m">$5M - $10M</option>
                  <option value="10m-25m">$10M - $25M</option>
                  <option value="25m-40m">$25M - $40M</option>
                  <option value="40m+">$40M+</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Tell us about your lending criteria, requirements, or any specific information about your business..."></textarea>
              </div>
              
              <div className="md:col-span-2">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-sm text-gray-600">
                    I consent to Adams Real Estate Advisors contacting me about partnership opportunities and understand that my information will be kept confidential and used solely for business development purposes.
                  </span>
                </label>
              </div>
              
              <div className="md:col-span-2 text-center">
                <Button type="submit" size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-12 py-4 text-lg font-semibold">
                  Submit Partnership Inquiry
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll review your information and contact you within 24-48 hours to discuss partnership opportunities.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#b9945a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Commercial Loan?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free refinancing analysis and see how much you could save with better terms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#b9945a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={() => handleNavigation('contact')}>
              Get Free Analysis
            </Button>
            <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-4 text-lg" onClick={() => window.open("mailto:alan@adamsrealestateadvisors.com")}>
              Call (585) 303-2423
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              📍 112 Old English Drive, Rochester, NY 14616 | 📧 Alan@AdamsRealEstateAdvisors.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )

  const AcquisitionRenovationPage = () => (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#081c3e] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Acquisition & Renovation Financing: Transform Your Investment
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Finance both acquisition and renovation costs with integrated loan solutions from 
              <span className="text-[#b9945a] font-semibold"> $750K to $40M</span>. 
              Maximize value-add opportunities with flexible financing for distressed and underperforming properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] px-8 py-4 text-lg" onClick={() => handleNavigation('contact')}>
                Get Value-Add Financing
              </Button>
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-4 text-lg" onClick={() => window.open("mailto:alan@adamsrealestateadvisors.com")}>
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Why Choose Acquisition & Renovation Financing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock value-add opportunities with integrated financing solutions designed for property transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Building2 className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Single Loan</h3>
              <p className="text-gray-600">Finance acquisition and renovation with one loan</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <TrendingUp className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Value Creation</h3>
              <p className="text-gray-600">Transform underperforming assets into cash cows</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <CheckCircle className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Flexible Terms</h3>
              <p className="text-gray-600">Interest-only payments during renovation period</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Expert Support</h3>
              <p className="text-gray-600">Guidance through complex value-add projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Acquisition & Renovation Loan Terms</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Loan Amounts</h4>
                    <p className="text-gray-600">$750,000 to $40,000,000 for acquisition plus renovation costs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Loan-to-Cost Ratio</h4>
                    <p className="text-gray-600">Up to 80% of total project cost (acquisition + renovation)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Interest Rates</h4>
                    <p className="text-gray-600">Competitive floating rates starting at 6.25% during renovation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Renovation Period</h4>
                    <p className="text-gray-600">12-24 months with interest-only payments during construction</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Permanent Conversion</h4>
                    <p className="text-gray-600">Convert to permanent financing upon completion and stabilization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Draw Schedule</h4>
                    <p className="text-gray-600">Controlled draws based on renovation milestones and inspections</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Ideal Value-Add Properties</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Distressed Multifamily</h4>
                  <p className="text-sm text-gray-600">Underperforming apartments needing unit upgrades and common area improvements</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Outdated Office Buildings</h4>
                  <p className="text-gray-600">Class B/C office properties requiring modernization and tenant improvements</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Underutilized Retail</h4>
                  <p className="text-gray-600">Shopping centers needing repositioning, facade updates, or tenant mix changes</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Industrial Conversions</h4>
                  <p className="text-gray-600">Warehouses requiring modernization for new industrial uses or conversions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-[#b9945a] mb-2" />
                  <h4 className="font-semibold text-[#081c3e]">Hospitality Renovations</h4>
                  <p className="text-gray-600">Hotels needing brand conversions, room renovations, or amenity upgrades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value-Add Strategy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Value-Add Investment Strategies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common renovation strategies that create significant value and increase property income
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <TrendingUp className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Unit Upgrades</h3>
              <p className="text-gray-600">Modernize kitchens, bathrooms, and finishes to command higher rents and reduce vacancy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Common Area Improvements</h3>
              <p className="text-gray-600">Enhance lobbies, fitness centers, and outdoor spaces to attract quality tenants.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Energy Efficiency</h3>
              <p className="text-gray-600">Install energy-efficient systems to reduce operating costs and increase NOI.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Space Optimization</h3>
              <p className="text-gray-600">Reconfigure layouts to maximize rentable square footage and improve functionality.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Exterior Improvements</h3>
              <p className="text-gray-600">Update facades, landscaping, and signage to improve curb appeal and marketability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <TrendingUp className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Technology Integration</h3>
              <p className="text-gray-600">Add smart building features and high-speed internet to meet modern tenant demands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Our Value-Add Financing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive process to evaluate, finance, and execute your value-add investment strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Deal Analysis</h3>
              <p className="text-gray-600">Evaluate acquisition price, renovation costs, and projected returns</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Financing Structure</h3>
              <p className="text-gray-600">Design optimal loan structure for acquisition and renovation phases</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Renovation Execution</h3>
              <p className="text-gray-600">Manage draw schedule and monitor renovation progress and budget</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Stabilization</h3>
              <p className="text-gray-600">Convert to permanent financing upon completion and lease-up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Value-Add Financing Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Experience:</strong> Minimum 3 years value-add or renovation experience required
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Down Payment:</strong> 20-30% of total project cost (acquisition + renovation)
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Renovation Budget:</strong> Detailed scope of work and contractor estimates
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Exit Strategy:</strong> Clear plan for stabilization and permanent financing
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Credit Score:</strong> Minimum 650 personal credit score for guarantors
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Liquidity:</strong> Adequate reserves for cost overruns and carrying costs
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Required Documentation</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Purchase agreement and property details</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Detailed renovation budget and scope of work</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>General contractor information and references</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Market analysis and rent projections</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Personal and business financial statements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Tax returns (3 years personal and entity)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Property management plan and leasing strategy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Environmental and engineering reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-[#081c3e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Value-Add Success Stories</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real value-add projects we've financed that delivered exceptional returns
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Addisville Commons</h3>
              <p className="text-blue-100 mb-4">Richboro, PA</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$18.02M</div>
              <p className="text-sm text-blue-100">Retail center acquisition and renovation with tenant improvements</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Flats on Fifth</h3>
              <p className="text-blue-100 mb-4">Pittsburgh, PA</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$10.79M</div>
              <p className="text-sm text-blue-100">Apartment complex acquisition and unit upgrade program</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Peregrine Memory Care</h3>
              <p className="text-blue-100 mb-4">Colonie, NY</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$7.90M</div>
              <p className="text-sm text-blue-100">Senior living facility acquisition and modernization project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lender Partnership Contact Form */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: 'url(/AdobeStock_246426046.jpeg)'}}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#081c3e] mb-4">Partner With Us Today</h2>
              <p className="text-xl text-gray-600">
                Submit your information to join our exclusive lender network and start accessing high-quality commercial real estate deals
              </p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your full name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Name of business seeking funding" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="your.email@company.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title/Position</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your title" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Geographic Focus</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select primary market</option>
                  <option value="iowa">Iowa</option>
                  <option value="nebraska">Nebraska</option>
                  <option value="chicago-suburbs">Chicago Suburbs</option>
                  <option value="midwest">General Midwest</option>
                  <option value="national">National</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loan Types of Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select loan type</option>
                  <option value="construction">Construction Loans</option>
                  <option value="permanent">Permanent Mortgages</option>
                  <option value="refinancing">Refinancing</option>
                  <option value="acquisition">Acquisition & Renovation</option>
                  <option value="all">All Loan Types</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Typical Loan Size Range</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select range</option>
                  <option value="750k-2m">$750K - $2M</option>
                  <option value="2m-5m">$2M - $5M</option>
                  <option value="5m-10m">$5M - $10M</option>
                  <option value="10m-25m">$10M - $25M</option>
                  <option value="25m-40m">$25M - $40M</option>
                  <option value="40m+">$40M+</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Tell us about your lending criteria, requirements, or any specific information about your business..."></textarea>
              </div>
              
              <div className="md:col-span-2">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-sm text-gray-600">
                    I consent to Adams Real Estate Advisors contacting me about partnership opportunities and understand that my information will be kept confidential and used solely for business development purposes.
                  </span>
                </label>
              </div>
              
              <div className="md:col-span-2 text-center">
                <Button type="submit" size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-12 py-4 text-lg font-semibold">
                  Submit Partnership Inquiry
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll review your information and contact you within 24-48 hours to discuss partnership opportunities.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#b9945a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Finance Your Value-Add Investment?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get expert guidance and competitive financing for your next acquisition and renovation project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#b9945a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={() => handleNavigation('contact')}>
              Get Project Financing
            </Button>
            <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-4 text-lg" onClick={() => window.open("mailto:alan@adamsrealestateadvisors.com")}>
              Call (585) 303-2423
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              📍 112 Old English Drive, Rochester, NY 14616 | 📧 Alan@AdamsRealEstateAdvisors.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )

  const RetailFinancingPage = () => (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#081c3e] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Retail Property Financing: Power Your Commercial Success
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Specialized financing solutions for retail properties from 
              <span className="text-[#b9945a] font-semibold"> $750K to $40M</span>. 
              Shopping centers, strip malls, standalone retail, and mixed-use developments with competitive rates and flexible terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] px-8 py-4 text-lg" onClick={() => handleNavigation('contact')}>
                Get Retail Financing
              </Button>
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-4 text-lg" onClick={() => window.open("mailto:alan@adamsrealestateadvisors.com")}>
                View Retail Deals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Why Choose Our Retail Property Financing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise in retail real estate with deep understanding of market dynamics and tenant requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Building2 className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Retail Expertise</h3>
              <p className="text-gray-600">Deep understanding of retail market dynamics and trends</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <TrendingUp className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Flexible Terms</h3>
              <p className="text-gray-600">Customized loan structures for various retail property types</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <CheckCircle className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Fast Approvals</h3>
              <p className="text-gray-600">Streamlined process for time-sensitive retail acquisitions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Market Knowledge</h3>
              <p className="text-gray-600">Local market expertise and tenant relationship insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Property Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Retail Property Types We Finance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financing solutions for all types of retail real estate investments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Shopping Centers</h3>
              <p className="text-gray-600 mb-4">Anchored and unanchored shopping centers from neighborhood to regional scale.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Community shopping centers</li>
                <li>• Neighborhood centers</li>
                <li>• Power centers</li>
                <li>• Lifestyle centers</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Strip Malls</h3>
              <p className="text-gray-600 mb-4">Linear retail developments with multiple tenants and convenient parking.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Convenience-anchored strips</li>
                <li>• Restaurant-focused centers</li>
                <li>• Service-oriented strips</li>
                <li>• Mixed-use retail strips</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Standalone Retail</h3>
              <p className="text-gray-600 mb-4">Single-tenant retail buildings and freestanding commercial properties.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Big box retail stores</li>
                <li>• Fast food restaurants</li>
                <li>• Auto dealerships</li>
                <li>• Specialty retail buildings</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Mixed-Use Retail</h3>
              <p className="text-gray-600 mb-4">Properties combining retail with office, residential, or other uses.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Retail with office above</li>
                <li>• Retail with residential</li>
                <li>• Entertainment complexes</li>
                <li>• Transit-oriented developments</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Outlet Centers</h3>
              <p className="text-gray-600 mb-4">Factory outlet and discount retail centers with brand-name tenants.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Factory outlet malls</li>
                <li>• Discount retail centers</li>
                <li>• Off-price retail centers</li>
                <li>• Tourist-oriented outlets</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Specialty Retail</h3>
              <p className="text-gray-600 mb-4">Unique retail formats and specialized commercial properties.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gas stations with retail</li>
                <li>• Car washes</li>
                <li>• Garden centers</li>
                <li>• Entertainment venues</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Terms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Retail Property Loan Terms</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Loan Amounts</h4>
                    <p className="text-gray-600">$750,000 to $40,000,000 for retail property acquisitions and refinancing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Loan-to-Value Ratio</h4>
                    <p className="text-gray-600">Up to 75% LTV for stabilized retail properties with strong tenant mix</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Interest Rates</h4>
                    <p className="text-gray-600">Competitive rates starting at 6.15% for well-located retail properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Amortization</h4>
                    <p className="text-gray-600">Up to 25-year amortization schedules to optimize cash flow</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Terms</h4>
                    <p className="text-gray-600">5-10 year fixed rate terms with refinancing options</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Prepayment</h4>
                    <p className="text-gray-600">Flexible prepayment options with declining penalty structures</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Retail Market Considerations</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Location Analysis</h4>
                    <p className="text-gray-600 text-sm">Demographics, traffic counts, visibility, and accessibility evaluation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Tenant Quality</h4>
                    <p className="text-gray-600 text-sm">Credit strength, lease terms, and tenant mix diversification assessment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Market Competition</h4>
                    <p className="text-gray-600 text-sm">Competitive landscape and market saturation analysis</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">E-commerce Impact</h4>
                    <p className="text-gray-600 text-sm">Evaluation of online retail impact and property adaptation strategies</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Future Growth</h4>
                    <p className="text-gray-600 text-sm">Population growth, income trends, and development pipeline assessment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Property Condition</h4>
                    <p className="text-gray-600 text-sm">Physical condition, deferred maintenance, and capital improvement needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Our Retail Financing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized process designed for the unique requirements of retail property financing
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Property Analysis</h3>
              <p className="text-gray-600 text-sm">Evaluate location, tenant mix, and market position</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Tenant Review</h3>
              <p className="text-gray-600 text-sm">Assess tenant credit, lease terms, and stability</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Market Study</h3>
              <p className="text-gray-600 text-sm">Analyze local retail market and competition</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Underwriting</h3>
              <p className="text-gray-600 text-sm">Complete financial analysis and risk assessment</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">5</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Closing</h3>
              <p className="text-gray-600 text-sm">Coordinate closing and fund loan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Retail Financing Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Occupancy:</strong> Minimum 80% occupancy for stabilized retail properties
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Cash Flow:</strong> Positive NOI with minimum 1.25x debt service coverage ratio
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Tenant Quality:</strong> Diversified tenant mix with creditworthy tenants
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Location:</strong> Prime or secondary retail locations with good visibility
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Credit Score:</strong> Minimum 650 personal credit score for guarantors
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Experience:</strong> Retail property management or investment experience preferred
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Required Documentation</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Property operating statements (3 years)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Current rent roll and lease abstracts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Tenant sales reports (if available)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Market analysis and demographic study</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Personal and business financial statements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Tax returns (3 years personal and entity)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Property management agreements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Environmental and engineering reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-[#081c3e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Retail Financing Success Stories</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real retail property transactions that demonstrate our expertise and market knowledge
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Addisville Commons</h3>
              <p className="text-blue-100 mb-4">Richboro, PA</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$18.02M</div>
              <p className="text-sm text-blue-100">Retail center construction loan with anchor tenant pre-leasing</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Regional Shopping Center</h3>
              <p className="text-blue-100 mb-4">Multiple Locations</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$25M+</div>
              <p className="text-sm text-blue-100">Portfolio refinancing of anchored shopping centers</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Strip Mall Portfolio</h3>
              <p className="text-blue-100 mb-4">Northeast Markets</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$15M+</div>
              <p className="text-sm text-blue-100">Multi-property acquisition financing for retail investor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lender Partnership Contact Form */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: 'url(/AdobeStock_246426046.jpeg)'}}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#081c3e] mb-4">Partner With Us Today</h2>
              <p className="text-xl text-gray-600">
                Submit your information to join our exclusive lender network and start accessing high-quality commercial real estate deals
              </p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your full name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Name of business seeking funding" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="your.email@company.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title/Position</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your title" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Geographic Focus</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select primary market</option>
                  <option value="iowa">Iowa</option>
                  <option value="nebraska">Nebraska</option>
                  <option value="chicago-suburbs">Chicago Suburbs</option>
                  <option value="midwest">General Midwest</option>
                  <option value="national">National</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loan Types of Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select loan type</option>
                  <option value="construction">Construction Loans</option>
                  <option value="permanent">Permanent Mortgages</option>
                  <option value="refinancing">Refinancing</option>
                  <option value="acquisition">Acquisition & Renovation</option>
                  <option value="all">All Loan Types</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Typical Loan Size Range</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select range</option>
                  <option value="750k-2m">$750K - $2M</option>
                  <option value="2m-5m">$2M - $5M</option>
                  <option value="5m-10m">$5M - $10M</option>
                  <option value="10m-25m">$10M - $25M</option>
                  <option value="25m-40m">$25M - $40M</option>
                  <option value="40m+">$40M+</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Tell us about your lending criteria, requirements, or any specific information about your business..."></textarea>
              </div>
              
              <div className="md:col-span-2">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-sm text-gray-600">
                    I consent to Adams Real Estate Advisors contacting me about partnership opportunities and understand that my information will be kept confidential and used solely for business development purposes.
                  </span>
                </label>
              </div>
              
              <div className="md:col-span-2 text-center">
                <Button type="submit" size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-12 py-4 text-lg font-semibold">
                  Submit Partnership Inquiry
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll review your information and contact you within 24-48 hours to discuss partnership opportunities.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#b9945a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Finance Your Retail Property?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get specialized retail financing expertise and competitive terms for your next investment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#b9945a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={() => handleNavigation('contact')}>
              Get Retail Financing
            </Button>
            <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-4 text-lg" onClick={() => window.open("mailto:alan@adamsrealestateadvisors.com")}>
              Call (585) 303-2423
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              📍 112 Old English Drive, Rochester, NY 14616 | 📧 Alan@AdamsRealEstateAdvisors.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )

  const OfficeFinancingPage = () => (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#081c3e] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Office Building Financing: Elevate Your Investment
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Specialized financing solutions for office properties from 
              <span className="text-[#b9945a] font-semibold"> $750K to $40M</span>. 
              Class A towers, suburban offices, medical buildings, and corporate campuses with competitive rates and flexible terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] px-8 py-4 text-lg" onClick={() => handleNavigation('contact')}>
                Get Office Financing
              </Button>
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-4 text-lg" onClick={() => window.open("mailto:alan@adamsrealestateadvisors.com")}>
                View Office Deals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Why Choose Our Office Building Financing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise in office real estate with understanding of modern workplace trends and tenant requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Building2 className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Office Expertise</h3>
              <p className="text-gray-600">Deep understanding of office market dynamics and trends</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <TrendingUp className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Attractive rates for quality office properties and strong sponsors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <CheckCircle className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Flexible Structure</h3>
              <p className="text-gray-600">Customized loan structures for various office property types</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">Market Intelligence</h3>
              <p className="text-gray-600">Local market knowledge and tenant relationship insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Property Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Office Property Types We Finance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financing solutions for all classes and types of office real estate
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Class A Office Buildings</h3>
              <p className="text-gray-600 mb-4">Premium office towers and high-rise buildings in prime locations.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Downtown high-rise towers</li>
                <li>• Trophy office buildings</li>
                <li>• LEED certified properties</li>
                <li>• Corporate headquarters</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Suburban Office Buildings</h3>
              <p className="text-gray-600 mb-4">Class B and C office properties in suburban markets.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Suburban office parks</li>
                <li>• Mid-rise office buildings</li>
                <li>• Business centers</li>
                <li>• Professional office complexes</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Medical Office Buildings</h3>
              <p className="text-gray-600 mb-4">Specialized medical and healthcare office facilities.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Medical office buildings (MOB)</li>
                <li>• Outpatient surgery centers</li>
                <li>• Dental office buildings</li>
                <li>• Specialty medical facilities</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Corporate Campuses</h3>
              <p className="text-gray-600 mb-4">Large-scale corporate facilities and business parks.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Corporate headquarters</li>
                <li>• Technology campuses</li>
                <li>• Research and development facilities</li>
                <li>• Multi-building office parks</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Mixed-Use Office</h3>
              <p className="text-gray-600 mb-4">Properties combining office with retail, residential, or other uses.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Office with retail ground floor</li>
                <li>• Mixed-use developments</li>
                <li>• Live-work developments</li>
                <li>• Transit-oriented office</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-[#b9945a] mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Specialty Office</h3>
              <p className="text-gray-600 mb-4">Unique office formats and specialized commercial properties.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Government office buildings</li>
                <li>• Educational facilities</li>
                <li>• Co-working spaces</li>
                <li>• Flex office/warehouse</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Terms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Office Building Loan Terms</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Loan Amounts</h4>
                    <p className="text-gray-600">$750,000 to $40,000,000 for office property acquisitions and refinancing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Loan-to-Value Ratio</h4>
                    <p className="text-gray-600">Up to 80% LTV for Class A properties, 75% for Class B/C office buildings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Interest Rates</h4>
                    <p className="text-gray-600">Competitive rates starting at 6.05% for premium office properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Amortization</h4>
                    <p className="text-gray-600">Up to 25-year amortization schedules to optimize cash flow</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Terms</h4>
                    <p className="text-gray-600">5-10 year fixed rate terms with refinancing and extension options</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Recourse</h4>
                    <p className="text-gray-600">Non-recourse options available for stabilized, institutional-quality properties</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Office Market Considerations</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Location Quality</h4>
                    <p className="text-gray-600 text-sm">Proximity to transportation, amenities, and business districts</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Tenant Credit</h4>
                    <p className="text-gray-600 text-sm">Credit strength, lease terms, and tenant diversification assessment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Building Class & Amenities</h4>
                    <p className="text-gray-600 text-sm">Property class, age, condition, and modern amenity offerings</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Market Fundamentals</h4>
                    <p className="text-gray-600 text-sm">Local office market supply, demand, and absorption trends</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Remote Work Impact</h4>
                    <p className="text-gray-600 text-sm">Evaluation of hybrid work trends and space utilization changes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#081c3e] mb-2">Future Adaptability</h4>
                    <p className="text-gray-600 text-sm">Building flexibility for changing tenant needs and technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Our Office Financing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized process designed for the unique requirements of office property financing
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Property Evaluation</h3>
              <p className="text-gray-600 text-sm">Assess location, building class, and market position</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Tenant Analysis</h3>
              <p className="text-gray-600 text-sm">Review tenant credit, lease terms, and rollover risk</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Market Study</h3>
              <p className="text-gray-600 text-sm">Analyze local office market and competitive landscape</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Financial Analysis</h3>
              <p className="text-gray-600 text-sm">Complete underwriting and risk assessment</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b9945a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">5</div>
              <h3 className="text-lg font-bold text-[#081c3e] mb-3">Closing</h3>
              <p className="text-gray-600 text-sm">Coordinate closing and fund loan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Office Financing Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Occupancy:</strong> Minimum 85% occupancy for stabilized office properties
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Cash Flow:</strong> Positive NOI with minimum 1.25x debt service coverage ratio
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Tenant Quality:</strong> Creditworthy tenants with appropriate lease terms
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Location:</strong> Desirable office locations with good transportation access
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Building Quality:</strong> Well-maintained properties with modern amenities
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Experience:</strong> Office property management or investment experience preferred
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#081c3e] mb-8">Required Documentation</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Property operating statements (3 years)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Current rent roll and lease abstracts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Tenant financial statements (major tenants)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Market analysis and comparable sales</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Personal and business financial statements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Tax returns (3 years personal and entity)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Property management agreements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Environmental and engineering reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-[#081c3e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Office Financing Success Stories</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real office property transactions that demonstrate our expertise and market knowledge
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Class A Office Tower</h3>
              <p className="text-blue-100 mb-4">Downtown Rochester, NY</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$35M</div>
              <p className="text-sm text-blue-100">Premium office tower refinancing with rate improvement</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Medical Office Portfolio</h3>
              <p className="text-blue-100 mb-4">Multiple Markets</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$22M</div>
              <p className="text-sm text-blue-100">Multi-property medical office building acquisition</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Suburban Office Park</h3>
              <p className="text-blue-100 mb-4">Buffalo, NY</p>
              <div className="text-2xl font-bold text-[#b9945a] mb-2">$18M</div>
              <p className="text-sm text-blue-100">Corporate campus acquisition and renovation financing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lender Partnership Contact Form */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: 'url(/AdobeStock_246426046.jpeg)'}}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#081c3e] mb-4">Partner With Us Today</h2>
              <p className="text-xl text-gray-600">
                Submit your information to join our exclusive lender network and start accessing high-quality commercial real estate deals
              </p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your full name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Name of business seeking funding" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="your.email@company.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title/Position</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your title" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Geographic Focus</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select primary market</option>
                  <option value="iowa">Iowa</option>
                  <option value="nebraska">Nebraska</option>
                  <option value="chicago-suburbs">Chicago Suburbs</option>
                  <option value="midwest">General Midwest</option>
                  <option value="national">National</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loan Types of Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select loan type</option>
                  <option value="construction">Construction Loans</option>
                  <option value="permanent">Permanent Mortgages</option>
                  <option value="refinancing">Refinancing</option>
                  <option value="acquisition">Acquisition & Renovation</option>
                  <option value="all">All Loan Types</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Typical Loan Size Range</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select range</option>
                  <option value="750k-2m">$750K - $2M</option>
                  <option value="2m-5m">$2M - $5M</option>
                  <option value="5m-10m">$5M - $10M</option>
                  <option value="10m-25m">$10M - $25M</option>
                  <option value="25m-40m">$25M - $40M</option>
                  <option value="40m+">$40M+</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Tell us about your lending criteria, requirements, or any specific information about your business..."></textarea>
              </div>
              
              <div className="md:col-span-2">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-sm text-gray-600">
                    I consent to Adams Real Estate Advisors contacting me about partnership opportunities and understand that my information will be kept confidential and used solely for business development purposes.
                  </span>
                </label>
              </div>
              
              <div className="md:col-span-2 text-center">
                <Button type="submit" size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-12 py-4 text-lg font-semibold">
                  Submit Partnership Inquiry
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll review your information and contact you within 24-48 hours to discuss partnership opportunities.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#b9945a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Finance Your Office Building?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get specialized office financing expertise and competitive terms for your next investment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#b9945a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={() => handleNavigation('contact')}>
              Get Office Financing
            </Button>
            <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-4 text-lg" onClick={() => window.open("mailto:alan@adamsrealestateadvisors.com")}>
              Call (585) 303-2423
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              📍 112 Old English Drive, Rochester, NY 14616 | 📧 Alan@AdamsRealEstateAdvisors.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )

  const LenderProgramPage = () => (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#081c3e] to-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exclusive Lender Partnership Program
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Partner with Adams Real Estate Advisors and access our aggressive lending program offering 
              <span className="text-[#b9945a] font-semibold"> $750K - $40M</span> in commercial real estate financing 
              at competitive rates starting at <span className="text-[#b9945a] font-semibold">6.10%</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] px-8 py-4 text-lg">
                Join Our Network Today
              </Button>
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-4 text-lg" onClick={() => window.open("/LenderProgramRecap09-22-25.pdf", "_blank")}>
                Download Program Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Program Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Program Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive terms and flexible financing solutions for commercial real estate investments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-[#b9945a] mb-2">$750K - $40M</div>
              <div className="text-gray-600">Loan Amount Range</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-[#b9945a] mb-2">6.10% - 6.50%</div>
              <div className="text-gray-600">Current Interest Rates</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-[#b9945a] mb-2">Up to 80%</div>
              <div className="text-gray-600">Loan-to-Value Ratio</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-[#b9945a] mb-2">25 Years</div>
              <div className="text-gray-600">Amortization Period</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#081c3e] mb-6">Loan Terms & Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Loan Amount:</strong> $750,000 - $40,000,000
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>LTV:</strong> Up to 75% standard, up to 80% for newer multifamily
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>DSCR:</strong> Minimum 1.20x debt service coverage
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Term:</strong> 5 or 7 year fixed rate options
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Lender Fee:</strong> Only 30 basis points on non-construction loans
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#081c3e] mb-6">Property Types Accepted</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Building2 className="h-6 w-6 text-[#b9945a] mr-3 mt-0.5" />
                  <div>Historic Tax Credit Properties</div>
                </li>
                <li className="flex items-start">
                  <Building2 className="h-6 w-6 text-[#b9945a] mr-3 mt-0.5" />
                  <div>Multifamily & Affordable Housing</div>
                </li>
                <li className="flex items-start">
                  <Building2 className="h-6 w-6 text-[#b9945a] mr-3 mt-0.5" />
                  <div>Retail & Shopping Centers</div>
                </li>
                <li className="flex items-start">
                  <Building2 className="h-6 w-6 text-[#b9945a] mr-3 mt-0.5" />
                  <div>Industrial & Warehouse</div>
                </li>
                <li className="flex items-start">
                  <Building2 className="h-6 w-6 text-[#b9945a] mr-3 mt-0.5" />
                  <div>General Purpose Real Estate</div>
                </li>
                <li className="flex items-start">
                  <Building2 className="h-6 w-6 text-[#b9945a] mr-3 mt-0.5" />
                  <div>Office Buildings & Medical Facilities</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Market Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic focus on high-growth markets with strong fundamentals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <MapPin className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Iowa (Primary Market)</h3>
              <p className="text-gray-600">Complete coverage throughout the State of Iowa, including construction loans</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <MapPin className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Nebraska Markets</h3>
              <p className="text-gray-600">Omaha and Lincoln metropolitan areas with strong economic growth</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <MapPin className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#081c3e] mb-4">Chicago Suburbs</h3>
              <p className="text-gray-600">Select suburban Chicago markets with proven performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-[#081c3e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With Adams Real Estate Advisors?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join a proven network that has facilitated over $1.8 billion in commercial real estate financing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Aggressive Lending</h3>
              <p className="text-blue-100">Fast approvals and competitive terms for qualified borrowers</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Established Network</h3>
              <p className="text-blue-100">35+ years of experience with proven lender relationships</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Track Record</h3>
              <p className="text-blue-100">500+ successful deals with satisfied borrowers and lenders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lender Partnership Contact Form */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: 'url(/AdobeStock_246426046.jpeg)'}}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#081c3e] mb-4">Partner With Us Today</h2>
              <p className="text-xl text-gray-600">
                Submit your information to join our exclusive lender network and start accessing high-quality commercial real estate deals
              </p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your full name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Name of business seeking funding" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="your.email@company.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title/Position</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Your title" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Geographic Focus</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select primary market</option>
                  <option value="iowa">Iowa</option>
                  <option value="nebraska">Nebraska</option>
                  <option value="chicago-suburbs">Chicago Suburbs</option>
                  <option value="midwest">General Midwest</option>
                  <option value="national">National</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loan Types of Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select loan type</option>
                  <option value="construction">Construction Loans</option>
                  <option value="permanent">Permanent Mortgages</option>
                  <option value="refinancing">Refinancing</option>
                  <option value="acquisition">Acquisition & Renovation</option>
                  <option value="all">All Loan Types</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Typical Loan Size Range</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent">
                  <option value="">Select range</option>
                  <option value="750k-2m">$750K - $2M</option>
                  <option value="2m-5m">$2M - $5M</option>
                  <option value="5m-10m">$5M - $10M</option>
                  <option value="10m-25m">$10M - $25M</option>
                  <option value="25m-40m">$25M - $40M</option>
                  <option value="40m+">$40M+</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b9945a] focus:border-transparent" placeholder="Tell us about your lending criteria, requirements, or any specific information about your business..."></textarea>
              </div>
              
              <div className="md:col-span-2">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-sm text-gray-600">
                    I consent to Adams Real Estate Advisors contacting me about partnership opportunities and understand that my information will be kept confidential and used solely for business development purposes.
                  </span>
                </label>
              </div>
              
              <div className="md:col-span-2 text-center">
                <Button type="submit" size="lg" className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-12 py-4 text-lg font-semibold">
                  Submit Partnership Inquiry
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll review your information and contact you within 24-48 hours to discuss partnership opportunities.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#b9945a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Lender Network?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact Alan Adams today to discuss partnership opportunities and start accessing our deal flow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#b9945a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={() => window.open("tel:+15853032423")}>
              Call (585) 303-2423
            </Button>
            <Button size="lg" className="bg-white text-[#b9945a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={() => window.open("mailto:alan@adamsrealestateadvisors.com")}>
              Email Alan@AdamsRealEstateAdvisors.com
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              📍 112 Old English Drive, Rochester, NY 14616 | 📧 Alan@AdamsRealEstateAdvisors.com | 📞 (585) 303-2423
            </p>
          </div>
        </div>
      </section>
    </div>
  )

  const Footer = () => (
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
                  <button onClick={() => handleNavigation(service.id)} className="text-gray-400 hover:text-white">{service.title}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>112 Old English Drive, Rochester, NY 14616</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:Alan@AdamsRealEstateAdvisors.com" className="hover:text-white">Alan@AdamsRealEstateAdvisors.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>(585) 303-2423</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Adams Real Estate Advisors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navigation />
      <main>
        {activeSection === 'home' && 
          <>
            <Hero />
            <Stats />
            <WhyChooseUsHome />
            <OurProcessHome />
            <FeaturedServices />
            <ClientTestimonials />
          </>
        }
        {activeSection === 'services' && <ServicesPage />}
        {activeSection === 'about' && <AboutPage />}
        {activeSection === 'deals' && <Deals />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'construction-loans' && <ConstructionLoansPage />}
        {activeSection === 'permanent-mortgages' && <PermanentMortgagesPage />}
        {activeSection === 'commercial-refinancing' && <CommercialRefinancingPage />}
        {activeSection === 'acquisition-renovation' && <AcquisitionRenovationPage />}
        {activeSection === 'retail-financing' && <RetailFinancingPage />}
        {activeSection === 'office-financing' && <OfficeFinancingPage />}
        {activeSection === 'lender-program' && <LenderProgramPage />}
      </main>
      <Footer />
    </div>
  )
}

export default App
