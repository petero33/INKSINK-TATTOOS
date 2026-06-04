import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon } from 'lucide-react';
import { getBlockedScheduleEntries } from '../../utils/schedule';

export default function DashCalendar() {
  const { state } = useApp();
  const today = new Date();
  
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today.toISOString().split('T')[0]);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const handleDateSelect = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(dateStr);
  };
  
  const scheduledEntries = getBlockedScheduleEntries(state);

  // Get all scheduled sessions for selected date
  const selectedDateAppointments = scheduledEntries
    .filter((entry) => entry.date === selectedDate)
    .map((entry) => {
      if (entry.source === 'appointment') {
        const app = state.appointments.find((a) => a.id === entry.id);
        return {
          id: entry.id,
          clientName: app?.client?.name || app?.clientName || 'Appointment',
          time: app?.time || '',
          duration: app?.duration || '',
          tattooType: app?.tattooType || 'Session',
          style: app?.tattooType || 'Appointment',
          placement: app?.notes || app?.placement || '',
          status: app?.status || 'confirmed',
          source: 'appointment',
        };
      }

      const request = [...state.requests, ...state.bookings].find((item) => item.id === entry.id);
      return {
        id: entry.id,
        clientName: request?.client?.name || request?.clientName || 'Pending request',
        time: request?.preferredTime || '',
        duration: 'Consultation',
        tattooType: request?.tattooIdea || 'Booking request',
        style: request?.style || 'Request',
        placement: request?.placement || '',
        status: request?.status || 'pending',
        source: 'request',
      };
    })
    .sort((a, b) => a.time.localeCompare(b.time));

  // Helper to check if a day has appointments
  const hasAppointments = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return scheduledEntries.some((entry) => entry.date === dateStr);
  };

  return (
    <div className="dash-calendar-view">
      <style>{`
        .calendar-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--space-xl);
        }
        @media (max-width: 992px) {
          .calendar-layout {
            grid-template-columns: 1fr;
          }
        }
        
        .main-calendar {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-xl);
        }
        
        .cal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-xl);
        }
        
        .cal-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 12px;
          text-align: center;
        }
        
        .cal-day-name {
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 12px;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
        
        .cal-cell {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
          background: var(--bg-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          position: relative;
          font-weight: 500;
          border: 1px solid transparent;
        }
        
        .cal-cell:hover:not(.empty) {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-2px);
        }
        
        .cal-cell.selected {
          background: var(--accent-primary-dim);
          border-color: var(--accent-primary);
          color: var(--text-primary);
          box-shadow: var(--glow-purple);
        }
        
        .cal-dot {
          position: absolute;
          bottom: 8px;
          width: 6px;
          height: 6px;
          background: var(--accent-cyan);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-cyan);
        }
        
        .side-panel {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }
        
        .selected-date-header {
          background: var(--gradient-card);
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          border: var(--border-glass);
        }
        
        .app-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }
        
        .app-card {
          background: var(--bg-card);
          border: var(--border-glass);
          border-left: 3px solid var(--accent-primary);
          padding: var(--space-md);
          border-radius: var(--radius-md);
        }
        
        .app-time {
          color: var(--accent-glow);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
      `}</style>

      <div className="calendar-layout">
        <div className="main-calendar animate-fadeInUp">
          <div className="cal-header">
            <h3>Studio Calendar</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button className="btn btn-icon btn-secondary" onClick={handlePrevMonth}><ChevronLeft size={20} /></button>
              <span style={{ fontSize: '1.2rem', fontWeight: 600, minWidth: '150px', textAlign: 'center' }}>
                {monthNames[currentMonth]} {currentYear}
              </span>
              <button className="btn btn-icon btn-secondary" onClick={handleNextMonth}><ChevronRight size={20} /></button>
            </div>
          </div>
          
          <div className="cal-grid">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="cal-day-name">{day}</div>
            ))}
            
            {blanks.map(blank => (
              <div key={`blank-${blank}`} className="cal-cell empty" style={{ background: 'transparent' }}></div>
            ))}
            
            {days.map(day => {
              const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              const isSelected = selectedDate === dateStr;
              const hasApp = hasAppointments(day);
              
              return (
                <div 
                  key={day} 
                  className={`cal-cell ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleDateSelect(day)}
                >
                  {day}
                  {hasApp && <div className="cal-dot"></div>}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="side-panel animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="selected-date-header">
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Schedule for</h4>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
              {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </h2>
          </div>
          
          {selectedDateAppointments.length === 0 ? (
            <div className="card text-center" style={{ padding: 'var(--space-2xl) 0', color: 'var(--text-secondary)' }}>
              <CalendarIcon size={32} style={{ opacity: 0.5, margin: '0 auto 12px' }} />
              <p>No sessions booked or held.</p>
            </div>
          ) : (
            <div className="app-list">
              {selectedDateAppointments.map(app => (
                <div key={app.id} className="app-card">
                  <div className="app-time">
                    <Clock size={14} />
                    {app.time}{app.duration ? ` (${app.duration})` : ''}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '4px' }}>{app.clientName}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>
                    {app.tattooType}
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span className="badge badge-cyan">{app.style}</span>
                    <span className="badge badge-purple">{app.placement}</span>
                    <span className={`badge ${app.source === 'request' ? 'badge-gold' : 'badge-green'}`}>
                      {app.source === 'request' ? 'HOLD' : 'BOOKED'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
