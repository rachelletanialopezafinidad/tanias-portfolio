'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode =
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const coreCompetencies = [
    'Executive & Administrative Support',
    'Calendar & Inbox Management',
    'Operations Coordination',
    'Financial & Billing Administration',
    'CRM & Platform Management',
    'Website & CMS Management',
    'SOP Creation & Workflow Optimization',
    'Client & Stakeholder Communication',
    'Project & Task Coordination',
    'Data Management & Documentation',
    'Video & Image Editing',
    'Email Marketing & Automations',
  ]

  const tools = [
    'Asana', 'Kajabi', 'Squarespace', 'WordPress', 'Xero', 'HubSpot', 'Salesforce',
    'Active Campaign', 'KEAP', 'Mailchimp', 'Zapier', 'Google Suite', 'Microsoft 365',
    'Notion', 'Slack', 'Canva', 'Adobe Suite', 'Calendly', 'Zoom'
  ]

  const experience = [
    {
      title: 'Virtual Executive Assistant',
      company: 'PTI Pacific',
      period: 'Jan 2025 - Present',
      highlights: [
        'Xero financial management (invoicing, billing, records)',
        'Squarespace website management and updates',
        'Video and image editing for business content',
        'Shipping logistics coordination',
      ],
    },
    {
      title: 'Virtual Administrative & Operations Support',
      company: 'The Positivity Institute',
      period: 'April 2025 - Present (Part-time)',
      highlights: [
        'Kajabi platform management and updates',
        'Email newsletter and webinar coordination',
        'CRM database hygiene and management',
        'Asana task management and process documentation',
      ],
    },
    {
      title: 'Virtual Executive Assistant',
      company: 'Hornecastle Electrical',
      period: 'Jan 2024 - Dec 2024',
      highlights: [
        'Client communications and support',
        'Staff scheduling and coordination',
        'SOP development and implementation',
        'Financial tracking and order processing',
      ],
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 bg-[var(--color-bg)] shadow-soft z-50 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[var(--color-accent)]">Rachelle Tania</h1>
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex gap-8 text-sm font-medium">
              <li><a href="#about" className="hover:text-[var(--color-accent)] transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-[var(--color-accent)] transition-colors">Services</a></li>
              <li><a href="#experience" className="hover:text-[var(--color-accent)] transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</a></li>
            </ul>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[var(--color-border)] hover:bg-[var(--color-beige)] transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-cream)] to-[var(--color-beige)] dark:from-[#1a1410] dark:to-[#3a3026] py-24 px-6 border-b-8 border-[var(--color-accent)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-[var(--color-accent)] font-semibold uppercase tracking-widest text-sm mb-4">
              Executive Operations Expert
            </p>
            <h2 className="text-6xl md:text-7xl font-bold text-[var(--color-text)] mb-6 leading-tight">
              I Handle the Complexity
            </h2>
            <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-8 max-w-2xl leading-relaxed">
              So executives and business owners can focus on growth. 5+ years of proven expertise in operations, administration, and strategic support.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-block"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[var(--color-bg)]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[var(--color-accent)] font-semibold uppercase tracking-widest text-sm mb-3">Who I Am</p>
            <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-12">About Tania</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-lg text-[var(--color-text)] mb-6 leading-relaxed">
                I'm a dedicated Executive Assistant and Operations Support professional with extensive experience supporting executives, managing complex administrative workflows, and coordinating cross-functional operations in remote environments.
              </p>
              <p className="text-lg text-[var(--color-text)] mb-8 leading-relaxed">
                With a proven track record across multiple industries, I specialize in turning chaos into order. I handle the details—so you don't have to.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-[var(--color-accent)] font-bold text-2xl flex-shrink-0 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-[var(--color-text)]">Executive Communications</p>
                    <p className="text-[var(--color-text-secondary)]">Calendar, email, stakeholder relations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[var(--color-accent)] font-bold text-2xl flex-shrink-0 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-[var(--color-text)]">Operations & Administration</p>
                    <p className="text-[var(--color-text-secondary)]">Process optimization, SOP creation, task management</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[var(--color-accent)] font-bold text-2xl flex-shrink-0 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-[var(--color-text)]">Financial & CRM Management</p>
                    <p className="text-[var(--color-text-secondary)]">Xero, HubSpot, Active Campaign, and 15+ platforms</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card">
                <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wide mb-2">Years of Experience</p>
                <p className="text-5xl font-bold text-[var(--color-text)]">5+</p>
                <p className="text-[var(--color-text-secondary)] mt-2">Supporting executives and scaling operations</p>
              </div>
              <div className="card">
                <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wide mb-2">Platforms Mastered</p>
                <p className="text-5xl font-bold text-[var(--color-text)]">18+</p>
                <p className="text-[var(--color-text-secondary)] mt-2">CRM, finance, project management, and more</p>
              </div>
              <div className="card">
                <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wide mb-2">Industries</p>
                <p className="text-5xl font-bold text-[var(--color-text)]">6+</p>
                <p className="text-[var(--color-text-secondary)] mt-2">Hospitality, tech, finance, education, and more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-[var(--color-card)] dark:bg-[#2a2018]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[var(--color-accent)] font-semibold uppercase tracking-widest text-sm mb-3">Core Competencies</p>
            <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-text)]">What I Do</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCompetencies.map((competency, index) => (
              <div key={index} className="card group">
                <p className="font-semibold text-lg text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  {competency}
                </p>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  Expert support in {competency.toLowerCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-32 px-6 bg-[var(--color-bg)]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[var(--color-accent)] font-semibold uppercase tracking-widest text-sm mb-3">Tools & Platforms</p>
            <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-text)]">My Technology Stack</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-[var(--color-beige)] dark:bg-[#3a3026] text-[var(--color-text)] px-5 py-3 rounded-full text-sm font-medium
                           hover:bg-[var(--color-accent)] hover:text-white transition-colors-smooth"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-[var(--color-card)] dark:bg-[#2a2018]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[var(--color-accent)] font-semibold uppercase tracking-widest text-sm mb-3">Professional Journey</p>
            <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-text)]">Experience</h3>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="card border-l-4 border-[var(--color-accent)]">
                <div className="flex justify-between items-start mb-6 flex-col sm:flex-row gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-[var(--color-accent)] mb-2">{job.title}</h4>
                    <p className="text-lg font-semibold text-[var(--color-text)]">{job.company}</p>
                  </div>
                  <span className="text-sm text-[var(--color-text-secondary)] bg-[var(--color-bg)] dark:bg-[#1a1410] px-4 py-2 rounded-full whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-[var(--color-text)]">
                      <span className="text-[var(--color-accent)] font-bold mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-[var(--color-accent)] to-[#b89652]">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Let's Work Together</h3>
          <p className="text-lg text-white/90 mb-12 text-center">
            Ready to streamline your operations? Get in touch to discuss how I can support your business.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input-field bg-white/10 text-white border-white/20 placeholder-white/50 focus:ring-white focus:border-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input-field bg-white/10 text-white border-white/20 placeholder-white/50 focus:ring-white focus:border-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="input-field bg-white/10 text-white border-white/20 placeholder-white/50 focus:ring-white focus:border-white"
                placeholder="Tell me about your needs..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-[var(--color-accent)] font-semibold py-3 rounded-lg
                         hover:bg-white/90 transition-all-smooth focus:outline-none focus:ring-2 focus:ring-white"
            >
              Send Message
            </button>
          </form>

          <div className="border-t border-white/20 pt-12 text-center text-white">
            <p className="mb-4">Or reach out directly:</p>
            <p className="text-lg font-semibold mb-2">📧 rachelletanialopez27@gmail.com</p>
            <p className="text-lg font-semibold">📱 +63 9951 1810</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-text)] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">&copy; 2025 Rachelle Tania Lopez. All rights reserved.</p>
          <p className="text-sm opacity-75">Based in Philippines | Available for Remote Opportunities</p>
        </div>
      </footer>
    </div>
  )
}
