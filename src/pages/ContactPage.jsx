import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';
import { artistInfo } from '../data/mockData';

export default function ContactPage() {
  return (
    <div className="contact-page" style={{ paddingTop: '100px', paddingBottom: 'var(--space-4xl)', minHeight: '100vh' }}>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4xl);
        }
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .contact-info-card {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }
        
        .contact-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .contact-icon {
          color: var(--accent-glow);
          background: var(--accent-primary-dim);
          padding: 12px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-text h4 {
          margin-bottom: 4px;
          color: var(--text-primary);
        }
        .contact-text p, .contact-text a {
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        .map-placeholder {
          background: var(--bg-secondary);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          height: 100%;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          position: relative;
          overflow: hidden;
        }
        .map-placeholder::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, transparent 70%);
        }
      `}</style>
      
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get in Touch</span>
          <h2>Contact The Studio</h2>
          <p>Have a question before booking? Reach out to us.</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info-card animate-fadeInUp">
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={24} /></div>
              <div className="contact-text">
                <h4>Studio Location</h4>
                <p>{artistInfo.location}</p>
                <p style={{ marginTop: '8px', fontSize: '0.9rem' }}>
                  <span className="badge badge-purple">House Calls Available</span>
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><Clock size={24} /></div>
              <div className="contact-text">
                <h4>Working Hours</h4>
                <p>{artistInfo.hours}</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><Phone size={24} /></div>
              <div className="contact-text">
                <h4>Phone / M-Pesa</h4>
                <a href={`tel:${artistInfo.phone}`}>{artistInfo.phone}</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><Instagram size={24} /></div>
              <div className="contact-text">
                <h4>Instagram</h4>
                <a href={artistInfo.instagramUrl} target="_blank" rel="noopener noreferrer">{artistInfo.instagram}</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><Mail size={24} /></div>
              <div className="contact-text">
                <h4>Email</h4>
                <a href={`mailto:${artistInfo.email}`}>{artistInfo.email}</a>
              </div>
            </div>
          </div>
          
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="map-placeholder">
              <div style={{ textAlign: 'center', zIndex: 1 }}>
                <MapPin size={48} style={{ opacity: 0.5, margin: '0 auto 16px' }} />
                <p>Google Maps Integration<br/>(Requires API Key for MVP Phase 2)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
