import type { APIRoute } from 'astro'
import Stripe from 'stripe'

export const GET: APIRoute = async ({ url }) => {
  const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY)
  const plan = url.searchParams.get('plan') ?? 'full'

  const prices: Record<string, string> = {
    letter: import.meta.env.STRIPE_PRICE_LETTER,
    full: import.meta.env.STRIPE_PRICE_MESSAGE,
  }

  const priceId = prices[plan]
  if (!priceId) {
    return new Response(JSON.stringify({ error: 'Invalid plan' }), { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: 'payment',
    success_url: `${import.meta.env.PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${import.meta.env.PUBLIC_SITE_URL}/`,
  })

  return Response.redirect(session.url!, 303)
}
