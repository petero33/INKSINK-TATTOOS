import { Star } from 'lucide-react';
import { portfolioImages, sampleReviews } from '../../data/mockData';

const reviewCards = sampleReviews.map((review, index) => ({
  ...review,
  image: portfolioImages.find((image) => image.category === review.style) || portfolioImages[index % portfolioImages.length],
}));

export default function ReviewsSection() {
  return (
    <section className="section reviews-section">
      <style>{`
        .reviews-section {
          background: var(--bg-secondary);
          position: relative;
        }
        .reviews-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), transparent);
        }
        
        .review-card {
          background: rgba(26, 26, 46, 0.72);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          min-height: 240px;
          transition: all var(--transition-base);
        }
        .review-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-4px);
        }

        .review-image {
          flex: 0 0 42%;
          min-height: 240px;
        }

        .review-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .review-copy {
          flex: 1;
          padding: var(--space-xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }
        
        .stars {
          display: flex;
          gap: 4px;
          color: var(--accent-gold);
        }
        
        .review-text {
          color: var(--text-secondary);
          font-style: italic;
          line-height: 1.6;
          flex: 1;
        }
        
        .review-author {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: var(--space-md);
        }
        
        .author-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-lg);
          padding-top: var(--space-md);
        }

        .review-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-md);
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: var(--space-md);
        }

        @media (max-width: 720px) {
          .review-card {
            flex-direction: column;
          }

          .review-image {
            flex-basis: auto;
          }
        }
      `}</style>
      
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2>Real stories paired with real work.</h2>
          <p>Each review sits beside a relevant tattoo image so the proof is visual, not just verbal.</p>
        </div>
        
        <div className="reviews-grid">
          {reviewCards.map((review, idx) => (
            <div 
              key={review.id} 
              className="review-card animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="review-image">
                <img src={review.image.src} alt={review.image.title} loading="lazy" />
              </div>

              <div className="review-copy">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < review.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-footer">
                  <div className="author-name">{review.clientName}</div>
                  <span className="badge badge-purple">{review.style}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
