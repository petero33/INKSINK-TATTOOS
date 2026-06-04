import { Eye } from 'lucide-react';

export default function PortfolioGrid({ images, onImageClick }) {
  if (!images || images.length === 0) {
    return (
      <div className="text-center" style={{ padding: 'var(--space-4xl) 0', color: 'var(--text-secondary)' }}>
        No images found for this category.
      </div>
    );
  }

  return (
    <div className="portfolio-grid">
      <style>{`
        .portfolio-grid {
          columns: 3 260px;
          column-gap: var(--space-md);
          margin-top: var(--space-xl);
        }

        @media (max-width: 1024px) {
          .portfolio-grid {
            columns: 2 220px;
          }
        }
        .portfolio-item {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: var(--space-md);
          cursor: pointer;
          background: var(--bg-card);
          border: var(--border-glass);
          break-inside: avoid;
          display: block;
        }
        .portfolio-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .portfolio-overlay {
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
        .portfolio-item:hover img {
          transform: scale(1.05);
        }
        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }
        .portfolio-item::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          transition: border-color var(--transition-base);
          pointer-events: none;
        }
        .portfolio-item:hover::after {
          border-color: rgba(124, 58, 237, 0.5);
          box-shadow: inset var(--glow-purple);
        }
        .portfolio-category {
          color: var(--accent-glow);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
          transform: translateY(10px);
          transition: transform var(--transition-base);
        }
        .portfolio-title {
          color: white;
          font-size: 1.1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transform: translateY(10px);
          transition: transform var(--transition-base) 0.1s;
        }
        .portfolio-item:hover .portfolio-category,
        .portfolio-item:hover .portfolio-title {
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .portfolio-grid {
            columns: 1;
          }

          .portfolio-item {
            min-height: 240px !important;
          }
        }
      `}</style>

      {images.map((img, idx) => (
        <div 
          key={img.id} 
          className="portfolio-item animate-fadeInUp"
          style={{
            animationDelay: `${(idx % 10) * 0.08}s`,
            minHeight: idx % 4 === 0 ? '420px' : idx % 4 === 1 ? '330px' : '280px',
          }}
          onClick={() => onImageClick(idx)}
        >
          <img src={img.src} alt={img.title || 'Tattoo Portfolio Image'} loading="lazy" />
          <div className="portfolio-overlay">
            <span className="portfolio-category">{img.category}</span>
            <div className="portfolio-title">
              {img.title || 'View Detail'}
              <Eye size={18} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
