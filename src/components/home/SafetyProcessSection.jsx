import { ClipboardCheck, HeartHandshake, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    icon: ClipboardCheck,
    title: 'Consultation',
    text: 'We confirm style, size, placement, and references before the appointment is set.',
  },
  {
    icon: Sparkles,
    title: 'Design prep',
    text: 'The artwork is refined so the shape, flow, and contrast suit the body part it will sit on.',
  },
  {
    icon: ShieldCheck,
    title: 'Sterile session',
    text: 'Fresh gloves, single-use needles, barrier protection, and a clean working surface every time.',
  },
  {
    icon: HeartHandshake,
    title: 'Aftercare support',
    text: 'Clear healing instructions and follow-up guidance keep the tattoo looking right after it leaves the chair.',
  },
];

const hygienePoints = [
  'Medical-grade disinfectant between appointments',
  'Single-use needles and fresh ink caps',
  'Barrier film on touch points and equipment',
  'Glove changes during setup, tattooing, and cleanup',
  'Written aftercare directions before you leave',
];

export default function SafetyProcessSection() {
  return (
    <section className="section safety-process-section">
      <style>{`
        .safety-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: var(--space-2xl);
          align-items: start;
        }

        @media (max-width: 992px) {
          .safety-layout {
            grid-template-columns: 1fr;
          }
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--space-md);
        }

        @media (max-width: 640px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
        }

        .process-card,
        .safety-card {
          background: rgba(26, 26, 46, 0.72);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
          box-shadow: var(--shadow-md);
        }

        .process-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-primary-dim);
          color: var(--accent-glow);
          margin-bottom: var(--space-md);
        }

        .process-card h3,
        .safety-card h3 {
          margin-bottom: 8px;
        }

        .process-card p,
        .safety-card p,
        .safety-card li {
          color: var(--text-secondary);
        }

        .safety-list {
          list-style: none;
          display: grid;
          gap: 12px;
          margin-top: var(--space-md);
        }

        .safety-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .safety-list li::before {
          content: '•';
          color: var(--accent-glow);
          line-height: 1.4;
        }

        .aftercare-callout {
          margin-top: var(--space-lg);
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.16), rgba(6, 182, 212, 0.12));
          border: 1px solid rgba(124, 58, 237, 0.25);
        }

        .aftercare-callout strong {
          display: block;
          margin-bottom: 6px;
          color: var(--text-primary);
        }
      `}</style>

      <div className="container">
        <div className="section-header">
          <span className="section-label">Safety + Process</span>
          <h2>Everything is designed to reduce hesitation.</h2>
          <p>Clients should know what happens, how the studio stays clean, and how healing is supported before they book.</p>
        </div>

        <div className="safety-layout">
          <div className="process-grid">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.title} className="process-card animate-fadeInUp">
                  <div className="process-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>

          <aside className="safety-card animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <span className="section-label">Hygiene Checklist</span>
            <h3>Sterile setup, visible process, zero ambiguity.</h3>
            <ul className="safety-list">
              {hygienePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="aftercare-callout">
              <strong>Aftercare sneak-peek</strong>
              <p>You'll leave with healing guidance that covers washing, ointment, and what to expect during the first two weeks.</p>
              <div style={{ marginTop: 'var(--space-md)' }}>
                <a href="/process" className="btn btn-secondary btn-sm">
                  View studio process <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}