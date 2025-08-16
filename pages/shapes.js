import React, { useState } from 'react';
import Layout from '../components/Layout';

// Simple SVG Icon Components
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const LipFillerShapesGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Shapes', icon: '💋', color: '#6c757d' },
    { id: 'natural', name: 'Natural Enhancement', icon: '🌿', color: '#28a745' },
    { id: 'dramatic', name: 'Dramatic Looks', icon: '✨', color: '#dc3545' },
    { id: 'defined', name: 'Defined Shapes', icon: '💎', color: '#007bff' },
    { id: 'specialty', name: 'Specialty Styles', icon: '🎭', color: '#6f42c1' }
  ];

  const shapesData = [
    {
      id: 1,
      name: "Classic Lips",
      category: 'natural',
      popularity: 'Most Popular',
      description: "The classic shape enhances the natural contour of the lips, providing subtle volume and definition. This shape is ideal for those looking for a natural enhancement that complements their existing lip shape.",
      idealFor: "Individuals seeking a balanced, natural look with minimal enhancement.",
      difficulty: "Beginner Friendly",
      duration: "9-12 months",
      volume: "Low to Medium",
      tags: ['natural', 'subtle', 'beginner', 'classic']
    },
    {
      id: 2,
      name: "Cupid's Bow",
      category: 'defined',
      popularity: 'Very Popular',
      description: "This shape focuses on defining the Cupid's bow, the double curve of the upper lip. It creates a more pronounced and sculpted look, enhancing the natural peaks of the lips.",
      idealFor: "Those looking to emphasize their upper lip and achieve a more defined and elegant lip shape.",
      difficulty: "Moderate",
      duration: "9-12 months",
      volume: "Low to Medium",
      tags: ['defined', 'elegant', 'upper lip', 'sculpted']
    },
    {
      id: 3,
      name: "Full Pout",
      category: 'dramatic',
      popularity: 'Very Popular',
      description: "The full pout shape provides significant volume and fullness to both the upper and lower lips. It's a popular choice for those seeking a more dramatic and voluptuous look.",
      idealFor: "Individuals desiring a noticeable enhancement and a fuller lip appearance.",
      difficulty: "Moderate",
      duration: "6-12 months",
      volume: "High",
      tags: ['dramatic', 'full', 'voluptuous', 'noticeable']
    },
    {
      id: 4,
      name: "Lip Flip",
      category: 'natural',
      popularity: 'Popular',
      description: "The lip flip is technically not a filler treatment, but instead uses 2-4 units of Botox injected into the upper lip area to flip the upper lip slightly upward and outward, creating the appearance of a fuller upper lip without adding any volume.",
      idealFor: "Those looking for a subtle enhancement that makes the lips appear fuller without adding volume. It's also a great conservative option for those interested in lip filler but aren't ready to take the leap.",
      difficulty: "Beginner Friendly",
      duration: "3-4 months",
      volume: "None (Botox Only)",
      tags: ['subtle', 'botox', 'conservative', 'no volume']
    },
    {
      id: 5,
      name: "Keyhole Pout",
      category: 'specialty',
      popularity: 'Trendy',
      description: "This shape creates a small gap in the center of the lips, resembling a keyhole. It provides a playful and pouty look, making the lips appear fuller and more pronounced.",
      idealFor: "Individuals seeking a unique and eye-catching lip shape.",
      difficulty: "Advanced",
      duration: "9-12 months",
      volume: "Medium",
      tags: ['unique', 'trendy', 'playful', 'eye-catching']
    },
    {
      id: 6,
      name: "Heart-Shaped Lips",
      category: 'defined',
      popularity: 'Popular',
      description: "This shape accentuates the Cupid's bow and adds volume to the center of both the upper and lower lips, creating a heart-like appearance.",
      idealFor: "Those looking to enhance the natural peaks of the lips and add volume for a more romantic and defined look.",
      difficulty: "Moderate",
      duration: "9-12 months",
      volume: "Medium",
      tags: ['heart', 'romantic', 'defined', 'peaks']
    },
    {
      id: 7,
      name: "Hollywood Lips",
      category: 'dramatic',
      popularity: 'Very Popular',
      description: "Known for their glamorous and symmetrical appearance, Hollywood lips emphasize balanced volume in both the upper and lower lips for a striking and polished look.",
      idealFor: "Individuals seeking a sophisticated and symmetrical enhancement.",
      difficulty: "Advanced",
      duration: "9-15 months",
      volume: "High",
      tags: ['glamorous', 'symmetrical', 'sophisticated', 'polished']
    },
    {
      id: 8,
      name: "Rubina Lips",
      category: 'specialty',
      popularity: 'Moderate',
      description: "The Rubina shape focuses on adding volume predominantly to the lower lip, creating a fuller and more sensual look.",
      idealFor: "Those who prefer a more prominent lower lip and a balanced upper lip.",
      difficulty: "Moderate",
      duration: "9-12 months",
      volume: "Medium",
      tags: ['lower lip', 'sensual', 'prominent', 'balanced']
    },
    {
      id: 9,
      name: "Pillowy Lips",
      category: 'natural',
      popularity: 'Popular',
      description: "This shape provides a soft, pillowy appearance by adding even volume throughout the lips, giving a naturally full and smooth look.",
      idealFor: "Individuals desiring a soft, plump, and natural fullness.",
      difficulty: "Beginner Friendly",
      duration: "9-12 months",
      volume: "Medium",
      tags: ['soft', 'pillowy', 'natural', 'smooth']
    },
    {
      id: 10,
      name: "Baby Doll Lips",
      category: 'specialty',
      popularity: 'Trendy',
      description: "This shape emphasizes a rounded, fuller look in the center of both the upper and lower lips, creating a cute and youthful appearance.",
      idealFor: "Those looking for a sweet, youthful enhancement with rounded fullness.",
      difficulty: "Moderate",
      duration: "9-12 months",
      volume: "Medium",
      tags: ['youthful', 'cute', 'rounded', 'sweet']
    },
    {
      id: 11,
      name: "Tented Lips",
      category: 'dramatic',
      popularity: 'Moderate',
      description: "This shape creates a higher, tented appearance of the upper lip by adding volume to the center and sides of the upper lip while keeping the lower lip more natural.",
      idealFor: "Individuals seeking a dramatic, lifted look for the upper lip.",
      difficulty: "Advanced",
      duration: "9-12 months",
      volume: "Medium to High",
      tags: ['dramatic', 'lifted', 'upper lip', 'tented']
    },
    {
      id: 12,
      name: "Round Lips",
      category: 'natural',
      popularity: 'Popular',
      description: "This shape focuses on evenly adding volume to both the upper and lower lips, creating a rounder, fuller look. It enhances overall plumpness without specific emphasis on any one area.",
      idealFor: "Individuals desiring an evenly distributed fullness for a naturally plump and youthful appearance.",
      difficulty: "Beginner Friendly",
      duration: "9-12 months",
      volume: "Medium",
      tags: ['round', 'even', 'plump', 'youthful']
    },
    {
      id: 13,
      name: "Heavy Lower Lips",
      category: 'specialty',
      popularity: 'Moderate',
      description: "This shape adds more volume to the lower lip while maintaining a natural look for the upper lip. It creates a fuller lower lip, balancing facial proportions.",
      idealFor: "Individuals wanting to enhance their lower lip for a more pronounced and balanced look.",
      difficulty: "Moderate",
      duration: "9-12 months",
      volume: "Medium",
      tags: ['lower lip', 'balanced', 'pronounced', 'proportions']
    },
    {
      id: 14,
      name: "Downturned Lips",
      category: 'specialty',
      popularity: 'Niche',
      description: "This shape adds volume to the upper lip and sides, creating a slightly downward turn. It emphasizes a sultry, mysterious look.",
      idealFor: "Individuals wanting to achieve a unique and dramatic lip shape.",
      difficulty: "Advanced",
      duration: "9-12 months",
      volume: "Medium",
      tags: ['sultry', 'mysterious', 'unique', 'dramatic']
    }
  ];

  const filteredShapes = shapesData.filter(shape => {
    const matchesSearch = searchTerm === '' || 
      shape.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shape.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shape.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || shape.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getPopularityColor = (popularity) => {
    switch(popularity) {
      case 'Most Popular': return '#28a745';
      case 'Very Popular': return '#007bff';
      case 'Popular': return '#17a2b8';
      case 'Trendy': return '#ffc107';
      case 'Moderate': return '#6c757d';
      case 'Niche': return '#6f42c1';
      default: return '#6c757d';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner Friendly': return '#28a745';
      case 'Moderate': return '#ffc107';
      case 'Advanced': return '#dc3545';
      default: return '#6c757d';
    }
  };

  return (
    <Layout title="Lip Filler Shapes Guide - 14 Popular Styles | Colorado Lip Fillers Directory">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#333' }}>
            14 Popular Lip Filler Shapes
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            Explore different lip enhancement styles to find the perfect look for you. Each shape offers unique benefits and creates different aesthetic results.
          </p>
        </div>

        {/* Quick Guide */}
        <div style={{
          backgroundColor: '#e3f2fd',
          border: '2px solid #2196f3',
          borderRadius: '12px',
          padding: '25px',
          marginBottom: '30px'
        }}>
          <h3 style={{ color: '#1976d2', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <HeartIcon />
            Quick Shape Selection Guide
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            <div>
              <strong style={{ color: '#1976d2' }}>First-Time Fillers:</strong>
              <br />Classic Lips, Pillowy Lips, Round Lips
            </div>
            <div>
              <strong style={{ color: '#1976d2' }}>Natural Enhancement:</strong>
              <br />Classic Lips, Lip Flip, Pillowy Lips
            </div>
            <div>
              <strong style={{ color: '#1976d2' }}>Dramatic Results:</strong>
              <br />Hollywood Lips, Full Pout, Tented Lips
            </div>
            <div>
              <strong style={{ color: '#1976d2' }}>Unique Styles:</strong>
              <br />Keyhole Pout, Baby Doll, Downturned Lips
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '25px',
          borderRadius: '12px',
          marginBottom: '30px',
          border: '1px solid #e9ecef'
        }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <div style={{
              position: 'absolute',
              left: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#6c757d'
            }}>
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search lip shapes by name or style..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 45px',
                border: '2px solid #dee2e6',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#dee2e6'}
            />
          </div>

          {/* Category Filter */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#495057' }}>
              Filter by Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '10px 15px',
                border: '1px solid #ced4da',
                borderRadius: '6px',
                backgroundColor: 'white',
                minWidth: '200px'
              }}
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div style={{ marginBottom: '20px', color: '#6c757d' }}>
          Showing {filteredShapes.length} of {shapesData.length} lip shapes
        </div>

        {/* Shapes Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', 
          gap: '20px',
          marginBottom: '40px'
        }}>
          {filteredShapes.map(shape => (
            <div
              key={shape.id}
              style={{
                backgroundColor: 'white',
                border: '1px solid #e9ecef',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              {/* Shape Header */}
              <div style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#333' }}>
                    {shape.name}
                  </h3>
                  <span style={{
                    backgroundColor: getPopularityColor(shape.popularity),
                    color: 'white',
                    padding: '3px 8px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: '600'
                  }}>
                    {shape.popularity}
                  </span>
                </div>
                
                {/* Quick Stats */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
                  <span style={{
                    backgroundColor: getDifficultyColor(shape.difficulty) + '20',
                    color: getDifficultyColor(shape.difficulty),
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {shape.difficulty}
                  </span>
                  <span style={{
                    backgroundColor: '#f8f9fa',
                    color: '#495057',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}>
                    {shape.volume}
                  </span>
                  <span style={{
                    backgroundColor: '#e8f5e8',
                    color: '#2e7d32',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}>
                    {shape.duration}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ color: '#495057', margin: '0 0 8px 0', fontSize: '1rem' }}>Description:</h4>
                <p style={{ margin: 0, lineHeight: '1.5', color: '#6c757d', fontSize: '14px' }}>
                  {shape.description}
                </p>
              </div>

              {/* Ideal For */}
              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ color: '#495057', margin: '0 0 8px 0', fontSize: '1rem' }}>Ideal For:</h4>
                <p style={{ margin: 0, lineHeight: '1.5', color: '#6c757d', fontSize: '14px' }}>
                  {shape.idealFor}
                </p>
              </div>

              {/* Tags */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {shape.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: '#e9ecef',
                        color: '#495057',
                        padding: '2px 6px',
                        borderRadius: '3px',
                        fontSize: '11px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredShapes.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#6c757d'
          }}>
            <div style={{ marginBottom: '20px', opacity: 0.5 }}>
              <SearchIcon />
            </div>
            <h3>No shapes found</h3>
            <p>Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Important Notes */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '2px solid #ffc107',
          borderRadius: '12px',
          padding: '25px',
          margin: '40px 0'
        }}>
          <h3 style={{ color: '#856404', margin: '0 0 15px 0' }}>Important Considerations</h3>
          <div style={{ color: '#856404', lineHeight: '1.6' }}>
            <p style={{ margin: '0 0 10px 0' }}>
              <strong>Remember:</strong> Not every lip shape works for every person. Your natural lip anatomy, face shape, and personal features all affect what will look best on you.
            </p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
              <li>Always consult with a qualified injector about which shape suits you best</li>
              <li>Start with conservative amounts - you can always add more</li>
              <li>Consider your lifestyle and maintenance preferences</li>
              <li>Discuss realistic expectations with your provider</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '40px',
          borderRadius: '12px',
          textAlign: 'center',
          margin: '40px 0'
        }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '1.8rem' }}>Ready to Find Your Perfect Lip Shape?</h3>
          <p style={{ fontSize: '1.1rem', margin: '0 0 25px 0', opacity: 0.9 }}>
            Connect with experienced providers who can help you achieve the lip shape you want safely and beautifully.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/providers"
              style={{
                backgroundColor: 'white',
                color: '#007bff',
                padding: '12px 30px',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                display: 'inline-block',
                transition: 'transform 0.2s'
              }}
            >
              Find Qualified Providers
            </a>
            <a
              href="/faq"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '12px 30px',
                textDecoration: 'none',
                borderRadius: '8px',
                border: '2px solid white',
                fontWeight: '600',
                display: 'inline-block',
                transition: 'transform 0.2s'
              }}
            >
              Read More FAQs
            </a>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div style={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '20px',
          fontSize: '14px',
          color: '#6c757d',
          fontStyle: 'italic',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0 }}>
            <strong>Medical Disclaimer:</strong> This guide is for educational purposes only. 
            Individual results may vary. Always consult with qualified medical professionals 
            for personalized treatment recommendations and to determine which lip shape is best for your anatomy.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default LipFillerShapesGuide;