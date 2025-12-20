"use client"

import { motion } from "framer-motion"
import { FiMail, FiLink, FiLayers, FiShoppingCart, FiCheckCircle, FiSave } from 'react-icons/fi'

const steps = [
  {
    title: "Sign up via email or Google",
    description:
      "Create your Dealora account using email or a supported sign-in provider. Basic profile details help personalise your dashboard.",
  },
  {
    title: "Connect your favourite apps",
    description:
      "Link supported apps where you already earn coupons and cashback. This enables Dealora to start fetching your offers.",
  },
  {
    title: "See all coupons inside Dealora",
    description:
      "New and existing coupons are surfaced in a single, organised dashboard so you can browse without context switching.",
  },
  {
    title: "Tap on a coupon to redeem",
    description:
      "If a coupon is code-based, Dealora helps you copy or apply it on the right website. If it is app-linked, you get redirected.",
  },
  {
    title: "Redeem and track usage",
    description:
      "Once you use a coupon, Dealora keeps track of the redemption outcome and updates your dashboard.",
  },
  {
    title: "Manage and save for later",
    description:
      "Pin important coupons, archive used ones, and keep an eye on cashback timelines from a single place.",
  },
]

export default function HowItWorksPage() {
  return (
    <section className="relative w-full bg-slate-50 py-20 text-slate-900">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />

      {/* center spine */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-accent/40 to-transparent" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12">
        {/* header */}
        <div className="mb-16 w-full">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            How it works
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            A simple journey from sign-up to savings.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Dealora is designed as a smooth, guided flow. From the moment you sign up
            to the moment you redeem a coupon and see cashback reflected, every step is
            optimised for clarity and speed.
          </p>
        </div>

        {/* steps */}
        <motion.div
          className="space-y-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0
            const icons = [FiMail, FiLink, FiLayers, FiShoppingCart, FiCheckCircle, FiSave]
            const Icon = icons[index % icons.length]
            

            return (
              <motion.div
                key={step.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.44, ease: 'easeOut' } },
                }}
                className="relative grid grid-cols-2 items-start"
              >
                {/* text */}
                <motion.div
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`step-${index}-title`}
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30 ${
                    isLeft ? 'pr-16 text-right' : 'col-start-2 pl-16 text-left'
                  }`}
                >
                  <div className="flex items-start justify-between md:justify-end lg:justify-between">
                    <div className="min-w-0">
                      <h3 id={`step-${index}-title`} className="text-lg font-semibold text-slate-900 inline-flex items-center gap-3">
                        <span className="hidden sm:inline-flex">
                          <Icon className="text-brand-accent h-5 w-5" aria-hidden />
                        </span>
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>

                      {/* removed quick action to keep only the icon in the title */}
                    </div>
                  </div>
                </motion.div>

                {/* indicator */}
                <div className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center">
                  <motion.div
                    className="relative flex items-center justify-center"
                    aria-hidden
                  >
                    {/* subtle pulsing ring */}
                    <motion.div
                      className="absolute h-10 w-10 rounded-full bg-white shadow-[0_6px_20px_rgba(99,102,241,0.08)]"
                      style={{ boxShadow: '0 10px 30px rgba(2,6,23,0.06)' }}
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand-accent ring-1 ring-brand-accent/30 shadow-[0_6px_20px_rgba(99,102,241,0.22)]"
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}