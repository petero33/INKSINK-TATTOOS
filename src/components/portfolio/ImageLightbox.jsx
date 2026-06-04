import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageLightbox({ images, currentIndex, onClose, onNavigate }) {
  
  // Handle keyboard navigation
  useEffect(() => {
    if (currentIndex === null || !images[currentIndex]) {
      return undefined;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNavigate]);

  if (currentIndex === null || !images[currentIndex]) return null;
  
  const image = images[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <style>{`
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: var(--z-modal);
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn var(--transition-fast) forwards;
        }
        .lightbox-close {
          position: absolute;
          top: var(--space-lg);
          right: var(--space-lg);
          background: rgba(255,255,255,0.1);
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          z-index: 2;
          transition: all var(--transition-fast);
        }
        .lightbox-close:hover {
          background: var(--accent-hot);
          transform: scale(1.1);
        }
        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.1);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          z-index: 2;
          transition: all var(--transition-fast);
        }
        .lightbox-nav:hover {
          background: var(--accent-primary);
          box-shadow: var(--glow-purple);
        }
        .lightbox-prev { left: var(--space-lg); }
        .lightbox-next { right: var(--space-lg); }
        
        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          box-shadow: var(--shadow-xl);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-md);
        }
        .lightbox-info {
          padding: var(--space-md) 0;
          text-align: center;
        }
        .lightbox-title {
          color: white;
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 4px;
        }
        .lightbox-meta {
          color: var(--text-secondary);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .lightbox-badge {
          color: var(--accent-glow);
          background: var(--accent-primary-dim);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
        }
        @media (max-width: 768px) {
          .lightbox-nav { display: none; } /* hide arrows on mobile, rely on taps/swipes ideally */
        }
      `}</style>
      
      <button className="lightbox-close" onClick={onClose}><X size={24} /></button>
      
      <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onNavigate('prev'); }}>
        <ChevronLeft size={32} />
      </button>
      
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.title} className="lightbox-image animate-scaleIn" />
        <div className="lightbox-info animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="lightbox-title">{image.title || 'Untitled'}</div>
          <div className="lightbox-meta">
            <span className="lightbox-badge">{image.category}</span>
            <span>Image {currentIndex + 1} of {images.length}</span>
          </div>
        </div>
      </div>
      
      <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onNavigate('next'); }}>
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
