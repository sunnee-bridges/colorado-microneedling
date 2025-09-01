import Link from 'next/link';
import Layout from '../../components/Layout';
import providersData from '../../data/providers.json';
import Breadcrumbs from '../../components/Breadcrumbs';

const slugifyCity = (s='') =>
  s.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');

export default function CitiesIndex() {
  const counts = new Map();
  providersData.providers.forEach(p => {
    const c = p.address?.city || p.city;
    if (!c) return;
    counts.set(c, (counts.get(c) || 0) + 1);
  });

  const cities = [...counts.entries()]
    .map(([name, count]) => ({ name, count, slug: slugifyCity(name) }))
    .sort((a,b) => b.count - a.count || a.name.localeCompare(b.name));

  return (
    <Layout title="Browse Cities">
    <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Cities' } // current page (no href)
  ]}
/>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
        <h1>Browse Cities</h1>
        <ul>
          {cities.map(c => (
            <li key={c.slug} style={{ margin: '8px 0' }}>
              <Link href={`/cities/${c.slug}`}>{c.name}</Link> &nbsp;
              <small>({c.count})</small>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
