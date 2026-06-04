import HeroSection from '../components/home/HeroSection';
import FeaturedWork from '../components/home/FeaturedWork';
import ArtistSection from '../components/home/ArtistSection';
import SafetyProcessSection from '../components/home/SafetyProcessSection';
import ReviewsSection from '../components/home/ReviewsSection';
import InquirySection from '../components/home/InquirySection';

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedWork />
      <ArtistSection />
      <SafetyProcessSection />
      <ReviewsSection />
      <InquirySection />
      
      <footer style={{ borderTop: 'var(--border-glass)', padding: 'var(--space-2xl) 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div className="container">
          <p>© {new Date().getFullYear()} InkSink Tattoos. All rights reserved.</p>
          <div style={{ marginTop: '12px', fontSize: '0.85rem' }}>
            <a href="/login" style={{ color: 'inherit', opacity: 0.5 }}>Artist Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
