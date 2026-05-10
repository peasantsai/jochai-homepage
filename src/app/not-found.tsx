import Link from 'next/link';

export default function NotFound() {
  return (
    <html>
      <body
        style={{
          background: '#0e1117',
          color: '#f8fafc',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <main
          style={{
            display: 'grid',
            placeItems: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#2563eb',
              }}
            >
              // 404
            </p>
            <h1 style={{ fontSize: '2.25rem', marginTop: '1rem' }}>
              This route is not in the inventory.
            </h1>
            <Link
              href="/en"
              style={{
                display: 'inline-block',
                marginTop: '1.5rem',
                color: '#2563eb',
                textDecoration: 'underline',
              }}
            >
              Return home →
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
