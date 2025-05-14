import { NextResponse } from 'next/server'
import emailjs from '@emailjs/browser'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Initialize EmailJS
    emailjs.init(process.env.EMAILJS_PUBLIC_KEY || '')

    // Send email using EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: 'Maxwell Okosun',
    }

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID || '',
      process.env.EMAILJS_TEMPLATE_ID || '',
      templateParams
    )

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 