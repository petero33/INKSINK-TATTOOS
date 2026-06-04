import { Camera, Clock3, ShieldCheck, Sparkles } from 'lucide-react';
import { processImages } from '../data/mockData';

export default function ProcessPage() {
  return (
    <div className="process-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <style>{`
        .process-page {
          overflow-x: hidden;
          background:
            radial-gradient(circle at top right, rgba(124, 58, 237, 0.16), transparent 30%),
            radial-gradient(circle at top left, rgba(6, 182, 212, 0.12), transparent 24%),
            var(--bg-primary);
        }

        .process-hero {
          padding: var(--space-2xl) 0 var(--space-xl);
        }

        .process-grid {
          columns: 3 260px;
          column-gap: var(--space-md);
          padding-bottom: var(--space-4xl);
        }

        .process-card {
          break-inside: avoid;
          position: relative;
          overflow: hidden;
          margin-bottom: var(--space-md);
          border-radius: var(--radius-lg);
          border: var(--border-glass);
          background: var(--bg-card);
          box-shadow: var(--shadow-md);
        }

        .process-card img {
          width: 100%;
          display: block;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .process-card:hover img {
          transform: scale(1.04);
        }

        .process-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: var(--space-md);
          background: linear-gradient(180deg, rgba(10, 10, 15, 0.1) 0%, rgba(10, 10, 15, 0.82) 100%);
        }

        .process-overlay strong {
          color: var(--text-primary);
          font-size: 1rem;
          display: block;
          margin-bottom: 4px;
        }

        .process-overlay span {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .process-intro {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 380px);
          gap: var(--space-2xl);
          align-items: end;
          margin-bottom: var(--space-2xl);
        }

        .process-copy p {
          max-width: 65ch;
        }

        .process-points {
          display: grid;
          gap: var(--space-md);
        }

        .process-point {
          padding: var(--space-md);
          border-radius: var(--radius-lg);
          border: var(--border-glass);
          background: rgba(26, 26, 46, 0.72);
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .process-point svg {
          color: var(--accent-glow);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .process-point strong {
          display: block;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .process-point p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.92rem;
        }

        @media (max-width: 1024px) {
          .process-intro {
            grid-template-columns: 1fr;
          }

          .process-grid {
            columns: 2 220px;
          }
        }

        @media (max-width: 640px) {
          .process-page {
            padding-top: 88px;
          }

          .process-grid {
            columns: 1;
            padding-bottom: var(--space-3xl);
          }
        }
      `}</style>

      <div className="container process-hero">
        <div className="process-intro">
          <div className="process-copy animate-fadeInUp">
            <span className="section-label">Studio Process</span>
            <h1>Real tattoo work, step by step.</h1>
            <p>
              These are the  shots from the studio floor: the setup, the tattoo machine in motion, and the body-position details that show the actual craft behind the finished art.
            </p>
          </div>

          <div className="process-points animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="process-point">
              <ShieldCheck size={20} />
              <div>
                <strong>Clean workflow</strong>
                <p>Barrier protection, fresh setup, and a visible hygiene-first routine.</p>
              </div>
            </div>
            <div className="process-point">
              <Camera size={20} />
              <div>
                <strong>Behind-the-scenes proof</strong>
                <p>Clients can see the artist at work before they ever book a consult.</p>
              </div>
            </div>
            <div className="process-point">
              <Clock3 size={20} />
              <div>
                <strong>Session flow</strong>
                <p>Captured during real appointments so the pacing and handling feel authentic.</p>
              </div>
            </div>
            <div className="process-point">
              <Sparkles size={20} />
              <div>
                <strong>Modern presentation</strong>
                <p>Styled as a cinematic masonry wall rather than a plain photo dump.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="process-grid">
          {processImages.map((image, index) => (
            <article
              key={image.id}
              className="process-card animate-fadeInUp"
              style={{
                animationDelay: `${(index % 8) * 0.08}s`,
                minHeight: index % 5 === 0 ? '420px' : index % 5 === 1 ? '320px' : '280px',
              }}
            >
              <img src={image.src} alt={image.title} loading="lazy" />
              <div className="process-overlay">
                <strong>{image.title}</strong>
                <span>{image.note}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
