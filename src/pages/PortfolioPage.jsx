import { useState } from 'react';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import PortfolioFilter from '../components/portfolio/PortfolioFilter';
import ImageLightbox from '../components/portfolio/ImageLightbox';
import { portfolioImages, portfolioCategories } from '../data/mockData';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter images based on active category
  const filteredImages = activeCategory === 'All' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  // Calculate counts for filter
  const counts = portfolioImages.reduce((acc, img) => {
    acc[img.category] = (acc[img.category] || 0) + 1;
    acc['All'] = (acc['All'] || 0) + 1;
    return acc;
  }, {});

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction) => {
    if (lightboxIndex === null) return;
    
    if (direction === 'next') {
      setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
    } else {
      setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="portfolio-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <style>{`
        .portfolio-page {
          overflow-x: hidden;
        }

        .portfolio-shell {
          padding-bottom: var(--space-4xl);
        }

        @media (max-width: 640px) {
          .portfolio-page {
            padding-top: 88px;
          }

          .portfolio-shell {
            padding-bottom: var(--space-3xl);
          }

          .portfolio-page .section-header {
            text-align: left;
          }

          .portfolio-page .section-header p {
            margin: 0;
          }
        }
      `}</style>

      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Work</span>
          <h2>The InkSink Portfolio</h2>
          <p>Browse our previous work across various styles. Every piece is custom-designed for the client.</p>
        </div>
      </div>

      <PortfolioFilter 
        categories={portfolioCategories} 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory}
        counts={counts}
      />
      
      <div className="container portfolio-shell">
        <PortfolioGrid 
          images={filteredImages} 
          onImageClick={openLightbox} 
        />
      </div>

      <ImageLightbox 
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
      />
    </div>
  );
}
