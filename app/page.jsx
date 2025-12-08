'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  CreditCard, FileText, Users, Menu, X, Check, ArrowRight, 
  Shield, Zap, Clock, CheckCircle2
} from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Animated section wrapper
function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeIn}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Navbar Component
function Navbar({ onRequestDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm border-b border-gray-200' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="font-semibold text-2xl text-slate-900 tracking-tight flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span>GWM-Code</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-[15px]"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-[15px]"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-[15px]"
            >
              Case Studies
            </button>
            <button
              onClick={onRequestDemo}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold text-[15px] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-6 py-4 space-y-4">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 font-medium">
              How It Works
            </button>
            <button onClick={() => scrollToSection('case-studies')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 font-medium">
              Case Studies
            </button>
            <button onClick={onRequestDemo} className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

// Hero Section with Inline Form
function HeroSection({ onSubmit, formData, handleChange, isSubmitting, submitError }) {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <AnimatedSection>
              {/* UPDATED: Localized Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 text-sm font-medium text-blue-700">
                <CheckCircle2 size={16} />
                <span>Building custom tools for Irish SMEs</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Custom Software That Helps Your Business{' '}
                <span className="text-blue-600">Operate Smarter</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl text-gray-600 leading-relaxed">
                We build tailored POS systems, invoicing tools, and CRM solutions for SMEs. 
                Own your software outright—no recurring fees, no vendor lock-in.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="space-y-3">
                {[
                  'One-time payment, lifetime ownership',
                  'Built for your exact workflow',
                  'Direct developer support, no call centers'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check size={14} className="text-green-600" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* NEW: Pricing Comparison Hook */}
            <AnimatedSection delay={0.35}>
              <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md">
                <div className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">The Real Cost of Software</div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-red-500 font-bold line-through text-lg">€150/mo</div>
                    <div className="text-xs text-gray-500">Standard SaaS</div>
                  </div>
                  <div className="h-8 w-px bg-gray-300"></div>
                  <div>
                    <div className="text-green-600 font-bold text-lg">One-time Fee</div>
                    <div className="text-xs text-gray-500">GWM-Code Asset</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Shield size={20} className="text-blue-600" />
                  <span className="text-sm text-gray-600 font-medium">SSL Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-blue-600" />
                  <span className="text-sm text-gray-600 font-medium">24-48h Response</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-xl sticky top-28">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Start Your Project Today
                </h3>
                <p className="text-gray-600">
                  Get a free consultation and project estimate within 48 hours
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Smith"
                  />
                </div>

                {/* UPDATED: Optional Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Business Name <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="needType" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    What do you need? *
                  </label>
                  <select
                    id="needType"
                    name="needType"
                    value={formData.needType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select your primary need</option>
                    <option value="pos">Point of Sale (POS) System</option>
                    <option value="invoice">Invoicing & Billing System</option>
                    <option value="crm">Customer Management (CRM)</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Tell us about your needs *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Describe your current challenges and what you're looking to achieve..."
                  />
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Get Free Consultation'}</span>
                  {!isSubmitting && <ArrowRight size={20} />}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  No credit card required • Free project assessment
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// Social Proof Stats
function StatsSection() {
  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '3-6 weeks', label: 'Average Delivery' },
    { value: '100%', label: 'Code Ownership' },
    { value: '24h', label: 'Support Response' }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: CreditCard,
      title: 'Point of Sale Systems',
      description: 'Touch-optimized, fast checkout systems designed for your retail or service business workflow.',
      features: ['Inventory management', 'Sales reporting', 'Multi-location support', 'Receipt printing']
    },
    {
      icon: FileText,
      title: 'Invoicing & Billing',
      description: 'Automated invoice generation and payment tracking that saves hours every week.',
      features: ['PDF generation', 'Payment reminders', 'Quote management', 'Tax calculations']
    },
    {
      icon: Users,
      title: 'CRM & Customer Management',
      description: 'Track every customer interaction, purchase history, and communication in one centralized system.',
      features: ['Contact management', 'Sales pipeline', 'Activity tracking', 'Custom fields']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Software Solutions Built for SMEs
          </h2>
          <p className="text-xl text-gray-600">
            We specialize in three core areas that small businesses need most
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-full">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="text-blue-600" size={28} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works / Process
function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We discuss your business needs, current pain points, and ideal workflow.',
      icon: Users
    },
    {
      number: '02',
      title: 'Detailed Proposal',
      description: 'Receive a clear scope, timeline, and fixed-price quote within 48 hours.',
      icon: FileText
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'We build your solution in 3-6 weeks with regular progress updates.',
      icon: Zap
    },
    {
      number: '04',
      title: 'Launch & Training',
      description: 'Full deployment, team training, and documentation—then you own it.',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Process
          </h2>
          <p className="text-xl text-gray-600">
            From first call to launch, here's exactly how we work
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="relative">
                <div className="mb-4">
                  <span className="text-6xl font-bold text-blue-100">{step.number}</span>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Case Studies / Results Section
function CaseStudiesSection() {
  const cases = [
    {
      company: 'Local Retail Chain',
      industry: 'Retail',
      result: '40% faster checkout',
      description: 'Custom POS system replaced outdated register system, reducing checkout time and eliminating daily reconciliation errors.',
      metrics: [
        { label: 'Time Saved', value: '2hrs/day' },
        { label: 'Error Reduction', value: '95%' }
      ]
    },
    {
      company: 'Professional Services Firm',
      industry: 'Consulting',
      result: '$12K saved annually',
      description: 'Eliminated subscription software fees with custom invoicing and client management system.',
      metrics: [
        { label: 'ROI', value: '8 months' },
        { label: 'Invoices Sent', value: '500+' }
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600">
            See how custom software transformed operations for our clients
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{caseStudy.company}</h3>
                    <span className="text-sm text-gray-500">{caseStudy.industry}</span>
                  </div>
                  <div className="bg-green-100 px-4 py-1.5 rounded-full">
                    <span className="text-green-700 font-semibold text-sm">{caseStudy.result}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{caseStudy.description}</p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTASection({ onGetStarted }) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Own Your Software?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Stop renting. Start owning. Get a free consultation and see how custom software can transform your business operations.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
          >
            <span>Schedule Free Consultation</span>
            <ArrowRight size={20} />
          </button>
          <p className="text-blue-100 text-sm mt-6">
            48-hour response time guaranteed • No obligation
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <div>
              <span className="text-xl font-semibold text-white block">GWM-Code</span>
              <span className="text-xs text-gray-500">Built in Wexford, Ireland 🇮🇪</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>

          <div className="text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} GWM-Code.</p>
            <p className="text-xs text-gray-600 mt-1">GWM-Code is a trading name of Tapio [Lastname].<br/>Registered in Wexford, Ireland.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Component
export default function GWMCodeLanding() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    needType: '',
    description: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Success!
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      
      // Reset form
      setFormData({
        name: '',
        businessName: '',
        email: '',
        needType: '',
        description: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to send message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onRequestDemo={scrollToTop} />
      <HeroSection 
        onSubmit={handleSubmit} 
        formData={formData} 
        handleChange={handleChange}
        isSubmitting={isSubmitting}
        submitError={submitError}
      />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <CaseStudiesSection />
      {/* TestimonialsSection removed as requested */}
      <FinalCTASection onGetStarted={scrollToTop} />
      <Footer />

      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 z-50 max-w-md"
        >
          <CheckCircle2 size={24} />
          <div>
            <div className="font-bold text-lg">Request Received!</div>
            <div className="text-sm text-green-100">We'll respond within 48 hours with your free consultation.</div>
          </div>
        </motion.div>
      )}
    </div>
  );
}