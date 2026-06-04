export default function CTASection() {
  return (
    <section className="section cta-section">
      <style>{`
        .cta-section {
          padding: var(--space-4xl) 0;
          position: relative;
        }
        
        .cta-card {
          background: var(--gradient-card);
          border: var(--border-glass);
          border-radius: var(--radius-xl);
          padding: var(--space-4xl) var(--space-xl);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 60%;
          background: var(--accent-primary);
          filter: blur(100px);
          opacity: 0.2;
          z-index: 0;
        }
        
        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .cta-content h2 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          margin-bottom: var(--space-md);
        }
        
        .cta-content p {
          font-size: 1.1rem;
          margin-bottom: var(--space-2xl);
        }
      `}</style>
      
      <div className="container">
        <div className="cta-card">
          <div className="cta-glow"></div>
          <div className="cta-content stagger-children">
            <h2>Ready to Get Inked?</h2>
            <p>Skip the DMs. Book your session directly and let's create something permanent.</p>
            <a href="/book" className="btn btn-primary btn-lg">Start Booking Request</a>
          </div>
        </div>
      </div>
    </section>
  );
}
