import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, CircleAlert } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { getDateBookingSummary, isSlotAvailable, timeSlotOptions } from '../../utils/schedule';

export default function StepDateSelect({ formData, onChange }) {
  // Simple mock calendar logic for MVP
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const { state } = useApp();

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
    onChange('date', dateStr);
    onChange('time', '');
  };

  const selectedDateSummary = formData.date ? getDateBookingSummary(state, formData.date) : null;

  return (
    <div className="step-date">
      <style>{`
        .calendar-container {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
          margin-bottom: var(--space-xl);
        }
        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-md);
        }
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
          text-align: center;
        }
        .calendar-day-header {
          font-weight: 600;
          color: var(--text-secondary);
          font-size: 0.85rem;
          padding-bottom: 8px;
        }
        .calendar-day {
          position: relative;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          transition: all var(--transition-fast);
          font-size: 0.95rem;
        }
        .calendar-day:hover:not(.empty) {
          background: var(--bg-secondary);
          color: var(--accent-glow);
        }
        .calendar-day.selected {
          background: var(--accent-primary);
          color: white;
          box-shadow: var(--glow-purple);
        }

        .calendar-day.booked {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .calendar-day.booked::after {
          content: '';
          position: absolute;
          bottom: 6px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-hot);
          box-shadow: var(--glow-red);
        }

        .availability-note {
          margin-bottom: var(--space-md);
          padding: var(--space-md);
          border-radius: var(--radius-md);
          border: var(--border-glass);
          background: rgba(26, 26, 46, 0.7);
          color: var(--text-secondary);
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .slot-legend {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: var(--space-md);
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .legend-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .legend-dot.open { background: var(--accent-green); }
        .legend-dot.booked { background: var(--accent-hot); }

        .time-slots {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: var(--space-sm);
        }
        .time-slot {
          padding: 10px;
          border: var(--border-glass);
          border-radius: var(--radius-md);
          text-align: center;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all var(--transition-fast);
          background: var(--bg-card);
        }
        .time-slot:hover {
          border-color: var(--accent-primary);
        }
        .time-slot.selected {
          background: var(--accent-primary-dim);
          border-color: var(--accent-primary);
          color: var(--accent-glow);
          box-shadow: var(--glow-purple);
        }

        .time-slot.booked {
          background: rgba(239, 68, 68, 0.12);
          border-color: rgba(239, 68, 68, 0.35);
          color: rgba(241, 245, 249, 0.45);
          cursor: not-allowed;
          opacity: 0.8;
        }

        .time-slot.booked:hover {
          border-color: rgba(239, 68, 68, 0.35);
        }

        .time-slot .slot-subtext {
          display: block;
          margin-top: 2px;
          font-size: 0.75rem;
          color: inherit;
          opacity: 0.85;
        }
      `}</style>

      <div className="calendar-container">
        <div className="calendar-header">
          <button type="button" className="btn btn-ghost btn-icon" onClick={handlePrevMonth}>&lt;</button>
          <h4>{monthNames[currentMonth]} {currentYear}</h4>
          <button type="button" className="btn btn-ghost btn-icon" onClick={handleNextMonth}>&gt;</button>
        </div>
        
        <div className="calendar-grid">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} className="calendar-day-header">{day}</div>
          ))}
          
          {blanks.map(blank => (
            <div key={`blank-${blank}`} className="calendar-day empty"></div>
          ))}
          
          {days.map(day => {
            const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const isSelected = formData.date === dateStr;
            const summary = getDateBookingSummary(state, dateStr);
            
            return (
              <div 
                key={day} 
                className={`calendar-day ${isSelected ? 'selected' : ''} ${summary.bookedCount > 0 ? 'booked' : ''}`}
                onClick={() => handleDateSelect(day)}
              >
                {day}
              </div>
            );
          })}
        </div>

        <div className="slot-legend">
          <span className="legend-item"><span className="legend-dot open"></span> Available day</span>
          <span className="legend-item"><span className="legend-dot booked"></span> Booked session(s)</span>
        </div>
      </div>

      {formData.date && (
        <div className="animate-fadeInUp">
          <div className="availability-note">
            <CircleAlert size={18} className="text-accent" />
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Booked times are blocked automatically.</strong>
              <div>{selectedDateSummary?.bookedCount || 0} of {selectedDateSummary?.totalSlots || 0} sessions already reserved for this day.</div>
            </div>
          </div>

          <h4 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={18} className="text-accent" /> Select Time
          </h4>
          <div className="time-slots">
            {timeSlotOptions.map(({ value, label }) => {
              const booked = !isSlotAvailable(state, formData.date, value);

              return (
                <div 
                  key={value}
                  className={`time-slot ${formData.time === value ? 'selected' : ''} ${booked ? 'booked' : ''}`}
                  onClick={() => {
                    if (!booked) {
                      onChange('time', value);
                    }
                  }}
                >
                  {label}
                  <span className="slot-subtext">{booked ? 'Booked' : 'Available'}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
