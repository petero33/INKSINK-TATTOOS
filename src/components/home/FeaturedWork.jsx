import { ArrowRight, Eye } from 'lucide-react';
import { portfolioImages } from '../../data/mockData';

export default function FeaturedWork({ onImageClick }) {
  const featuredImages = portfolioImages.slice(0, 10);

  const getTileStyle = (index) => {
    switch (index % 5) {
      case 0:
        return { minHeight: '420px' };
      case 1:
        return { minHeight: '320px' };
      case 2:
        return { minHeight: '280px' };
      case 3:
        return { minHeight: '380px' };
      default:
        return { minHeight: '300px' };
    }
  };

  return (
    <section className="section featured-work">
      <style>{`
        .featured-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: var(--space-2xl);
          gap: var(--space-lg);
        }
        @media (max-width: 600px) {
          .featured-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-md);
          }

          .featured-header .btn {
            width: 100%;
          }

          .featured-grid {
            columns: 1;
          }

          .featured-item {
            min-height: 260px !important;
          }
        }

        .featured-copy {
          max-width: 680px;
        }

        .featured-grid {
          columns: 3 260px;
          column-gap: var(--space-md);
        }

        @media (max-width: 1024px) {
          .featured-grid {
            columns: 2 220px;
          }
        }

        .featured-item {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: var(--space-md);
          cursor: pointer;
          background: var(--bg-card);
          break-inside: avoid;
          border: var(--border-glass);
        }

        .featured-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .featured-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0) 50%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: var(--space-md);
          opacity: 0;
          transition: opacity var(--transition-base);
        }
        .featured-item:hover img {
          transform: scale(1.05);
        }
        .featured-item:hover .featured-overlay {
          opacity: 1;
        }
        .featured-item::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          transition: border-color var(--transition-base);
          pointer-events: none;
        }
        .featured-item:hover::after {
          border-color: rgba(124, 58, 237, 0.5);
          box-shadow: inset var(--glow-purple);
        }
        .featured-category {
          color: var(--accent-glow);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
          transform: translateY(10px);
          transition: transform var(--transition-base);
        }
        .featured-title {
          color: white;
          font-size: 1.1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transform: translateY(10px);
          transition: transform var(--transition-base) 0.1s;
        }
        .featured-item:hover .featured-category,
        .featured-item:hover .featured-title {
          transform: translateY(0);
        }

        .featured-summary {
          color: var(--text-secondary);
          max-width: 58ch;
          margin-top: 8px;
        }

        .featured-header .btn {
          white-space: nowrap;
        }
      `}</style>

      <div className="container">
        <div className="featured-header">
          <div className="featured-copy">
            <span className="section-label">Portfolio</span>
            <h2>Curated proof, not a shelf of thumbnails.</h2>
            <p className="featured-summary">A tighter edit of healed and fresh pieces across the studio's strongest styles, arranged to feel like an editorial wall rather than a standard grid.</p>
          </div>
          <a href="/portfolio" className="btn btn-secondary">View Full Gallery <ArrowRight size={18} /></a>
        </div>

        <div className="featured-grid stagger-children">
          {featuredImages.map((img, idx) => (
            <div 
              key={img.id} 
              className="featured-item"
              style={getTileStyle(idx)}
              onClick={() => {
                if (onImageClick) {
                  onImageClick(img);
                } else {
                  window.location.href = '/portfolio';
                }
              }}
            >
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="featured-overlay">
                <span className="featured-category">{img.category}</span>
                <div className="featured-title">
                  {img.title}
                  <Eye size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
