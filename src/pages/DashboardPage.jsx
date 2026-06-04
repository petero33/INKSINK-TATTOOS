import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

import TodayAppointments from '../components/dashboard/TodayAppointments';
import PendingRequests from '../components/dashboard/PendingRequests';
import DashCalendar from '../components/dashboard/DashCalendar';
import ClientList from '../components/dashboard/ClientList';
import EarningsOverview from '../components/dashboard/EarningsOverview';

export default function DashboardPage() {
  const { state } = useApp();
  const navigate = useNavigate();

  // Basic auth check
  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate('/login');
    }
  }, [state.isAuthenticated, navigate]);

  if (!state.isAuthenticated) return null;

  return (
    <div className="dashboard-overview">
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)' }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <h2 style={{ marginBottom: '8px' }}>Welcome back, Barry</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Here's what's happening at InkSink today.</p>
        </div>
        
        <div style={{ gridColumn: '1 / -1' }}>
          <EarningsOverview />
        </div>
        
        <div>
          <TodayAppointments />
        </div>
        
        <div>
          <PendingRequests />
        </div>
      </div>
    </div>
  );
}
