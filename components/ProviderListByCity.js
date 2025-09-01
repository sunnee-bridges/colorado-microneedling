import React, { useMemo } from 'react';
import ProviderCard from './ProviderCard';

export default function ProviderListByCity({ providers = [] }) {
  const groups = useMemo(() => {
    const byCity = new Map();
    providers.forEach(p => {
      const city = p.address?.city || p.city || 'Unknown';
      if (!byCity.has(city)) byCity.set(city, []);
      byCity.get(city).push(p);
    });
    // sort cities: biggest first, then alphabetically
    return [...byCity.entries()]
      .sort((a, b) => (b[1].length - a[1].length) || a[0].localeCompare(b[0]));
  }, [providers]);

  return (
    <div>
      {groups.map(([city, list]) => (
        <section key={city} style={{ margin: '2rem 0' }}>
          <h2 style={{ marginBottom: 6 }}>{city} <small style={{ color:'#667eea' }}>({list.length})</small></h2>
          {list.map(p => (
            <ProviderCard key={p.id} provider={p} showEnhanced={false} />
          ))}
        </section>
      ))}
    </div>
  );
}
