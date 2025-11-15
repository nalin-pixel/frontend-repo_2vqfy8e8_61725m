import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, PlayCircle, Compass, Sailboat, Sparkles, Brain, LineChart, BarChart3, Layers, CheckCircle2, Star, Quote, Shield, Clock, Zap, Users, Github, Twitter, Linkedin, Mail } from 'lucide-react'

const colors = {
  navy: '#0A1A2F',
  sapphire: '#184A80',
  aquaFrom: '#35C8FF',
  aquaTo: '#5EE6FF',
  soft: '#F9FAFB'
}

function GlowButton({ children, variant = 'primary' }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 active:scale-[.98]';
  const styles = variant === 'primary'
    ? `bg-[${colors.navy}] text-white shadow-[0_0_40px_rgba(53,200,255,.25)] hover:shadow-[0_0_60px_rgba(53,200,255,.35)] relative`
    : 'bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/15';
  return (
    <button className={`${base} ${styles}`}>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#35C8FF]/30 to-[#5EE6FF]/30 blur-2xl" />
      )}
    </button>
  )
}

function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}>{children}</div>
  )
}

function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(94,230,255,.35), rgba(24,74,128,.0) 60%)'
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute -bottom-40 -right-20 h-[520px] w-[520px] rounded-full"
        style={{
          background: 'radial-gradient(circle at 70% 70%, rgba(53,200,255,.35), rgba(10,26,47,.0) 60%)'
        }}
      />
    </div>
  )
}

function Hero() {
  const { scrollY } = useScroll()
  const waveY = useTransform(scrollY, [0, 400], [0, -60])

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#0A1A2F] text-white">
      <FloatingOrbs />
      <div className="absolute inset-0">
        <svg className="absolute inset-x-0 -top-40 w-[140%] -left-[20%] opacity-40" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,200 C200,260 400,140 600,200 C800,260 1000,220 1200,260 C1400,300 1440,260 1440,260 L1440,0 L0,0 Z" fill="url(#grad1)"/>
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#35C8FF" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#5EE6FF" stopOpacity="0.25"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10">
        <nav className="flex items-center justify-between pt-8">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#35C8FF] to-[#5EE6FF] grid place-items-center shadow-lg">
              <Sailboat className="h-5 w-5 text-[#0A1A2F]" />
            </div>
            <span className="text-xl font-semibold tracking-wide">LearnBoat</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <a className="px-4 py-2 text-white/80 hover:text-white" href="#features">Features</a>
            <a className="px-4 py-2 text-white/80 hover:text-white" href="#why">Why</a>
            <a className="px-4 py-2 text-white/80 hover:text-white" href="#pricing">Pricing</a>
            <a className="px-4 py-2 text-white/80 hover:text-white" href="#faq">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <GlowButton variant="secondary">Login</GlowButton>
            <GlowButton>
              Start Free <ArrowRight className="h-4 w-4" />
            </GlowButton>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center pt-20 md:pt-24 pb-24">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Navigate Your Developer Journey with Confidence
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              LearnBoat tracks your progress, personalizes your curriculum, and helps you master technology with AI-powered insights.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-wrap items-center gap-4">
              <GlowButton>
                Start Learning Now <ArrowRight className="h-5 w-5" />
              </GlowButton>
              <button className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                <PlayCircle className="h-6 w-6" /> Watch Demo
              </button>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { title: 'Daily Goals', icon: Clock },
                { title: 'Code Streak', icon: Zap },
                { title: 'Skill Graph', icon: LineChart },
                { title: 'AI Recs', icon: Brain },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 shadow-lg hover:shadow-[0_0_40px_rgba(94,230,255,.25)] transition-shadow">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-[#5EE6FF]" />
                    <p className="text-sm text-white/80">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div style={{ y: waveY }} className="relative">
              <div className="absolute -top-16 -right-10 -left-10 h-40 bg-gradient-to-r from-[#35C8FF]/20 to-[#5EE6FF]/20 blur-3xl rounded-full" />
              <div className="relative grid gap-6">
                {/* Dashboard Card */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#35C8FF]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#5EE6FF]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-white/50" />
                    </div>
                    <span className="text-xs text-white/60">AI Dashboard</span>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="col-span-2 rounded-xl bg-white/5 border border-white/10 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-white/70">Weekly Productivity</p>
                        <BarChart3 className="h-4 w-4 text-white/60" />
                      </div>
                      <div className="mt-4 h-24 w-full bg-gradient-to-tr from-[#35C8FF]/30 to-[#5EE6FF]/30 rounded-lg" />
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                      <p className="text-sm text-white/70">Streak</p>
                      <p className="mt-2 text-3xl font-bold">21🔥</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                      <p className="text-sm text-white/70">Next Focus</p>
                      <p className="mt-2 font-medium">React Hooks</p>
                    </div>
                    <div className="col-span-2 rounded-xl bg-white/5 border border-white/10 p-4">
                      <p className="text-sm text-white/70">AI Recommendations</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {['Practice DSA', 'Read Docs', 'Build CRUD', 'Revise JS'].map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-[#184A80]/40 text-xs border border-white/10">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Hologram Boat */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="relative rounded-3xl bg-gradient-to-tr from-[#184A80]/40 to-[#35C8FF]/20 border border-white/10 p-6 overflow-hidden">
                  <div className="absolute inset-0 opacity-50" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(94,230,255,.2), transparent 60%)' }} />
                  <div className="flex items-center gap-4">
                    <Sailboat className="h-10 w-10 text-[#5EE6FF]" />
                    <div>
                      <p className="text-white/80">Your journey</p>
                      <p className="text-lg font-semibold">Course Map Active</p>
                    </div>
                  </div>
                  <div className="mt-4 h-28 rounded-2xl border border-white/10 bg-white/5 grid place-items-center text-white/70">
                    Holographic Route Preview
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Decorative waves bottom */}
      <motion.svg style={{ y: waveY }} className="absolute bottom-0 left-0 right-0 w-[140%] -ml-[20%]" viewBox="0 0 1440 220" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#grad2)" fillOpacity="0.4" d="M0,160 C240,220 420,120 720,170 C1020,220 1200,140 1440,190 L1440,220 L0,220 Z"/>
        <defs>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#35C8FF" />
            <stop offset="100%" stopColor="#5EE6FF" />
          </linearGradient>
        </defs>
      </motion.svg>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, points, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay, duration: 0.6 }} className="rounded-3xl bg-white text-[#0A1A2F] p-6 md:p-8 shadow-[0_20px_60px_rgba(10,26,47,.12)] hover:shadow-[0_30px_80px_rgba(10,26,47,.18)] transition-shadow border border-slate-100">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#35C8FF] to-[#5EE6FF] grid place-items-center shadow-lg">
        <Icon className="h-6 w-6 text-[#0A1A2F]" />
      </div>
      <h3 className="mt-5 text-xl md:text-2xl font-bold">{title}</h3>
      <ul className="mt-4 space-y-2 text-slate-600">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#184A80]" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function Features() {
  return (
    <section id="features" className="relative bg-[#F9FAFB] py-20 md:py-28">
      <Container>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#184A80] font-semibold tracking-wide">Built for modern developers</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-2 text-3xl md:text-5xl font-extrabold text-[#0A1A2F]">AI guidance. Clear analytics. Structured roadmaps.</motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            icon={Brain}
            title="AI-Powered Personalized Learning"
            points={[ 'Daily tasks', 'Topic recommendations', 'Skill-based roadmaps' ]}
            delay={0}
          />
          <FeatureCard
            icon={LineChart}
            title="Insightful Analytics Dashboard"
            points={[ 'Real-time progress tracking', 'Topic-wise mastery charts', 'Weekly productivity heatmap' ]}
            delay={0.1}
          />
          <FeatureCard
            icon={Layers}
            title="Structured Developer Roadmaps"
            points={[ 'Java • Spring Boot', 'React • DSA', 'Full Stack Engineering' ]}
            delay={0.2}
          />
        </div>
      </Container>
    </section>
  )
}

function Why() {
  return (
    <section id="why" className="relative py-20 md:py-28 text-white" style={{ background: 'linear-gradient(180deg, #0A1A2F 0%, #0F2544 60%, #184A80 100%)' }}>
      <FloatingOrbs />
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-extrabold">Why LearnBoat</motion.h2>
            <p className="mt-4 text-white/80 text-lg">Organize your learning with clarity and purpose. Avoid overwhelm and stay consistent with intelligent guidance.</p>
            <ul className="mt-8 space-y-4">
              {[
                'Organize your learning without confusion',
                'Avoid overwhelming tutorial hunting',
                'Stay consistent with reminders and streaks',
                'AI-generated goals based on your pace',
                'Track everything in one place'
              ].map((t, i) => (
                <motion.li key={t} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} className="flex items-start gap-3">
                  <Compass className="mt-1 h-5 w-5 text-[#5EE6FF]" />
                  <span className="text-white/90">{t}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#35C8FF] to-[#5EE6FF] opacity-30 blur-2xl" />
              <div className="relative grid sm:grid-cols-2 gap-4">
                {['Timeline', 'Heatmap', 'Mastery', 'Focus'].map((k) => (
                  <div key={k} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm text-white/70">{k}</p>
                    <div className="mt-3 h-24 rounded-xl bg-gradient-to-tr from-[#35C8FF]/30 to-[#5EE6FF]/30" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Preview() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <Container>
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-extrabold text-[#0A1A2F]">See your path clearly</motion.h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Dashboard, progress timeline, roadmap tree, and AI suggestion cards — designed to keep you moving forward.</p>
        <div className="mt-12 grid lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: 'Dashboard', tilt: '-rotate-2' },
            { title: 'Roadmap Tree', tilt: 'rotate-2' },
            { title: 'AI Suggestions', tilt: '-rotate-1' },
          ].map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} className={`relative rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-4 shadow-[0_20px_60px_rgba(10,26,47,.08)] ${c.tilt}`}>
              <div className="aspect-video rounded-2xl bg-gradient-to-tr from-[#35C8FF]/25 to-[#5EE6FF]/25" />
              <div className="absolute -inset-0.5 rounded-3xl pointer-events-none" style={{ boxShadow: '0 0 60px rgba(53,200,255,.25)' }} />
              <p className="mt-4 font-semibold text-[#0A1A2F]">{c.title}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Testimonials() {
  const people = [
    { name: 'Aarav', role: 'Full Stack Developer', quote: 'LearnBoat made my roadmap crystal clear. The streaks and AI nudges kept me consistent.', rating: 5 },
    { name: 'Maya', role: 'Frontend Engineer', quote: 'The analytics are gorgeous and actionable. I ship faster now.', rating: 5 },
    { name: 'Leo', role: 'CS Student', quote: 'It cut through tutorial hell. I finally track real progress.', rating: 4 },
  ]

  return (
    <section className="relative bg-[#0A1A2F] text-white py-20 md:py-28 overflow-hidden">
      <FloatingOrbs />
      <Container>
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-extrabold">Loved by learners</motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {people.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 * i }} className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur p-6 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#35C8FF] to-[#5EE6FF]" />
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-white/70">{p.role}</p>
                </div>
              </div>
              <p className="mt-4 text-white/90">“{p.quote}”</p>
              <div className="mt-4 flex">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className={`h-4 w-4 ${idx < p.rating ? 'text-[#5EE6FF]' : 'text-white/30'}`} fill={idx < p.rating ? '#5EE6FF' : 'transparent'} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Pricing() {
  const plans = [
    { name: 'Free Plan', price: '$0', desc: 'Limited tracking', features: ['Basic progress tracking', 'Daily goals (limited)', '1 roadmap'], cta: 'Get Started' },
    { name: 'Pro Learner', price: '$12/mo', desc: 'Analytics + AI suggestions', features: ['Full analytics', 'AI recommendations', 'Priority support'], highlight: true, cta: 'Upgrade to Pro' },
    { name: 'Ultimate Developer', price: '$29/mo', desc: 'Full unlimited features', features: ['Unlimited roadmaps', 'Advanced AI coaching', 'Team features'], cta: 'Go Ultimate' },
  ]

  return (
    <section id="pricing" className="relative bg-white py-20 md:py-28">
      <Container>
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-extrabold text-[#0A1A2F]">Pricing that scales with you</motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 * i }} className={`relative rounded-3xl p-6 md:p-8 border ${p.highlight ? 'border-transparent bg-[#0A1A2F] text-white shadow-[0_30px_80px_rgba(10,26,47,.35)]' : 'border-slate-200 bg-gradient-to-b from-slate-50 to-white shadow-[0_20px_60px_rgba(10,26,47,.08)]'} hover:scale-[1.01] transition-transform`}>
              {p.highlight && <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#35C8FF] to-[#5EE6FF] opacity-30 blur-2xl" />}
              <div className="relative">
                <p className={`text-sm ${p.highlight ? 'text-white/70' : 'text-slate-600'}`}>{p.desc}</p>
                <h3 className={`mt-1 text-2xl font-bold ${p.highlight ? '' : 'text-[#0A1A2F]'}`}>{p.name}</h3>
                <p className={`mt-4 text-4xl font-extrabold ${p.highlight ? '' : 'text-[#0A1A2F]'}`}>{p.price}</p>
                <ul className={`mt-6 space-y-2 ${p.highlight ? 'text-white/90' : 'text-slate-700'}`}>
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className={`h-4 w-4 ${p.highlight ? 'text-[#5EE6FF]' : 'text-[#184A80]'}`} />{f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  {p.highlight ? (
                    <GlowButton>
                      {p.cta} <ArrowRight className="h-4 w-4" />
                    </GlowButton>
                  ) : (
                    <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-400 text-[#0A1A2F] font-semibold">
                      {p.cta}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function FAQ() {
  const qs = [
    'How does AI track my learning?',
    'Can I use LearnBoat for any tech stack?',
    'Is the data stored securely?',
    'How do streaks work?',
    'Can I import my existing progress?',
    'Does it support teams?',
    'Is there a free trial for Pro?',
    'Do you integrate with GitHub?',
    'Can I export my data?',
    'What platforms are supported?'
  ]

  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="relative bg-[#F9FAFB] py-20 md:py-28">
      <Container>
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-extrabold text-[#0A1A2F]">Frequently asked questions</motion.h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white overflow-hidden">
          {qs.map((q, i) => (
            <div key={q} className="">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-semibold text-[#0A1A2F]">{q}</span>
                <span className="text-slate-500">{open === i ? '-' : '+'}</span>
              </button>
              <motion.div initial={false} animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }} className="px-5 pb-5 text-slate-600 overflow-hidden">
                <p>
                  LearnBoat combines your activity, goals, and schedule with AI models to recommend what to learn next and how to allocate time. Your data is encrypted and handled with care.
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 text-white overflow-hidden" style={{ background: 'radial-gradient(1200px 600px at 20% 0%, rgba(53,200,255,.15), transparent 60%), radial-gradient(1200px 600px at 100% 100%, rgba(94,230,255,.15), transparent 60%), #0A1A2F' }}>
      <FloatingOrbs />
      <Container className="text-center">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-extrabold">
          Your Developer Journey Deserves Direction — Start Sailing with LearnBoat.
        </motion.h2>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">Stay consistent, stay confident, and watch your skills compound. LearnBoat keeps you on course.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <GlowButton>
            Begin Your Journey <ArrowRight className="h-4 w-4" />
          </GlowButton>
          <GlowButton variant="secondary">Login to Dashboard</GlowButton>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-16">
          <svg className="mx-auto" width="420" height="120" viewBox="0 0 420 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 70 C60 110 120 110 180 80 C240 50 300 50 360 80 C380 90 400 95 420 90" stroke="url(#g)" strokeWidth="2.5" fill="none"/>
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#35C8FF"/>
                <stop offset="100%" stopColor="#5EE6FF"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#071223] text-white/80">
      <Container className="py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#35C8FF] to-[#5EE6FF] grid place-items-center shadow-lg">
                <Sailboat className="h-5 w-5 text-[#0A1A2F]" />
              </div>
              <span className="text-xl font-semibold tracking-wide text-white">LearnBoat</span>
            </div>
            <p className="mt-4 text-white/60 max-w-sm">Navigate your developer journey with AI-powered guidance and analytics.</p>
            <div className="mt-6 flex gap-3">
              <a className="p-2 rounded-lg bg-white/10 hover:bg-white/15" href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a className="p-2 rounded-lg bg-white/10 hover:bg-white/15" href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a className="p-2 rounded-lg bg-white/10 hover:bg-white/15" href="#" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              <a className="p-2 rounded-lg bg-white/10 hover:bg-white/15" href="#" aria-label="Email"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold">Product</h4>
            <ul className="mt-4 space-y-2">
              <li><a className="hover:text-white" href="#features">Features</a></li>
              <li><a className="hover:text-white" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-white" href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Roadmaps</h4>
            <ul className="mt-4 space-y-2">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>React</li>
              <li>DSA</li>
              <li>Full Stack</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Support</h4>
            <ul className="mt-4 space-y-2">
              <li>Help Center</li>
              <li>Community</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/50">
          <p>© {new Date().getFullYear()} LearnBoat. All rights reserved.</p>
          <p>Made for developers who love progress.</p>
        </div>
      </Container>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Features />
      <Why />
      <Preview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
