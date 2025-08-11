import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = "Lip Fillers Colorado" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Find the best lip filler providers in Colorado. Compare prices, read reviews, and book appointments." />
      </Head>
      
      <header style={{ 
        padding: '20px', 
        borderBottom: '1px solid #e0e0e0',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '2rem' }}>
            💋 Colorado Lip Fillers Directory
          </h1>
          <nav>
             <Link href="/">Home</Link>
  <Link href="/before-after">Before & After</Link> 
  <Link href="/pricing">Pricing</Link>
  <Link href="/about">About</Link>
  <Link href="/lipfillerfaq">Lip Filler FAQ</Link>
          </nav>
        </div>
      </header>
      
      <main style={{ 
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '70vh'
      }}>
        {children}
      </main>
      
      <footer style={{ 
        padding: '40px 20px', 
        borderTop: '1px solid #e0e0e0', 
        marginTop: '40px',
        background: '#f8f9fa',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p>&copy; 2024 Colorado Lip Fillers Directory</p>
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
            Find the best lip filler providers in Colorado
          </p>
        </div>
      </footer>
    </>
  );
}