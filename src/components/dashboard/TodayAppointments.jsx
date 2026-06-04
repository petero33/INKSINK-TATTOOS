import { CheckCircle, Clock, PlayCircle, XCircle, Calendar as CalendarIcon } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { appointmentsAPI } from '../../services/api';

export default function TodayAppointments() {
  const { state, dispatch } = useApp();
  
  // Get today's date string in YYYY-MM-DD format
  const todayDateStr = new Date().toISOString().split('T')[0];
  
  // Filter for today's appointments and sort by time
  const todaySessions = state.appointments
    .filter(app => app.date && app.date.split('T')[0] === todayDateStr)
    .sort((a, b) => a.time.localeCompare(b.time));

  const handleStatusChange = async (id, newStatus) => {
    // Note: To fully implement, we would create a status update API endpoint.
    // For now, optimistic local update.
    dispatch({
      type: 'UPDATE_APPOINTMENT',
      payload: { id, status: newStatus }
    });
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle size={16} />;
      case 'in-progress': return <PlayCircle size={16} />;
      case 'cancelled': return <XCircle size={16} />;
      default: return <Clock size={16} />;
    }
  };

  const getStatusClass = (status) => {
    switch(status) {
      case 'completed': return 'badge-green';
      case 'in-progress': return 'badge-gold';
      case 'cancelled': return 'badge-red';
      default: return 'badge-cyan';
    }
  };

  return (
    <div className="today-appointments card">
      <style>{`
        .appointments-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-xl);
        }
        .timeline {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          position: relative;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 56px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--bg-secondary);
          z-index: 0;
        }
        .timeline-item {
          display: flex;
          gap: var(--space-lg);
          position: relative;
          z-index: 1;
        }
        .time-column {
          width: 60px;
          flex-shrink: 0;
          text-align: right;
          font-weight: 600;
          color: var(--text-primary);
          padding-top: 12px;
          background: var(--bg-card); /* cover the line */
        }
        .time-column span {
          font-size: 0.8rem;
          color: var(--text-secondary);
          display: block;
          font-weight: normal;
        }
        .session-card {
          flex: 1;
          background: var(--bg-secondary);
          border: var(--border-glass);
          border-radius: var(--radius-md);
          padding: var(--space-md);
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all var(--transition-fast);
        }
        .session-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateX(4px);
        }
        .session-card.in-progress {
          border-color: var(--accent-gold);
          box-shadow: inset 0 0 20px rgba(245, 158, 11, 0.1);
        }
        .session-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .client-name {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 4px;
        }
        .tattoo-details {
          color: var(--text-secondary);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .session-notes {
          background: rgba(0,0,0,0.2);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: var(--text-muted);
          border-left: 2px solid var(--accent-primary);
        }
        .session-actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          margin-top: 4px;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 12px;
        }
        
        .empty-state {
          text-align: center;
          padding: var(--space-3xl) 0;
          color: var(--text-secondary);
        }
      `}</style>
      
      <div className="appointments-header">
        <h3>Today's Sessions</h3>
        <div className="badge badge-purple">{todaySessions.length} Appointments</div>
      </div>
      
      {todaySessions.length === 0 ? (
        <div className="empty-state animate-fadeIn">
          <CalendarIcon size={48} style={{ opacity: 0.2, margin: '0 auto 16px' }} />
          <p>No appointments scheduled for today.</p>
          <p style={{ fontSize: '0.85rem' }}>Time to draw some flash or take a break!</p>
        </div>
      ) : (
        <div className="timeline">
          {todaySessions.map((session, idx) => (
            <div 
              key={session.id} 
              className="timeline-item animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="time-column">
                {session.time}
                <span>{session.duration}m</span>
              </div>
              
              <div className={`session-card ${session.status === 'in-progress' ? 'in-progress' : ''}`}>
                <div className="session-header">
                  <div>
                    <div className="client-name">{session.client?.name || session.clientName}</div>
                    <div className="tattoo-details">
                      {session.tattooType}
                    </div>
                  </div>
                  <div className={`badge ${getStatusClass(session.status)}`}>
                    {getStatusIcon(session.status)}
                    {session.status.replace('-', ' ').toUpperCase()}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '8px', fontSize: '0.8rem' }}>
                  <span className="badge badge-purple">{session.tattooType}</span>
                  {session.depositPaid ? (
                    <span className="badge badge-green">Deposit Paid</span>
                  ) : (
                    <span className="badge badge-red">Deposit Pending</span>
                  )}
                </div>
                
                {session.notes && (
                  <div className="session-notes">
                    {session.notes}
                  </div>
                )}
                
                <div className="session-actions">
                  {session.status === 'confirmed' && (
                    <button 
                      className="btn btn-sm btn-secondary" 
                      onClick={() => handleStatusChange(session.id, 'in-progress')}
                      style={{ borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}
                    >
                      Start Session
                    </button>
                  )}
                  {session.status === 'in-progress' && (
                    <button 
                      className="btn btn-sm btn-primary" 
                      onClick={() => handleStatusChange(session.id, 'completed')}
                    >
                      Complete & Bill
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
