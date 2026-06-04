import { ChevronRight, Clock3, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { artistInfo, portfolioImages } from '../../data/mockData';

const heroImages = portfolioImages
  .filter((image) => ['Realism', 'Blackwork', 'Anime', 'Lettering'].includes(image.category))
  .slice(0, 4);

export default function HeroSection() {
  return (
    <section className="hero-section">
      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0 var(--space-4xl);
          overflow: hidden;
          background:
            radial-gradient(circle at 15% 20%, rgba(124, 58, 237, 0.18) 0%, transparent 30%),
            radial-gradient(circle at 80% 10%, rgba(239, 68, 68, 0.12) 0%, transparent 26%),
            linear-gradient(180deg, rgba(10, 10, 15, 0.5), rgba(10, 10, 15, 0.92));
        }

        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.25'/%3E%3C/svg%3E");
          opacity: 0.05;
          pointer-events: none;
        }

        .hero-backdrop {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10, 10, 15, 0.8) 0%, rgba(10, 10, 15, 0.2) 55%, rgba(10, 10, 15, 0.75) 100%);
        }

        .hero-glow {
          content: '';
          position: absolute;
          top: 15%;
          right: -10%;
          width: 420px;
          height: 420px;
          background: var(--accent-primary);
          filter: blur(120px);
          opacity: 0.2;
          border-radius: 50%;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: var(--space-4xl);
          align-items: center;
          width: 100%;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
          }

          .hero-section {
            padding-top: 100px;
          }

          .hero-main-card {
            min-height: 420px;
          }

          .hero-stack-card {
            min-height: 150px;
          }
        }

        .hero-kicker {
          display: inline-block;
          padding: 10px 16px;
          border-radius: var(--radius-full);
          background: rgba(255,255,255,0.06);
          border: var(--border-glass);
          color: var(--accent-glow);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1.4px;
          margin-bottom: var(--space-lg);
          text-transform: uppercase;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: var(--space-md);
          color: var(--text-primary);
          max-width: 11ch;
        }

        .hero-desc {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          margin-bottom: var(--space-xl);
          max-width: 640px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
        }

        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
          margin-top: var(--space-lg);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: var(--radius-full);
          background: rgba(26, 26, 46, 0.72);
          border: var(--border-glass);
          color: var(--text-secondary);
          font-size: 0.9rem;
          backdrop-filter: blur(10px);
        }

        .hero-proof {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
          margin-top: var(--space-2xl);
        }

        .hero-stat {
          min-width: 160px;
          flex: 1;
          padding: var(--space-md);
          border-radius: var(--radius-lg);
          background: rgba(26, 26, 46, 0.55);
          border: var(--border-glass);
        }

        .hero-stat strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .hero-stat span {
          color: var(--text-secondary);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-visual {
          position: relative;
        }

        .hero-frame {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: var(--space-md);
          align-items: stretch;
        }

        @media (max-width: 640px) {
          .hero-frame {
            grid-template-columns: 1fr;
          }

          .hero-section {
            min-height: auto;
            padding: 92px 0 var(--space-3xl);
          }

          .hero-title {
            max-width: none;
            font-size: clamp(2.5rem, 14vw, 3.5rem);
          }

          .hero-actions {
            flex-direction: column;
          }

          .hero-actions .btn {
            width: 100%;
          }

          .hero-badges {
            flex-direction: column;
          }

          .hero-badge {
            width: 100%;
          }

          .hero-proof {
            flex-direction: column;
          }

          .hero-stat {
            min-width: 0;
          }

          .hero-main-card {
            min-height: 360px;
          }
        }

        .hero-main-card,
        .hero-stack-card {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-xl);
          border: var(--border-glass);
          background: var(--bg-card);
          box-shadow: var(--shadow-xl);
        }

        .hero-main-card {
          min-height: 540px;
        }

        .hero-main-card img,
        .hero-stack-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .hero-main-card:hover img,
        .hero-stack-card:hover img {
          transform: scale(1.04);
        }

        .hero-main-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 12px;
          padding: var(--space-xl);
          background: linear-gradient(180deg, rgba(10, 10, 15, 0.1) 0%, rgba(10, 10, 15, 0.85) 100%);
        }

        .hero-main-overlay strong {
          font-size: 1.25rem;
          line-height: 1.4;
          max-width: 18ch;
        }

        .hero-side {
          display: grid;
          gap: var(--space-md);
        }

        .hero-stack-card {
          min-height: 170px;
        }

        .hero-floating-card {
          margin-top: var(--space-md);
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          border: var(--border-glass);
          background: rgba(26, 26, 46, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-md);
        }

        .hero-floating-card p {
          margin: 0;
        }

        .hero-floating-card strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 4px;
        }

        .hero-floating-card span {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        @media (max-width: 992px) {
          .hero-main-card {
            min-height: 460px;
          }
        }
      `}</style>

      <div className="hero-backdrop"></div>
      <div className="hero-glow"></div>
      
      <div className="container">
        <div className="hero-container">
          <div className="hero-copy animate-fadeInUp">
            <div className="hero-kicker">{artistInfo.location} • consultation-first studio</div>
            <h1 className="hero-title">
              Custom ink that books.
              <span className="gradient-text"> Clean work, clear process.</span>
            </h1>

            <p className="hero-desc">
              {artistInfo.bioExtended} Designed for campaigns that need visual trust, artistic authority, and a fast path to booking.
            </p>

            <div className="hero-actions">
              <a href="#inquiry" className="btn btn-primary btn-lg">
                Book a Free Consultation <ChevronRight size={20} />
              </a>
              <a href="/portfolio" className="btn btn-secondary btn-lg">
                Check Artist Availability
              </a>
            </div>

            <div className="hero-badges">
              <span className="hero-badge"><ShieldCheck size={16} /> Sterile, licensed, and health-focused</span>
              <span className="hero-badge"><Clock3 size={16} /> Consultations by appointment</span>
              <span className="hero-badge"><Sparkles size={16} /> Custom pieces, healed-result thinking</span>
            </div>

            <div className="hero-proof">
              <div className="hero-stat">
                <strong>{artistInfo.experience}</strong>
                <span>Experience</span>
              </div>
              <div className="hero-stat">
                <strong>{artistInfo.specialties.length}+</strong>
                <span>Specialty styles</span>
              </div>
              <div className="hero-stat">
                <strong>100%</strong>
                <span>Session-focused custom work</span>
              </div>
            </div>
          </div>

          <div className="hero-visual animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="hero-frame">
              <div className="hero-main-card">
                <img src={heroImages[0]?.src} alt={heroImages[0]?.title || 'InkSink featured tattoo'} />
                <div className="hero-main-overlay">
                  <span className="badge badge-purple">Fresh + healed-forward</span>
                  <strong>Artwork made to look intentional, modern, and premium from every angle.</strong>
                </div>
              </div>

              <div className="hero-side">
                {heroImages.slice(1, 4).map((image) => (
                  <div key={image.id} className="hero-stack-card">
                    <img src={image.src} alt={image.title} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-floating-card">
              <div>
                <strong>Fast consult turnaround</strong>
                <span>Short, low-friction inquiry flow with booking guidance</span>
              </div>
              <MapPin size={22} className="text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
