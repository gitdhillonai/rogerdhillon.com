import { ImageResponse } from 'next/og';

export const alt = 'Roger Dhillon — VP Technology / Platform & AIOps';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px 80px',
          background: 'linear-gradient(160deg, #121a2b 0%, #0b1220 55%, #14283a 100%)',
          color: '#e8eefc',
        }}
      >
        <div
          style={{
            display: 'flex',
            color: '#7ee0b2',
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          Open to Director+ / VP / Head of roles
        </div>
        <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, letterSpacing: '-0.03em' }}>
          Roger Dhillon
        </div>
        <div style={{ display: 'flex', fontSize: 36, color: '#c7d6f5', marginTop: 12 }}>
          VP Technology / Platform & AIOps
        </div>
        <div style={{ display: 'flex', fontSize: 24, color: '#9aabcc', marginTop: 28, maxWidth: 880 }}>
          Platform, AIOps, FedRAMP, and LLMOps leadership. rogerdhillon.com
        </div>
      </div>
    ),
    size,
  );
}
