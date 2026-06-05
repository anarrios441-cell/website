'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

/* ============================================================
   COPY — EN / PT-BR
   ============================================================ */
const en = {
  // Header
  navCta: 'Create their message',
  // Hero
  heroRating: 'Rated 5 stars · 18 beta families',
  heroH1a: "Keep your pet's",
  heroH1b: 'presence alive.',
  heroSub:
    "We bring your pet's voice back — one final time. A personalised video message, created from your memories together.",
  heroCta: 'Create their message — $39',
  heroNote: 'Delivered within 24 hours · Private · Yours forever',
  // How it works
  howLabel: 'HOW IT WORKS',
  howH1a: 'Three steps. One message.',
  howH1b: 'A lifetime of comfort.',
  steps: [
    {
      n: '01',
      title: 'Tell us about them',
      body: 'Share their name, personality, and your favourite memories. The details only you know.',
    },
    {
      n: '02',
      title: 'Share your photos',
      body: "Send us the photos you can't stop looking at. They become the heart of the message.",
    },
    {
      n: '03',
      title: 'Receive their message',
      body: "It arrives as a surprise. Because that's how love works.",
    },
  ],
  // Testimonials
  testLabel: 'WHAT FAMILIES ARE SAYING',
  testH1: '"They said it better than we ever could."',
  testRating: '18 reviews · 94% satisfaction · Early Beta',
  testimonials: [
    {
      quote:
        'I watched it four times. Each time I found something new that was exactly her.',
      name: 'Sarah · Australia',
    },
    {
      quote:
        "I didn't expect to laugh. But I did. And then I cried. And then I laughed again.",
      name: 'Miguel · Brazil',
    },
    {
      quote:
        "He said the thing I needed to hear. I don't know how, but he did.",
      name: 'Emma · United Kingdom',
    },
  ],
  testNote: 'These are real messages from our first beta families.',
  // What you receive
  recvLabel: 'WHAT YOU RECEIVE',
  recvH1: 'Two ways to hear from them.',
  plans: [
    {
      plan: 'letter' as const,
      name: 'The Letter',
      price: '$19',
      sub: 'A written message, in their voice.',
      badge: '',
      features: [
        'A personalised letter, written in their voice',
        'Built from your memories and their personality',
        'A private link, delivered to your inbox',
        'Yours forever — no expiry, no subscription',
      ],
      cta: 'Choose the letter',
    },
    {
      plan: 'full' as const,
      name: 'The Message',
      price: '$39',
      sub: 'The full experience — voice, video & portrait.',
      badge: 'Most loved',
      features: [
        'Everything in The Letter',
        'A 75-second personalised video message',
        "Your pet's voice — matched to their personality",
        'A photorealistic portrait, created from your photos',
      ],
      cta: 'Choose the message',
    },
  ],
  priceNote: 'One time · No subscription · Delivered within 24 hours',
  // FAQ
  faqLabel: 'QUESTIONS',
  faqH1: 'You might be wondering.',
  faqs: [
    {
      q: 'How long does it take?',
      a: '24 hours or less. We review every message personally before it reaches you.',
    },
    {
      q: 'Is the message really personalised?',
      a: 'Every word. Every detail. We build it from everything you tell us — their nicknames, habits, the funny things they did. No two messages are ever the same.',
    },
    {
      q: "What if I don't have videos?",
      a: 'Photos are enough. Videos make the experience richer, but they are never required. Many families have created beautiful messages with photos alone.',
    },
    {
      q: 'Is it private?',
      a: 'Always. Only you receive the link. We never share, publish, or use your content for anything beyond creating your message.',
    },
    {
      q: "What if I'm not happy with the result?",
      a: "We'll make it right. If the portrait doesn't look like your pet, we regenerate it — free of charge. Your peace of mind matters more than anything else.",
    },
  ],
  // Final CTA
  finalH1a: 'They still have',
  finalH1b: 'something to say.',
  finalSub: 'Give them one last moment with you.',
  finalCta: 'Create their message — $39',
  finalNote: 'Delivered within 24 hours · Private · Yours forever',
  // Footer
  footLinks: ['Privacy Policy', 'Terms of Service'],
  copyright: '© 2025 Nazura AI. All rights reserved.',
}

const pt: typeof en = {
  navCta: 'Criar a mensagem',
  heroRating: 'Avaliado 5 estrelas · 18 famílias beta',
  heroH1a: 'Mantenha a presença',
  heroH1b: 'do seu pet viva.',
  heroSub:
    'Devolvemos a voz do seu pet — uma última vez. Uma mensagem em vídeo personalizada, criada a partir das memórias de vocês.',
  heroCta: 'Criar a mensagem — $39',
  heroNote: 'Entregue em até 24 horas · Privado · Seu para sempre',
  howLabel: 'COMO FUNCIONA',
  howH1a: 'Três passos. Uma mensagem.',
  howH1b: 'Uma vida de conforto.',
  steps: [
    {
      n: '01',
      title: 'Nos conte sobre eles',
      body: 'Compartilhe o nome, a personalidade e suas memórias favoritas. Os detalhes que só você conhece.',
    },
    {
      n: '02',
      title: 'Compartilhe suas fotos',
      body: 'Envie as fotos que você não consegue parar de olhar. Elas se tornam o coração da mensagem.',
    },
    {
      n: '03',
      title: 'Receba a mensagem deles',
      body: 'Ela chega como uma surpresa. Porque é assim que o amor funciona.',
    },
  ],
  testLabel: 'O QUE AS FAMÍLIAS DIZEM',
  testH1: '"Eles disseram melhor do que nós poderíamos."',
  testRating: '18 avaliações · 94% de satisfação · Beta inicial',
  testimonials: [
    {
      quote:
        'Assisti quatro vezes. A cada vez encontrei algo novo que era exatamente ela.',
      name: 'Sarah · Austrália',
    },
    {
      quote:
        'Não esperava rir. Mas eu ri. E depois chorei. E depois ri de novo.',
      name: 'Miguel · Brasil',
    },
    {
      quote: 'Ele disse o que eu precisava ouvir. Não sei como, mas disse.',
      name: 'Emma · Reino Unido',
    },
  ],
  testNote: 'Estas são mensagens reais das nossas primeiras famílias beta.',
  recvLabel: 'O QUE VOCÊ RECEBE',
  recvH1: 'Duas formas de ouvir deles.',
  plans: [
    {
      plan: 'letter' as const,
      name: 'A Carta',
      price: '$19',
      sub: 'Uma mensagem escrita, na voz dele.',
      badge: '',
      features: [
        'Uma carta personalizada, escrita na voz dele',
        'Criada a partir das suas memórias e da personalidade dele',
        'Um link privado, entregue no seu e-mail',
        'Seu para sempre — sem prazo, sem assinatura',
      ],
      cta: 'Escolher a carta',
    },
    {
      plan: 'full' as const,
      name: 'A Mensagem',
      price: '$39',
      sub: 'A experiência completa — voz, vídeo e retrato.',
      badge: 'Mais amado',
      features: [
        'Tudo da Carta',
        'Uma mensagem em vídeo personalizada de 75 segundos',
        'A voz do seu pet — adaptada à personalidade dele',
        'Um retrato fotorrealista criado a partir das suas fotos',
      ],
      cta: 'Escolher a mensagem',
    },
  ],
  priceNote: 'Uma vez · Sem assinatura · Entregue em até 24 horas',
  faqLabel: 'DÚVIDAS',
  faqH1: 'Você pode estar se perguntando.',
  faqs: [
    {
      q: 'Quanto tempo leva?',
      a: '24 horas ou menos. Revisamos cada mensagem pessoalmente antes de chegar até você.',
    },
    {
      q: 'A mensagem é realmente personalizada?',
      a: 'Cada palavra. Cada detalhe. Construímos a partir de tudo que você nos conta — os apelidos, os hábitos, as coisas engraçadas que faziam. Duas mensagens nunca são iguais.',
    },
    {
      q: 'E se eu não tiver vídeos?',
      a: 'As fotos são suficientes. Os vídeos enriquecem a experiência, mas nunca são obrigatórios. Muitas famílias criaram mensagens lindas apenas com fotos.',
    },
    {
      q: 'É privado?',
      a: 'Sempre. Só você recebe o link. Nunca compartilhamos, publicamos ou usamos seu conteúdo para nada além de criar a sua mensagem.',
    },
    {
      q: 'E se eu não gostar do resultado?',
      a: 'Vamos resolver. Se o retrato não parecer com seu pet, geramos novamente — sem custo adicional. Sua tranquilidade importa mais do que qualquer outra coisa.',
    },
  ],
  finalH1a: 'Eles ainda têm',
  finalH1b: 'algo a dizer.',
  finalSub: 'Dê a eles um último momento com você.',
  finalCta: 'Criar a mensagem — $39',
  finalNote: 'Entregue em até 24 horas · Privado · Seu para sempre',
  footLinks: ['Política de Privacidade', 'Termos de Serviço'],
  copyright: '© 2025 Nazura AI. Todos os direitos reservados.',
}

/* ============================================================
   STATIC PARTICLE CONFIG (deterministic — no hydration drift)
   ============================================================ */
const PARTICLES = [
  { top: '12%', left: '8%', size: 3, dur: 6, delay: 0, op: 0.3 },
  { top: '22%', left: '82%', size: 2, dur: 7, delay: 1.2, op: 0.25 },
  { top: '34%', left: '45%', size: 4, dur: 5, delay: 0.6, op: 0.35 },
  { top: '48%', left: '18%', size: 2, dur: 8, delay: 2.1, op: 0.28 },
  { top: '58%', left: '72%', size: 3, dur: 6.5, delay: 0.3, op: 0.4 },
  { top: '15%', left: '60%', size: 2, dur: 7.5, delay: 1.8, op: 0.22 },
  { top: '70%', left: '38%', size: 3, dur: 5.5, delay: 3.2, op: 0.32 },
  { top: '80%', left: '88%', size: 2, dur: 6.8, delay: 0.9, op: 0.26 },
  { top: '40%', left: '92%', size: 3, dur: 7.2, delay: 2.6, op: 0.3 },
  { top: '64%', left: '6%', size: 2, dur: 8, delay: 1.5, op: 0.24 },
  { top: '88%', left: '52%', size: 4, dur: 6, delay: 3.8, op: 0.34 },
  { top: '28%', left: '28%', size: 2, dur: 7, delay: 0.4, op: 0.27 },
]

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.op,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

/* ============================================================
   LOGO
   ============================================================ */
function Logo({ width = 190, height = 45 }: { width?: number; height?: number }) {
  return (
    <svg
      viewBox="0 0 238 56"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      aria-label="Nazura AI"
    >
      <path
        d="M 21.57 8.72 A 17 17 0 1 1 30.43 8.72"
        fill="none"
        stroke="#C4944A"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.05"
        transform="translate(6,2)"
      />
      <path
        d="M 21.57 8.72 A 17 17 0 1 1 30.43 8.72"
        fill="none"
        stroke="#C4944A"
        strokeWidth="1.5"
        strokeLinecap="round"
        transform="translate(6,2)"
      />
      <circle cx="32" cy="12" r="5" fill="#C4944A" opacity="0.08" />
      <circle cx="32" cy="12" r="2.1" fill="#C4944A" />
      <line x1="32" y1="5" x2="32" y2="9" stroke="#C4944A" strokeWidth="1.1" strokeLinecap="round" opacity="0.65" />
      <line x1="27" y1="7" x2="28.6" y2="9.5" stroke="#C4944A" strokeWidth="0.85" strokeLinecap="round" opacity="0.38" />
      <line x1="37" y1="7" x2="35.4" y2="9.5" stroke="#C4944A" strokeWidth="0.85" strokeLinecap="round" opacity="0.38" />
      <text
        x="66"
        y="42"
        fontFamily="'Cormorant Garamond',Georgia,serif"
        fontStyle="italic"
        fontSize="38"
        fontWeight="300"
        fill="#F5EDD8"
        letterSpacing="1"
      >
        Nazura
      </text>
      <text
        x="198"
        y="22"
        fontFamily="'Helvetica Neue',Arial,sans-serif"
        fontWeight="300"
        fontSize="11"
        fill="#C4944A"
        letterSpacing="3.5"
      >
        AI
      </text>
    </svg>
  )
}

/* ============================================================
   SCROLL FADE-IN HOOK
   ============================================================ */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function FadeSection({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const ref = useFadeIn()
  return (
    <section ref={ref} id={id} className={`fade-section ${className}`}>
      {children}
    </section>
  )
}

const Stars = () => <span style={{ color: 'var(--gold)' }}>★★★★★</span>

/* ============================================================
   PAGE
   ============================================================ */
export default function Page() {
  const [lang, setLang] = useState<'en' | 'pt'>('en')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [heroScrolled, setHeroScrolled] = useState(false)

  const t = lang === 'en' ? en : pt

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      setHeroScrolled(window.scrollY > 30)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (plan: 'letter' | 'full' = 'full') => {
    window.location.href = `/checkout?plan=${plan}`
  }

  return (
    <main>
      {/* ===================== HEADER ===================== */}
      <header
        className={`site-header fixed top-0 left-0 right-0 z-50 ${
          scrolled ? 'scrolled' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
          <Logo width={150} height={36} />
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <button
                className="lang-btn"
                style={{ color: lang === 'en' ? 'var(--gold)' : 'var(--text-muted)' }}
                onClick={() => setLang('en')}
                aria-label="English"
              >
                EN
              </button>
              <span style={{ color: 'var(--text-faint)' }}>|</span>
              <button
                className="lang-btn"
                style={{ color: lang === 'pt' ? 'var(--gold)' : 'var(--text-muted)' }}
                onClick={() => setLang('pt')}
                aria-label="Português"
              >
                PT
              </button>
            </div>
            <button onClick={() => go('full')} className="btn-gold text-[13px] !py-[10px] !px-[20px] hidden sm:inline-block">
              {t.navCta}
            </button>
          </div>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&q=80"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        <div className="hero-vignette" />
        <Particles />

        <div className="relative z-10 px-6 text-center flex flex-col items-center">
          <p
            className="font-sans mb-6 text-[13px]"
            style={{ color: 'var(--text-muted)', fontWeight: 300 }}
          >
            <Stars /> &nbsp;{t.heroRating}
          </p>

          <h1
            className="font-serif-italic leading-[1.1]"
            style={{
              color: 'var(--text-primary)',
              fontSize: 'clamp(44px, 7vw, 68px)',
            }}
          >
            {t.heroH1a}
            <br />
            {t.heroH1b}
          </h1>

          <p
            className="font-sans mt-7 mx-auto"
            style={{
              color: 'var(--text-muted)',
              maxWidth: '520px',
              fontWeight: 300,
              fontSize: 'clamp(16px, 2vw, 18px)',
            }}
          >
            {t.heroSub}
          </p>

          <button onClick={() => go('full')} className="btn-gold mt-10">
            {t.heroCta}
          </button>

          <p
            className="font-sans mt-5 text-[12px]"
            style={{ color: 'var(--text-faint)', fontWeight: 300 }}
          >
            {t.heroNote}
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          style={{ opacity: heroScrolled ? 0 : 1 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 10l5 5 5-5"
              stroke="var(--gold)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <FadeSection
        className="py-[100px] px-6"
        id="how"
      >
        <div style={{ background: 'var(--bg-section)' }} className="absolute inset-0 -z-10" />
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow text-center mb-4">{t.howLabel}</p>
          <h2
            className="font-serif-italic text-center mb-[60px] leading-[1.15]"
            style={{ color: 'var(--text-primary)', fontSize: 'clamp(32px, 5vw, 44px)' }}
          >
            {t.howH1a}
            <br />
            {t.howH1b}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.steps.map((s) => (
              <div
                key={s.n}
                className="p-9 rounded-[2px]"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--gold-border)',
                }}
              >
                <p
                  className="font-sans mb-5"
                  style={{
                    color: 'var(--gold)',
                    fontSize: '11px',
                    letterSpacing: '3px',
                  }}
                >
                  {s.n}
                </p>
                <h3
                  className="font-serif-italic mb-3"
                  style={{ color: 'var(--text-primary)', fontSize: '24px' }}
                >
                  {s.title}
                </h3>
                <p
                  className="font-sans"
                  style={{ color: 'var(--text-muted)', fontWeight: 300, fontSize: '15px' }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* ===================== TESTIMONIALS ===================== */}
      <FadeSection className="py-[100px] px-6" id="testimonials">
        <div style={{ background: 'var(--bg-primary)' }} className="absolute inset-0 -z-10" />
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow text-center mb-4">{t.testLabel}</p>
          <h2
            className="font-serif-italic text-center mb-5 leading-[1.15]"
            style={{ color: 'var(--text-primary)', fontSize: 'clamp(32px, 5vw, 44px)' }}
          >
            {t.testH1}
          </h2>
          <p
            className="font-sans text-center mb-[50px] text-[14px]"
            style={{ color: 'var(--text-muted)', fontWeight: 300 }}
          >
            <Stars /> &nbsp;{t.testRating}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.map((c, i) => (
              <div
                key={i}
                className="p-8"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--gold-border)',
                  borderLeft: '2px solid var(--gold)',
                }}
              >
                <p className="mb-4 text-[13px]">
                  <Stars />
                </p>
                <p
                  className="font-serif-italic mb-5"
                  style={{ color: 'var(--text-primary)', fontSize: '19px', lineHeight: 1.5 }}
                >
                  {c.quote}
                </p>
                <p
                  className="font-sans text-[13px]"
                  style={{ color: 'var(--text-muted)', fontWeight: 400 }}
                >
                  {c.name}
                </p>
              </div>
            ))}
          </div>

          <p
            className="font-serif-italic text-center mt-12 text-[16px]"
            style={{ color: 'var(--text-faint)' }}
          >
            {t.testNote}
          </p>
        </div>
      </FadeSection>

      {/* ===================== WHAT YOU RECEIVE ===================== */}
      <FadeSection className="py-[100px] px-6" id="receive">
        <div style={{ background: 'var(--bg-section)' }} className="absolute inset-0 -z-10" />
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow text-center mb-4">{t.recvLabel}</p>
          <h2
            className="font-serif-italic text-center mb-[60px]"
            style={{ color: 'var(--text-primary)', fontSize: 'clamp(36px, 6vw, 52px)' }}
          >
            {t.recvH1}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto items-stretch">
            {t.plans.map((pl) => {
              const featured = pl.plan === 'full'
              return (
                <div
                  key={pl.plan}
                  className="relative p-9 rounded-[2px] flex flex-col"
                  style={{
                    background: 'var(--bg-card)',
                    border: featured
                      ? '1px solid var(--gold)'
                      : '1px solid var(--gold-border)',
                  }}
                >
                  {pl.badge ? (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 font-sans whitespace-nowrap"
                      style={{
                        background: 'var(--gold)',
                        color: '#0A0806',
                        fontSize: '10px',
                        fontWeight: 400,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        padding: '4px 12px',
                        borderRadius: '2px',
                      }}
                    >
                      {pl.badge}
                    </span>
                  ) : null}

                  <h3
                    className="font-serif-italic text-center"
                    style={{ color: 'var(--text-primary)', fontSize: '26px' }}
                  >
                    {pl.name}
                  </h3>
                  <p
                    className="font-sans text-center mt-2"
                    style={{ color: 'var(--gold)', fontSize: '52px', fontWeight: 300, lineHeight: 1.1 }}
                  >
                    {pl.price}
                  </p>
                  <p
                    className="font-sans text-center mt-1 mb-7 text-[13px]"
                    style={{ color: 'var(--text-muted)', fontWeight: 300 }}
                  >
                    {pl.sub}
                  </p>

                  <div style={{ borderTop: '1px solid var(--gold-border)' }} className="mb-7" />

                  <ul className="flex flex-col gap-3 mb-8">
                    {pl.features.map((f, i) => (
                      <li
                        key={i}
                        className="font-sans flex gap-3"
                        style={{ color: 'var(--text-primary)', fontWeight: 300, fontSize: '15px' }}
                      >
                        <span style={{ color: 'var(--gold)' }}>✦</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => go(pl.plan)}
                    className="btn-gold w-full mt-auto"
                  >
                    {pl.cta}
                  </button>
                </div>
              )
            })}
          </div>

          <p
            className="font-sans text-center mt-10 text-[12px]"
            style={{ color: 'var(--text-faint)', fontWeight: 300 }}
          >
            {t.priceNote}
          </p>
        </div>
      </FadeSection>

      {/* ===================== FAQ ===================== */}
      <FadeSection className="py-[100px] px-6" id="faq">
        <div style={{ background: 'var(--bg-primary)' }} className="absolute inset-0 -z-10" />
        <div className="max-w-[680px] mx-auto">
          <p className="eyebrow text-center mb-4">{t.faqLabel}</p>
          <h2
            className="font-serif-italic text-center mb-12"
            style={{ color: 'var(--text-primary)', fontSize: 'clamp(32px, 5vw, 44px)' }}
          >
            {t.faqH1}
          </h2>

          <div>
            {t.faqs.map((f, i) => {
              const open = openFaq === i
              return (
                <div
                  key={i}
                  style={{ borderBottom: '1px solid var(--gold-border)' }}
                  className="py-5"
                >
                  <button
                    className="w-full flex items-center justify-between text-left gap-4"
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span
                      className="font-sans"
                      style={{ color: 'var(--text-primary)', fontWeight: 400, fontSize: '16px' }}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`faq-arrow ${open ? 'open' : ''}`}
                      style={{ color: 'var(--gold)' }}
                    >
                      ➜
                    </span>
                  </button>
                  <div className={`faq-answer ${open ? 'open' : ''}`}>
                    <p
                      className="font-sans pt-4"
                      style={{
                        color: 'var(--text-muted)',
                        fontWeight: 300,
                        fontSize: '15px',
                        lineHeight: 1.75,
                      }}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </FadeSection>

      {/* ===================== FINAL CTA ===================== */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
        style={{ background: 'var(--bg-primary)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(196,148,74,0.04) 0%, transparent 60%)',
          }}
        />
        <Particles />

        <div className="relative z-10 text-center flex flex-col items-center">
          <h2
            className="font-serif-italic leading-[1.1]"
            style={{
              color: 'var(--text-primary)',
              fontSize: 'clamp(44px, 7vw, 64px)',
            }}
          >
            {t.finalH1a}
            <br />
            {t.finalH1b}
          </h2>
          <p
            className="font-sans mt-5 mx-auto"
            style={{ color: 'var(--text-muted)', fontWeight: 300, fontSize: 'clamp(16px, 2vw, 18px)' }}
          >
            {t.finalSub}
          </p>
          <button onClick={() => go('full')} className="btn-gold btn-gold-lg mt-10">
            {t.finalCta}
          </button>
          <p
            className="font-sans mt-5 text-[12px]"
            style={{ color: 'var(--text-faint)', fontWeight: 300 }}
          >
            {t.finalNote}
          </p>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer
        style={{ background: '#060402', borderTop: '1px solid var(--gold-border)' }}
        className="py-12 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
          <Logo width={120} height={28} />

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[12px] font-sans">
            <a href="#" className="footer-link">
              {t.footLinks[0]}
            </a>
            <span style={{ color: 'var(--text-faint)' }}>·</span>
            <a href="#" className="footer-link">
              {t.footLinks[1]}
            </a>
            <span style={{ color: 'var(--text-faint)' }}>·</span>
            <a href="mailto:hello@nazuraai.com" className="footer-link">
              hello@nazuraai.com
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 3a4.8 4.8 0 0 0 4 4.2v2.7a7.4 7.4 0 0 1-4-1.2v5.9a5.6 5.6 0 1 1-5.6-5.6c.2 0 .4 0 .6.05v2.8a2.8 2.8 0 1 0 2 2.7V3h3z" />
              </svg>
            </a>
          </div>

          <p
            className="font-sans text-[11px]"
            style={{ color: 'var(--text-faint)', fontWeight: 300 }}
          >
            {t.copyright}
          </p>
        </div>
      </footer>
    </main>
  )
}
