import BookingWizard from '../components/booking/BookingWizard';

export default function BookingPage() {
  return (
    <div className="booking-page" style={{ paddingTop: '100px', paddingBottom: 'var(--space-4xl)', minHeight: '100vh' }}>
      <style>{`
        .booking-bg {
          position: fixed;
          inset: 0;
          z-index: -1;
          background: var(--bg-primary);
        }
        .booking-bg::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 50%;
          height: 50%;
          background: var(--accent-primary);
          filter: blur(150px);
          opacity: 0.15;
          border-radius: 50%;
        }
        .booking-bg::after {
          content: '';
          position: absolute;
          bottom: -20%;
          left: -10%;
          width: 50%;
          height: 50%;
          background: var(--accent-cyan);
          filter: blur(150px);
          opacity: 0.1;
          border-radius: 50%;
        }
      `}</style>
      
      <div className="booking-bg"></div>
      
      <div className="container">
        <BookingWizard />
      </div>
    </div>
  );
}
