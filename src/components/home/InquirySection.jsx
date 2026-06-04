import { CarFront, Clock3, MapPin, Paperclip, Send } from 'lucide-react';
import { artistInfo } from '../../data/mockData';

export default function InquirySection() {
  return (
    <section className="section inquiry-section" id="inquiry">
      <style>{`
        .inquiry-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: var(--space-2xl);
          align-items: start;
        }

        @media (max-width: 992px) {
          .inquiry-layout {
            grid-template-columns: 1fr;
          }

          .inquiry-card,
          .location-card {
            padding: var(--space-lg);
          }
        }

        .inquiry-card,
        .location-card {
          background: rgba(26, 26, 46, 0.72);
          border: var(--border-glass);
          border-radius: var(--radius-xl);
          padding: var(--space-xl);
          box-shadow: var(--shadow-lg);
        }

        .inquiry-form {
          display: grid;
          gap: var(--space-md);
        }

        .field-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--space-md);
        }

        @media (max-width: 640px) {
          .field-grid {
            grid-template-columns: 1fr;
          }

          .helper-pill,
          .inquiry-form .btn {
            width: 100%;
          }

          .inquiry-form .btn {
            justify-content: center;
          }

          .map-frame {
            min-height: 260px;
          }
        }

        .form-note {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .map-frame {
          width: 100%;
          min-height: 320px;
          border: 0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: var(--space-lg);
          background: var(--bg-secondary);
        }

        .location-meta {
          display: grid;
          gap: 12px;
        }

        .location-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: var(--text-secondary);
        }

        .location-row strong {
          display: block;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .helper-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          padding: 10px 14px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: var(--border-glass);
          color: var(--text-secondary);
        }
      `}</style>

      <div className="container">
        <div className="section-header">
          <span className="section-label">Book the consult</span>
          <h2>Keep the form short and the next step obvious.</h2>
          <p>Only ask for what is needed to start the conversation: concept, placement, size, and references.</p>
        </div>

        <div className="inquiry-layout">
          <div className="inquiry-card animate-fadeInUp">
            <form className="inquiry-form" onSubmit={(event) => event.preventDefault()}>
              <div className="field-grid">
                <div>
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div>
                  <label>Phone or Email</label>
                  <input type="text" placeholder="Best contact details" />
                </div>
              </div>

              <div>
                <label>Design concept</label>
                <textarea placeholder="Describe the tattoo idea, references, and style direction." rows={4} />
              </div>

              <div className="field-grid">
                <div>
                  <label>Placement</label>
                  <input type="text" placeholder="Arm, leg, chest, back..." />
                </div>
                <div>
                  <label>Approximate size</label>
                  <input type="text" placeholder="Small, medium, large" />
                </div>
              </div>

              <div>
                <label>Reference photos</label>
                <input type="file" multiple />
              </div>

              <div className="helper-pill">
                <Paperclip size={16} />
                Upload references and we’ll reply with a clearer quote path.
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: 'fit-content' }}>
                Request Consultation <Send size={18} />
              </button>

              <p className="form-note">Studio replies are typically handled within one business day.</p>
            </form>
          </div>

          <aside className="location-card animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <iframe
              className="map-frame"
              title="InkSink studio map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(artistInfo.location)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="location-meta">
              <div className="location-row">
                <MapPin size={20} className="text-accent" />
                <div>
                  <strong>Studio location</strong>
                  <div>{artistInfo.location}</div>
                </div>
              </div>

              <div className="location-row">
                <Clock3 size={20} className="text-accent" />
                <div>
                  <strong>Hours</strong>
                  <div>{artistInfo.hours}</div>
                </div>
              </div>

              <div className="location-row">
                <CarFront size={20} className="text-accent" />
                <div>
                  <strong>Parking and access</strong>
                  <div>Share parking details, arrival notes, and whether you need a house call.</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}