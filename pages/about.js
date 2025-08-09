import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About Colorado Lip Fillers Directory">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>About Colorado Lip Fillers Directory</h1>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '20px 0' }}>
          Colorado Lip Fillers Directory is your trusted resource for finding qualified, 
          board-certified providers offering lip enhancement services throughout Colorado.
        </p>

        <h2>Our Mission</h2>
        <p style={{ lineHeight: '1.6', margin: '20px 0' }}>
          We help Colorado residents make informed decisions about lip enhancement by 
          providing comprehensive information about qualified providers, treatment options, 
          and pricing transparency.
        </p>

        <h2>Why Choose Board-Certified Providers?</h2>
        <ul style={{ lineHeight: '1.6', margin: '20px 0' }}>
          <li>Extensive medical training and certification</li>
          <li>Experience with facial anatomy and aesthetics</li>
          <li>Adherence to safety protocols and standards</li>
          <li>Access to highest quality dermal fillers</li>
        </ul>

        <h2>Popular Lip Filler Brands</h2>
        <div style={{ margin: '20px 0' }}>
          <h3>Juvederm</h3>
          <p>Hyaluronic acid-based fillers known for smooth, natural results.</p>
          
          <h3>Restylane</h3>
          <p>Long-lasting fillers ideal for both subtle and dramatic enhancement.</p>
          
          <h3>RHA Fillers</h3>
          <p>Newest generation fillers designed to move naturally with facial expressions.</p>
        </div>
      </div>
    </Layout>
  );
}