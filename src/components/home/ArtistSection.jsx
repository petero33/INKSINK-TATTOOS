import { MapPin, Instagram, Mail, Phone } from 'lucide-react';
import { artistInfo } from '../../data/mockData';

export default function ArtistSection() {
  return (
    <section className="section artist-section" id="artist">
      <style>{`
        .artist-container {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: var(--space-4xl);
          align-items: center;
        }
        @media (max-width: 992px) {
          .artist-container {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
          }

          .artist-note-grid,
          .artist-features {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .artist-spotlight {
            position: static;
            margin-top: var(--space-md);
            flex-direction: column;
            align-items: stretch;
          }

          .artist-spotlight-card {
            width: 100%;
          }

          .contact-links {
            flex-wrap: wrap;
          }
        }
        
        .artist-image-col {
          position: relative;
        }
        .artist-image-wrapper {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          aspect-ratio: 4/5;
          background: var(--bg-card);
          border: var(--border-glass);
          box-shadow: var(--shadow-xl);
        }
        .artist-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10, 10, 15, 0.15) 0%, rgba(10, 10, 15, 0.78) 100%);
        }
        
        /* Placeholder styling since we don't have a photo */
        .artist-placeholder {
          width: 100%;
          height: 100%;
          background: var(--gradient-card);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .artist-placeholder-inner {
          text-align: center;
          color: rgba(255,255,255,0.1);
          font-family: var(--font-display);
          font-size: 4rem;
          font-weight: 800;
        }
        .placeholder-note {
          position: absolute;
          bottom: var(--space-md);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .artist-spotlight {
          position: absolute;
          left: var(--space-md);
          right: var(--space-md);
          bottom: var(--space-md);
          z-index: 1;
          display: flex;
          justify-content: space-between;
          gap: var(--space-md);
          align-items: flex-end;
        }

        .artist-spotlight-card {
          padding: 12px 14px;
          border-radius: var(--radius-md);
          background: rgba(10, 10, 15, 0.58);
          border: var(--border-glass);
          backdrop-filter: blur(12px);
        }

        .artist-spotlight-card strong {
          display: block;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .artist-spotlight-card span {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        
        .artist-glow {
          position: absolute;
          top: 10%;
          left: 10%;
          width: 80%;
          height: 80%;
          background: var(--accent-primary);
          filter: blur(100px);
          opacity: 0.3;
          z-index: -1;
        }
        
        .artist-content h2 {
          margin-bottom: var(--space-md);
        }
        
        .artist-bio {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: var(--space-xl);
        }

        .artist-note-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--space-md);
          margin-bottom: var(--space-xl);
        }

        .artist-note {
          padding: var(--space-md);
          border-radius: var(--radius-lg);
          border: var(--border-glass);
          background: var(--bg-card);
        }

        .artist-note h4 {
          margin-bottom: 8px;
        }

        .artist-note p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        
        .artist-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
          margin-bottom: var(--space-xl);
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-primary);
          background: var(--bg-card);
          padding: 12px 16px;
          border-radius: var(--radius-md);
          border: var(--border-glass);
        }
        .feature-icon {
          color: var(--accent-glow);
        }
        
        .specialties {
          margin-bottom: var(--space-xl);
        }
        .specialties h4 {
          margin-bottom: 12px;
          color: var(--text-primary);
        }
        .specialty-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .contact-links {
          display: flex;
          gap: var(--space-md);
        }
        .contact-link {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-card);
          border: var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }
        .contact-link:hover {
          background: var(--accent-primary-dim);
          color: var(--accent-glow);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        @media (max-width: 480px) {
          .artist-placeholder-inner {
            font-size: 3rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="artist-container">
          <div className="artist-image-col">
            <div className="artist-glow"></div>
            <div className="artist-image-wrapper">
              <div className="artist-placeholder">
                <div className="artist-placeholder-inner">
                  INKSINK<br/>TATTOOS
                </div>
                <div className="placeholder-note"></div>
              </div>
              <div className="artist-spotlight">
                <div className="artist-spotlight-card">
                  <strong>{artistInfo.name}</strong>
                  <span>Lead artist • {artistInfo.experience}</span>
                </div>
                <div className="artist-spotlight-card">
                  <strong>{artistInfo.hours}</strong>
                  <span>Walk-ins by request</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="artist-content stagger-children">
            <div>
              <span className="section-label">Meet The Artist</span>
              <h2>{artistInfo.name} builds custom work around your idea.</h2>
            </div>
            
            <p className="artist-bio">
              {artistInfo.bio} {artistInfo.bioExtended}
            </p>

            <div className="artist-note-grid">
              <div className="artist-note">
                <h4>What clients come for</h4>
                <p>Anime, blackwork, realism, tribal, minimalist, color, lettering, and larger custom pieces.</p>
              </div>
              <div className="artist-note">
                <h4>What makes it easier</h4>
                <p>Consult-first conversations, transparent direction, and a clean booking path from phone to chair.</p>
              </div>
            </div>
            
            <div className="artist-features">
              <div className="feature-item">
                <MapPin className="feature-icon" size={20} />
                <span>{artistInfo.location}</span>
              </div>
              <div className="feature-item">
                <MapPin className="feature-icon" size={20} />
                <span>House Calls Available</span>
              </div>
            </div>
            
            <div className="specialties">
              <h4>Specialties</h4>
              <div className="specialty-tags">
                {artistInfo.specialties.map(style => (
                  <span key={style} className="badge badge-purple">{style}</span>
                ))}
              </div>
            </div>
            
            <div className="contact-links">
              <a href={artistInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={`mailto:${artistInfo.email}`} className="contact-link" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href={`tel:${artistInfo.phone}`} className="contact-link" aria-label="Phone">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
