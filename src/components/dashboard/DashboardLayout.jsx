import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Inbox, 
  Calendar as CalendarIcon, 
  Users, 
  DollarSign,
  Menu,
  Bell,
  Search,
  LogOut,
  Settings
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { artistInfo } from '../../data/mockData';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  const pendingCount = state.requests.filter(r => r.status === 'pending').length;
  
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  const navLinks = [
    { to: "/dashboard", label: "Overview", icon: <LayoutDashboard size={20} />, exact: true },
    { to: "/dashboard/requests", label: "Requests", icon: <Inbox size={20} />, badge: pendingCount > 0 ? pendingCount : null },
    { to: "/dashboard/calendar", label: "Calendar", icon: <CalendarIcon size={20} /> },
    { to: "/dashboard/clients", label: "Clients", icon: <Users size={20} /> },
    { to: "/dashboard/earnings", label: "Earnings", icon: <DollarSign size={20} /> },
  ];

  return (
    <div className="dashboard-container">
      <style>{`
        .dashboard-container {
          display: flex;
          height: 100vh;
          overflow: hidden;
          background: var(--bg-primary);
        }
        
        /* Sidebar */
        .sidebar {
          width: 260px;
          background: var(--bg-secondary);
          border-right: var(--border-glass);
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-base);
          z-index: var(--z-sticky);
        }
        
        .sidebar-header {
          padding: var(--space-lg);
          border-bottom: var(--border-glass);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .artist-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--gradient-hero);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: white;
          box-shadow: var(--glow-purple);
        }
        
        .sidebar-nav {
          flex: 1;
          padding: var(--space-md);
          display: flex;
          flex-direction: column;
          gap: 8px;
          overflow-y: auto;
        }
        
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        
        .nav-item:hover {
          background: rgba(255,255,255,0.05);
          color: var(--text-primary);
        }
        
        .nav-item.active {
          background: var(--accent-primary-dim);
          color: var(--accent-glow);
          box-shadow: inset 3px 0 0 var(--accent-primary);
        }
        
        .nav-badge {
          margin-left: auto;
          background: var(--accent-hot);
          color: white;
          font-size: 0.75rem;
          font-weight: bold;
          padding: 2px 8px;
          border-radius: 10px;
        }
        
        .sidebar-footer {
          padding: var(--space-md);
          border-top: var(--border-glass);
        }
        
        /* Main Content */
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .topbar {
          height: 70px;
          background: var(--bg-glass);
          backdrop-filter: blur(10px);
          border-bottom: var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 var(--space-lg);
        }
        
        .topbar-left, .topbar-right {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        
        .search-bar {
          position: relative;
          width: 300px;
        }
        
        .search-bar input {
          width: 100%;
          padding-left: 40px;
          border-radius: var(--radius-full);
          height: 40px;
        }
        
        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        
        .action-btn {
          position: relative;
          background: var(--bg-card);
          border: var(--border-glass);
          color: var(--text-secondary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        
        .action-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-primary);
        }
        
        .action-dot {
          position: absolute;
          top: 8px;
          right: 10px;
          width: 8px;
          height: 8px;
          background: var(--accent-hot);
          border-radius: 50%;
          box-shadow: var(--glow-red);
        }
        
        .content-area {
          flex: 1;
          overflow-y: auto;
          padding: var(--space-xl);
        }
        
        @media (max-width: 992px) {
          .sidebar {
            position: absolute;
            height: 100%;
            transform: translateX(-100%);
          }
          
          .sidebar.open {
            transform: translateX(0);
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .search-bar {
            display: none;
          }
        }
      `}</style>
      
      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[190] lg:hidden"
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 190 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="artist-avatar">
            {artistInfo.name.charAt(0)}
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>{artistInfo.name}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Artist Dashboard</div>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          {navLinks.map(link => (
            <NavLink 
              key={link.to} 
              to={link.to}
              end={link.exact}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              {link.icon}
              {link.label}
              {link.badge && <span className="nav-badge">{link.badge}</span>}
            </NavLink>
          ))}
        </nav>
        
        <div className="sidebar-footer">
          <button className="nav-item" style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer' }}>
            <Settings size={20} />
            Settings
          </button>
          <button onClick={handleLogout} className="nav-item" style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-hot)' }}>
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>
      
      <main className="main-content">
        <header className="topbar">
          <div className="topbar-left">
            <button className="mobile-menu-btn" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="hide-mobile" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {today}
            </div>
          </div>
          
          <div className="topbar-right">
            <div className="search-bar">
              <Search size={18} className="search-icon" />
              <input type="text" placeholder="Search clients, requests..." />
            </div>
            
            <button className="action-btn">
              <Bell size={18} />
              {pendingCount > 0 && <span className="action-dot"></span>}
            </button>
          </div>
        </header>
        
        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
