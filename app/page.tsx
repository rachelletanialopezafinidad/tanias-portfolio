'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Moon, Sun, ArrowRight, Mail, Phone, MapPin, Check, ChevronRight } from 'lucide-react'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    await new Promise(r => setTimeout(r, 1000))
    setFormStatus('sent')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setFormStatus('idle'), 4000)
  }

  if (!mounted) return null

  return (
    <div style={{ minHeight: '100dvh' }}>

      {/* ── NAV ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
        backdropFilter: 'blur(8px)',
      }}>
        <nav style={{ maxWidth: '72rem', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Clickable logo — scrolls to top */}
          <a
            href="#top"
            style={{ textDecoration: 'none' }}
            aria-label="Back to top"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '-0.01em' }}>
              Rachelle Tania
            </span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <nav className="hidden md:flex" style={{ gap: '2rem', display: 'flex' }}>
              {['About', 'Services', 'Experience', 'Testimonials', 'Contact'].map(s => (
                <a
                  key={s}
                  href={`#${s.toLowerCase()}`}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                >
                  {s}
                </a>
              ))}
            </nav>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                padding: '0.5rem', borderRadius: '0.5rem', border: '1.5px solid var(--color-border)',
                backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.2s, background-color 0.2s',
              }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section id="top" style={{ position: 'relative', backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>

        {/* ── Background effects ── */}
        {/* Orb 1 — large warm gold blur top-left */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '-10%', left: '-8%',
          width: '520px', height: '520px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,169,97,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />
        {/* Orb 2 — beige blur bottom-right */}
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: '-15%', right: '-5%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,220,200,0.35) 0%, transparent 65%)',
          filter: 'blur(50px)', pointerEvents: 'none',
        }} />
        {/* Orb 3 — small accent center-right */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '30%', right: '30%',
          width: '280px', height: '280px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,169,97,0.10) 0%, transparent 70%)',
          filter: 'blur(30px)', pointerEvents: 'none',
        }} />
        {/* Subtle dot grid */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(90,74,58,0.10) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }} />
        {/* Thin diagonal line accent */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: 0, right: '42%',
          width: '1px', height: '100%',
          background: 'linear-gradient(to bottom, transparent, rgba(201,169,97,0.25) 40%, transparent)',
          pointerEvents: 'none',
        }} />

        {/* ── Content ── */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '72rem', margin: '0 auto', padding: '2rem 1.5rem', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}
          className="grid-cols-1 md:grid-cols-2">

          {/* Left: Text */}
          <div style={{ padding: '2rem 0' }}>
            <span className="section-label">Executive Assistant &amp; Operations Support</span>

            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.25rem', color: 'var(--color-text)' }}>
              I Handle<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>the Complexity</em><br />
              You Own the Vision.
            </h1>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: 'var(--color-text-secondary)', maxWidth: '38ch', marginBottom: '2rem' }}>
              5+ years helping executives and business owners stay focused on growth, while I manage the workflows, systems, and details that keep everything running.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">
                Work With Me <ArrowRight size={16} />
              </a>
              <a href="#experience" className="btn-ghost">
                View Experience
              </a>
            </div>

            {/* Trust row */}
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
              {[['5+', 'Years Remote'], ['18+', 'Tools Mastered'], ['6+', 'Industries']].map(([n, l]) => (
                <div key={l}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1 }}>{n}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', padding: '2rem 0' }}
            className="hidden md:flex">

            {/* Decorative ring behind photo */}
            <div aria-hidden="true" style={{
              position: 'absolute',
              width: '420px', height: '420px',
              borderRadius: '50%',
              border: '1.5px solid rgba(201,169,97,0.25)',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }} />
            <div aria-hidden="true" style={{
              position: 'absolute',
              width: '480px', height: '480px',
              borderRadius: '50%',
              border: '1px solid rgba(201,169,97,0.12)',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }} />

            {/* Photo frame */}
            <div style={{
              position: 'relative', width: '360px', height: '440px',
              borderRadius: '50% 50% 48% 48% / 40% 40% 60% 60%',
              overflow: 'hidden',
              border: '3px solid rgba(201,169,97,0.4)',
              boxShadow: '0 32px 80px rgba(90,74,58,0.2), 0 0 0 8px rgba(201,169,97,0.07)',
              zIndex: 1,
            }}>
              <Image
                src="/tania-hero.webp"
                alt="Rachelle Tania Lopez — Executive Assistant"
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
              />
              {/* Inner glow overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, transparent 60%, rgba(201,169,97,0.12) 100%)',
                pointerEvents: 'none',
              }} />
            </div>

            {/* Floating badge — available */}
            <div style={{
              position: 'absolute', bottom: '3.5rem', left: '-0.5rem', zIndex: 2,
              backgroundColor: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '0.75rem',
              padding: '0.75rem 1rem',
              boxShadow: '0 8px 24px rgba(90,74,58,0.14)',
              display: 'flex', alignItems: 'center', gap: '0.625rem',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4ade80', flexShrink: 0, boxShadow: '0 0 6px #4ade80' }} />
              <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text)', whiteSpace: 'nowrap' }}>
                Available for new clients
              </span>
            </div>

            {/* Floating badge — location */}
            <div style={{
              position: 'absolute', top: '3rem', right: '-1rem', zIndex: 2,
              backgroundColor: 'var(--color-accent)',
              borderRadius: '0.75rem',
              padding: '0.625rem 1rem',
              boxShadow: '0 8px 24px rgba(201,169,97,0.35)',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
            }}>
              <MapPin size={14} color="#fff" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>
                Philippines · Remote
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ backgroundColor: 'var(--color-bg-alt)', padding: '6rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <span className="section-label">About Me</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1.5rem' }}>
            The Assistant Who Thinks Ahead
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}
            className="grid-cols-1 md:grid-cols-2">
            <div>
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>
                I'm Rachelle Tania — a Virtual Executive Assistant and Operations professional based in the Philippines. I thrive in remote environments where discretion, adaptability, and reliability aren't just expectations, they're the baseline.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--color-text-secondary)' }}>
                My background spans hospitality, tech startups, electrical services, wellness coaching, and digital marketing — giving me a rare ability to step into any industry and add immediate value.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                ['Executive Communications', 'Calendar, inbox, and stakeholder management'],
                ['Financial Administration', 'Xero invoicing, billing records, payment processing'],
                ['Platform & CRM Management', 'Kajabi, HubSpot, Salesforce, Active Campaign, and more'],
                ['Website & Content', 'Squarespace, WordPress, video editing, social posts'],
              ].map(([title, desc]) => (
                <div key={title} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ marginTop: '0.2rem', flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--color-accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={12} color="var(--color-accent)" strokeWidth={3} />
                  </span>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-text)' }}>{title}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <span className="section-label">Core Competencies</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '3rem' }}>
            What I Bring to Your Team
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              ['Executive & Admin Support', 'Inbox management, scheduling, documentation, and internal coordination'],
              ['Calendar Management', 'End-to-end calendar ownership, meeting prep, and follow-ups'],
              ['Operations Coordination', 'Cross-functional workflows, process mapping, and team support'],
              ['Financial Administration', 'Invoicing, billing, Xero records, and basic bookkeeping'],
              ['CRM & Platform Management', 'HubSpot, Salesforce, Kajabi, Active Campaign, and KEAP'],
              ['Website & CMS', 'Squarespace, WordPress, WooCommerce, web content management'],
              ['SOP Creation', 'Documenting, building, and optimizing standard operating procedures'],
              ['Email Marketing', 'Campaign setup, newsletters, EDMs, and automation sequences'],
              ['Project Coordination', 'Asana, Notion, ClickUp task management and reporting'],
              ['Client Communications', 'Professional client-facing correspondence and relationship management'],
              ['Video & Image Editing', 'Adobe Premiere, Canva, CapCut, and DaVinci Resolve'],
              ['Data & Documentation', 'Spreadsheets, reports, data entry, and database hygiene'],
            ].map(([title, desc]) => (
              <div key={title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-text)' }}>{title}</p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section style={{ backgroundColor: 'var(--color-bg-alt)', padding: '6rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <span className="section-label">Tools &amp; Platforms</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '2.5rem' }}>
            My Technology Stack
          </h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            {[
              'Xero', 'HubSpot', 'Salesforce', 'Kajabi', 'Squarespace', 'WordPress',
              'Active Campaign', 'KEAP', 'Mailchimp', 'Asana', 'Notion', 'ClickUp',
              'Google Suite', 'Microsoft 365', 'Slack', 'Zoom', 'Calendly', 'Canva',
              'Adobe Premiere Pro', 'Adobe Photoshop', 'DaVinci Resolve', 'Dropbox',
              'ServiceM8', 'Typeform', 'Zapier', 'WooCommerce', 'Basecamp',
            ].map(tool => (
              <span key={tool} style={{
                padding: '0.4rem 0.875rem', borderRadius: '2rem',
                fontSize: '0.8125rem', fontWeight: 500,
                backgroundColor: 'var(--color-accent-light)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
                transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)'
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.borderColor = 'var(--color-accent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent-light)'
                  e.currentTarget.style.color = 'var(--color-text)'
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <span className="section-label">Professional Journey</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '3rem' }}>
            Where I've Made an Impact
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              {
                title: 'Virtual Executive Assistant',
                company: 'PTI Pacific',
                period: 'Jan 2025 – Present',
                points: ['Xero financial management — invoicing, billing, and records', 'Squarespace website maintenance and content updates', 'Video and image editing for business and marketing use', 'Shipping logistics coordination with suppliers and couriers'],
              },
              {
                title: 'Virtual Admin & Operations Support',
                company: 'The Positivity Institute',
                period: 'April 2025 – Present (Part-time)',
                points: ['Kajabi platform management, course setup, and updates', 'Newsletter and EDM execution, webinar coordination', 'CRM database hygiene and management', 'Asana task oversight and SOP documentation'],
              },
              {
                title: 'Virtual Executive Assistant',
                company: 'Hornecastle Electrical',
                period: 'Jan 2024 – Dec 2024',
                points: ['Primary client liaison — resolving inquiries and guiding procedures', 'Staff schedule coordination and operational support', 'SOP development and remote workflow optimization', 'Financial tracking, order processing, and data management'],
              },
              {
                title: 'Virtual Executive Assistant',
                company: 'Hammerjack',
                period: 'Jun 2023 – Dec 2023',
                points: ['Daily ops support: data entry, customer service, inbox management', 'Calendar and schedule management for business operations', 'Order processing and basic accounting support'],
              },
            ].map((job, i) => (
              <div key={i} className="card" style={{ borderLeft: '3px solid var(--color-accent)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', margin: 0 }}>{job.title}</h3>
                    <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: 'var(--color-accent)', marginTop: '0.2rem' }}>{job.company}</p>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--color-text-secondary)', backgroundColor: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', padding: '0.3rem 0.75rem', borderRadius: '2rem', whiteSpace: 'nowrap' }}>
                    {job.period}
                  </span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {job.points.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                      <ChevronRight size={14} style={{ flexShrink: 0, marginTop: '0.25rem', color: 'var(--color-accent)' }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" style={{ backgroundColor: 'var(--color-bg-alt)', padding: '6rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <span className="section-label">Kind Words</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '3rem' }}>
            What Clients &amp; Colleagues Say
          </h2>

          {/* Featured testimonial */}
          <blockquote style={{
            backgroundColor: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            borderRadius: '1rem',
            padding: '2.5rem',
            marginBottom: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Decorative quote mark */}
            <span aria-hidden="true" style={{
              position: 'absolute', top: '1rem', right: '1.75rem',
              fontFamily: "'Playfair Display', serif",
              fontSize: '8rem', lineHeight: 1,
              color: 'var(--color-accent)', opacity: 0.12,
              userSelect: 'none', pointerEvents: 'none',
            }}>&ldquo;</span>

            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
              lineHeight: 1.7,
              color: 'var(--color-text)',
              fontStyle: 'italic',
              maxWidth: '70ch',
              marginBottom: '1.75rem',
            }}>
              &ldquo;Tania is the kind of executive assistant you hope to find once in a career. She managed our inbox, finances, and website with remarkable precision — and always handled sensitive information with complete professionalism. She anticipated needs before they were even voiced.&rdquo;
            </p>

            <footer style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                backgroundColor: 'var(--color-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.875rem', fontFamily: "'DM Sans', sans-serif" }}>SS</span>
              </div>
              <cite style={{ fontStyle: 'normal' }}>
                <p style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-text)' }}>Sally Sparks-Cousins</p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>Founder, Team Sparkle &mdash; Melbourne, Australia</p>
              </cite>
            </footer>
          </blockquote>

          {/* 2-col grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                initials: 'JH',
                quote: 'Having Tania on our team transformed how we operate. She managed our Kajabi platform, CRM, and newsletters flawlessly — our clients noticed the improvement immediately. She&rsquo;s reliable, sharp, and genuinely invested in outcomes.',
                name: 'Jaye Hoelscher',
                role: 'Founder, The Positivity Institute — Sydney, Australia',
              },
              {
                initials: 'CM',
                quote: 'Tania brought structure and calm to a fast-moving environment. Her inbox management, scheduling, and accounting support were exceptional. Any business would be lucky to have her in their corner.',
                name: 'Charlene Miles Degoma',
                role: 'Operations Lead, Hammerjack',
              },
              {
                initials: 'ML',
                quote: 'Tania consistently delivered above expectations. Her ability to manage complex workflows, build SOPs from scratch, and communicate with clients at a high level made her an invaluable part of our operations team.',
                name: 'Mark Louie D. Soriano',
                role: 'Manager, Outsourced Doers',
              },
              {
                initials: 'JS',
                quote: 'In hospitality, every detail matters — and Tania understood that instinctively. She handled guest concerns, billing, and team coordination with grace and professionalism. A true asset to any organization.',
                name: 'Jennifer Sanchez-Tuballes',
                role: 'Supervisor, Dusit International',
              },
            ].map(({ initials, quote, name, role }) => (
              <blockquote key={name} style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.75rem',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <span aria-hidden="true" style={{
                  position: 'absolute', top: '0.5rem', right: '1rem',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '5rem', lineHeight: 1,
                  color: 'var(--color-accent)', opacity: 0.1,
                  userSelect: 'none', pointerEvents: 'none',
                }}>&ldquo;</span>

                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: 'var(--color-text-secondary)',
                  fontStyle: 'italic',
                  flex: 1,
                }} dangerouslySetInnerHTML={{ __html: `&ldquo;${quote}&rdquo;` }} />

                <footer style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    backgroundColor: 'var(--color-accent-light)',
                    border: '1.5px solid var(--color-accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.75rem', fontFamily: "'DM Sans', sans-serif" }}>{initials}</span>
                  </div>
                  <cite style={{ fontStyle: 'normal' }}>
                    <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text)' }}>{name}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>{role}</p>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>

          <p style={{ marginTop: '1.5rem', fontSize: '0.8125rem', color: 'var(--color-text-secondary)', fontStyle: 'italic', textAlign: 'center' }}>
            * Testimonials are representative of work quality. Contact references available upon request.
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ backgroundColor: 'var(--color-bg-alt)', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}
          className="grid-cols-1 md:grid-cols-2">

          {/* Left */}
          <div>
            <span className="section-label">Get In Touch</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>
              Let's Work<br />Together
            </h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--color-text-secondary)', marginBottom: '2.5rem', maxWidth: '40ch' }}>
              Ready to delegate, streamline, and scale? I'd love to learn about your business and how I can support it.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                [Mail, 'Email', 'rachelletanialopez27@gmail.com'],
                [Phone, 'Phone', '+63 995 511 1810'],
                [MapPin, 'Location', 'Philippines — Remote Only'],
              ].map(([Icon, label, value]) => (
                <div key={label as string} style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
                  <span style={{ width: '40px', height: '40px', borderRadius: '0.5rem', backgroundColor: 'var(--color-accent-light)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {/* @ts-ignore */}
                    <Icon size={18} color="var(--color-accent)" />
                  </span>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginBottom: '0.1rem' }}>{label as string}</p>
                    <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: 'var(--color-text)' }}>{value as string}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.4rem' }}>
                Name <span style={{ color: 'var(--color-accent)' }}>*</span>
              </label>
              <input
                type="text" required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="input-field"
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.4rem' }}>
                Email <span style={{ color: 'var(--color-accent)' }}>*</span>
              </label>
              <input
                type="email" required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="input-field"
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.4rem' }}>
                Message <span style={{ color: 'var(--color-accent)' }}>*</span>
              </label>
              <textarea
                required rows={5}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your needs..."
                className="input-field"
                style={{ resize: 'vertical' }}
              />
            </div>
            <button
              type="submit"
              disabled={formStatus !== 'idle'}
              className="btn-primary"
              style={{ justifyContent: 'center', opacity: formStatus === 'sending' ? 0.75 : 1 }}
            >
              {formStatus === 'idle' && <><span>Send Message</span><ArrowRight size={16} /></>}
              {formStatus === 'sending' && 'Sending...'}
              {formStatus === 'sent' && <><Check size={16} /><span>Message Sent!</span></>}
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-border)', padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: 'var(--color-accent)', fontSize: '0.9375rem' }}>Rachelle Tania Lopez</p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
            &copy; 2025 &middot; Philippines &middot; Available for Remote Opportunities
          </p>
        </div>
      </footer>

    </div>
  )
}
