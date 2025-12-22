'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative w-full py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
              About Dealora
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">
              Built for users who never want to miss a reward again.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Dealora exists to remove friction from how everyday users discover, redeem,
              and track rewards. Today, coupons live in multiple apps, SMS inboxes,
              screenshots, emails, and browser tabs. Important offers get buried or
              expire before they are used.
            </p>
          </div>

          {/* Mission & Why */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <motion.div 
              className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5">
                <span className="text-xs font-medium text-blue-700">Our Mission</span>
              </div>
              <p className="text-lg leading-relaxed text-slate-700">
                Our mission is to become the single source of truth for your savings
                and rewards. Dealora aims to centralise every live coupon, cashback,
                and offer you are eligible for, and make it instantly redeemable.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center rounded-full bg-amber-50 px-4 py-1.5">
                <span className="text-xs font-medium text-amber-700">Why We Built Dealora</span>
              </div>
              <p className="text-lg leading-relaxed text-slate-700">
                The rewards ecosystem is fragmented. Individual apps run excellent
                offers, but users rarely see all of them in one view. The result is
                lost value for both users and partners. Dealora bridges this gap with
                a clean, unified interface.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-semibold tracking-tight">What makes Dealora different</h2>
          <p className="mt-4 text-lg text-slate-600">
            We're reimagining how rewards and coupons should work in a mobile-first world.
          </p>

          <div className="mt-12 space-y-8">
            {[
              {
                title: "Real-time Coupon Aggregation",
                description: "Automatically pulls live coupons and offers from your connected apps and accounts.",
                icon: "🔄"
              },
              {
                title: "Unified Dashboard",
                description: "See all available offers in one place, organized by category and expiration date.",
                icon: "📊"
              },
              {
                title: "Smart Notifications",
                description: "Get alerts for expiring offers and personalized recommendations.",
                icon: "🔔"
              },
              {
                title: "Privacy First",
                description: "Your data stays on your device. We never sell or share your personal information.",
                icon: "🔒"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex items-start space-x-4"
              >
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="w-full bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-12">
          <motion.div 
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl sm:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-brand-accent/20"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="mt-4 text-slate-200">
                Over the next one to two years, the vision for Dealora is to become the most trusted rewards layer for consumers and brands in our core markets.
              </p>
              
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Onboard more categories and partner apps for deeper coverage.",
                  "Expand cashback intelligence and savings insights for users.",
                  "Provide brands with privacy-safe, aggregated insights on redemption.",
                  "Maintain a sharp focus on user trust, control, and data security."
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent"></div>
                    <p className="text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-slate-900 py-20 text-white">
        <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-12">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-brand-accent/20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold tracking-tight">Ready to simplify your rewards?</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Join thousands of users who are already saving time and money with Dealora.
            </p>
            
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-brand-accent/90 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
              >
                Get Started for Free
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center text-sm font-medium text-white hover:text-slate-300"
              >
                Learn how it works
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
