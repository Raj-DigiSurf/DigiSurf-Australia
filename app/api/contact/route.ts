import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, business, email, phone, message } = await req.json()

    if (!name || !email || !business) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Send via Resend (free — 3,000 emails/month)
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'DigiSurf Website <onboarding@resend.dev>',
        to: ['info@digisurfaustralia.com.au'],
        reply_to: email,
        subject: `New Enquiry — ${business} (${name})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0a1f6e;">New Website Enquiry — DigiSurf Australia</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold; color: #555;">Name</td><td style="padding: 8px;">${name}</td></tr>
              <tr style="background: #f5f5f5;"><td style="padding: 8px; font-weight: bold; color: #555;">Business</td><td style="padding: 8px;">${business}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; color: #555;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr style="background: #f5f5f5;"><td style="padding: 8px; font-weight: bold; color: #555;">Phone</td><td style="padding: 8px;">${phone || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; color: #555; vertical-align: top;">Message</td><td style="padding: 8px;">${message || 'No message provided'}</td></tr>
            </table>
            <p style="margin-top: 20px; color: #888; font-size: 12px;">Sent from digisurfaustralia.com.au contact form</p>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
