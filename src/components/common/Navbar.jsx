import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { House, Images, Camera, Mail, CalendarPlus } from 'lucide-react';
import { artistInfo } from '../../data/mockData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  const mobileLinks = [
    { to: '/', label: 'Home', icon: House },
    { to: '/portfolio', label: 'Portfolio', icon: Images },
    { to: '/process', label: 'Process', icon: Camera },
    { to: '/contact', label: 'Contact', icon: Mail },
    { to: '/book', label: 'Book Now', icon: CalendarPlus, emphasis: true },
  ];

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          z-index: var(--z-sticky);
          transition: all var(--transition-base);
          background: transparent;
        }
        .navbar.scrolled {
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: var(--border-glass);
        }
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        .brand {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: 1px;
        }
        .nav-links {
          display: flex;
          gap: var(--space-xl);
          align-items: center;
        }
        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: color var(--transition-fast);
        }
        .nav-link:hover, .nav-link.active {
          color: var(--accent-glow);
        }
        .mobile-dock {
          display: none;
        }

        .dock-link {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 10px 8px;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          text-decoration: none;
          transition: all var(--transition-fast);
          position: relative;
        }

        .dock-link:hover,
        .dock-link.active {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .dock-link.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          width: 26px;
          height: 3px;
          border-radius: 999px;
          background: var(--accent-primary);
          box-shadow: var(--glow-purple);
        }

        .dock-link.emphasis {
          color: white;
          background: var(--gradient-hero);
          box-shadow: var(--glow-purple);
        }

        .dock-link.emphasis:hover,
        .dock-link.emphasis.active {
          color: white;
          background: var(--gradient-hero);
        }

        .dock-label {
          font-size: 0.7rem;
          font-weight: 600;
          line-height: 1;
          text-align: center;
        }

        @keyframes floatDock {
          0% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-6px); }
          100% { transform: translateX(-50%) translateY(0px); }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-dock {
            position: fixed;
            left: 50%;
            bottom: max(24px, env(safe-area-inset-bottom) + 14px);
            transform: translateX(-50%);
            display: flex;
            align-items: stretch;
            gap: 6px;
            width: min(94vw, 560px);
            padding: 8px;
            border-radius: 22px;
            background: rgba(18, 18, 26, 0.92);
            backdrop-filter: blur(18px);
            border: var(--border-glass);
            box-shadow: var(--shadow-xl), 0 10px 30px rgba(0, 0, 0, 0.5);
            z-index: var(--z-sticky);
            animation: floatDock 4s ease-in-out infinite;
          }

          body {
            padding-bottom: 114px;
          }
        }
      `}</style>
      
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <NavLink to="/" className="brand">
            <span className="gradient-text">IS</span> {artistInfo.studioName.split(' ')[0]}
          </NavLink>

          <nav className="nav-links">
            <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
            <NavLink to="/portfolio" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Portfolio</NavLink>
            <NavLink to="/process" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Process</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
            <NavLink to="/book" className="btn btn-primary btn-sm" style={{ padding: '8px 20px' }}>Book Now</NavLink>
          </nav>
        </div>
      </header>

      <nav className="mobile-dock" aria-label="Primary mobile navigation">
        {mobileLinks.map(({ to, label, icon: Icon, emphasis }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `dock-link ${isActive ? 'active' : ''} ${emphasis ? 'emphasis' : ''}`}
            aria-label={label}
          >
            <Icon size={20} />
            <span className="dock-label">{label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
