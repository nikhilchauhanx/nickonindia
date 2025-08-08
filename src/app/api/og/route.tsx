// src/app/api/og/route.tsx
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Nickon India | Developer & Creator';

  // Read the font file from the public folder (filename updated)
  const fontData = await fetch(
    new URL('../../../../public/Inter_28pt-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#111827',
          color: 'white',
          padding: '40px 60px',
          fontFamily: '"Inter"',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img
            alt="Nickon India Logo"
            height={60}
            src="https://www.nickonindia.com/logo.png" // Using the live URL for the logo
            style={{ margin: '0 20px', borderRadius: '50%' }}
            width={60}
          />
          <div style={{ fontSize: 24, fontWeight: 'bold' }}>Nickon India</div>
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
