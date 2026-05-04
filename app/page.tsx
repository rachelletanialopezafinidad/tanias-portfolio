'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with email service (e.g., Resend, SendGrid, etc.)
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
    {
      title: 'Virtual Executive Assistant',
      company: 'Hammerjack',
      period: 'Jun 2023 - Dec 2023',
      highlights: [
        'Daily business operations support',
        'Data entry and customer service',
        'Calendar and schedule management',
        'Basic accounting support',
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Rachelle Tania</h1>
          <ul className="hidden md:flex gap-8 text-sm">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Executive Assistant & Operations Support
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Empowering executives and businesses through strategic administrative excellence
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-center">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a dedicated Executive Assistant and Operations Support professional with extensive experience supporting executives, managing complex administrative workflows, and coordinating cross-functional operations in remote environments.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With a proven track record across multiple industries, I specialize in:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Executive communications and calendar management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Financial administration and CRM systems management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Website management and process optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Remote team coordination and support</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h4 className="text-2xl font-bold mb-6 text-blue-600">Key Stats</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold text-blue-600">5+</p>
                  <p className="text-gray-700">Years of Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">15+</p>
                  <p className="text-gray-700">Tools & Platforms Mastered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">50+</p>
                  <p className="text-gray-700">Professional Skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCompetencies.map((competency, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h4 className="font-semibold text-lg text-blue-600 mb-2">{competency}</h4>
                <p className="text-gray-600 text-sm">Providing expert support in {competency.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Professional Experience</h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-blue-600">{job.title}</h4>
                    <p className="text-gray-600 font-semibold">{job.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">→</span>
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
      <section id="contact" className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-center">Let's Work Together</h3>
          <p className="text-center text-blue-100 mb-12">
            Ready to streamline your operations? Get in touch to discuss how I can support your business.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg text-gray-900"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg text-gray-900"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg text-gray-900"
                placeholder="Tell me about your needs..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 text-center border-t border-blue-400 pt-8">
            <p className="mb-4">Or reach out directly:</p>
            <p className="text-lg font-semibold">📧 rachelletanialopez27@gmail.com</p>
            <p className="text-lg font-semibold">📱 +63 9951 1810</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Rachelle Tania Lopez. All rights reserved.</p>
          <p className="mt-2 text-sm">Based in Philippines | Available for Remote Opportunities</p>
        </div>
      </footer>
    </div>
  )
}
