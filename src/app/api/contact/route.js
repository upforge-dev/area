import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()

    const response = await fetch('https://api.sonor.io/api/public/forms/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.SONOR_API_KEY,
      },
      body: JSON.stringify({
        formType: 'contact',
        data: body,
        metadata: {
          source: 'website',
          page: '/contact',
        },
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || 'Submission failed' },
        { status: response.status }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
