import { ArrowLeft, Phone, Mail, Calendar, DollarSign, Star, AlertCircle, Edit2, Save } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function ClientProfile({ client, onBack }) {
  const { dispatch } = useApp();
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [notes, setNotes] = useState(client.notes || '');

  const handleSaveNotes = () => {
    dispatch({
      type: 'UPDATE_CLIENT',
      payload: { id: client.id, notes }
    });
    setIsEditingNotes(false);
  };

  return (
    <div className="client-profile animate-fadeIn">
      <style>{`
        .profile-header {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          margin-bottom: var(--space-xl);
        }
        .back-btn {
          background: var(--bg-secondary);
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
        .back-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-primary);
          background: var(--accent-primary-dim);
        }
        
        .profile-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: var(--space-xl);
        }
        @media (max-width: 992px) {
          .profile-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .main-col {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }
        .side-col {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }
        
        .info-card {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-xl);
          position: relative;
          overflow: hidden;
        }
        .info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-purple);
        }
        
        .client-name-lg {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        
        .contact-row {
          display: flex;
          align-items: center;
          gap: 24px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-md);
          margin-top: var(--space-xl);
          padding-top: var(--space-xl);
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .stat-box {
          text-align: center;
        }
        .stat-val {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-glow);
          margin-bottom: 4px;
        }
        .stat-lbl {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .section-card {
          background: var(--bg-secondary);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-lg);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 12px;
        }
        
        .tattoo-history {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .history-item {
          background: var(--bg-card);
          padding: 16px;
          border-radius: var(--radius-md);
          border-left: 3px solid var(--accent-primary);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .alert-box {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          padding: 12px;
          border-radius: var(--radius-md);
          display: flex;
          gap: 12px;
          align-items: flex-start;
          color: var(--text-primary);
        }
        .alert-icon {
          color: var(--accent-hot);
          flex-shrink: 0;
        }
        
        .notes-area {
          width: 100%;
          background: var(--bg-primary);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-md);
          padding: 12px;
          color: var(--text-primary);
          font-family: inherit;
          min-height: 150px;
          resize: vertical;
        }
        .notes-area:focus {
          outline: none;
          border-color: var(--accent-primary);
        }
      `}</style>
      
      <div className="profile-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
        </button>
        <h2>Client Profile</h2>
      </div>

      <div className="profile-grid">
        <div className="main-col">
          <div className="info-card">
            <div className="client-name-lg">{client.name}</div>
            
            <div className="contact-row">
              <div className="contact-item"><Phone size={16} className="text-muted" /> {client.phone}</div>
              <div className="contact-item"><Mail size={16} className="text-muted" /> {client.email}</div>
              <div className="contact-item"><Calendar size={16} className="text-muted" /> Joined {client.joinDate}</div>
            </div>
            
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-val">{client.appointments ? client.appointments.length : 0}</div>
                <div className="stat-lbl">Tattoos</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">{(client.totalSpent || 0).toLocaleString()}</div>
                <div className="stat-lbl">Total Spent (KES)</div>
              </div>
              <div className="stat-box">
                <div className="stat-val" style={{ color: 'var(--text-primary)' }}>
                  {client.appointments && client.appointments.length > 0 ? new Date(client.appointments[0].date).toLocaleDateString() : 'Never'}
                </div>
                <div className="stat-lbl">Last Visit</div>
              </div>
            </div>
          </div>

          <div className="section-card">
            <div className="section-header">
              <h4 style={{ margin: 0 }}>Tattoo History</h4>
            </div>
            
            {(!client.appointments || client.appointments.length === 0) ? (
              <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>No completed tattoos yet.</p>
            ) : (
              <div className="tattoo-history">
                {client.appointments.map((t, i) => (
                  <div key={i} className="history-item">
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{t.tattooType}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t.notes || 'No notes'}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: 'var(--accent-glow)' }}>{t.totalCost.toLocaleString()} KES</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{new Date(t.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {client.reviews && client.reviews.length > 0 && (
            <div className="section-card">
              <div className="section-header">
                <h4 style={{ margin: 0 }}>Reviews Left</h4>
              </div>
              <div className="tattoo-history">
                {client.reviews.map((r, i) => (
                  <div key={i} className="history-item" style={{ borderLeftColor: 'var(--accent-gold)' }}>
                    <div>
                      <div style={{ display: 'flex', gap: '4px', color: 'var(--accent-gold)', marginBottom: '4px' }}>
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} size={14} fill={idx < r.rating ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontStyle: 'italic' }}>"{r.text}"</div>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{r.date}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="side-col">
          {client.allergies && client.allergies.toLowerCase() !== 'none' && (
            <div className="alert-box">
              <AlertCircle size={20} className="alert-icon" />
              <div>
                <strong style={{ display: 'block', marginBottom: '4px' }}>Medical Alert</strong>
                <span style={{ fontSize: '0.9rem' }}>{client.allergies}</span>
              </div>
            </div>
          )}
          
          <div className="section-card">
            <h4 style={{ marginBottom: '16px' }}>Preferences</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              {client.preferences || 'No specific preferences noted.'}
            </p>
          </div>

          <div className="section-card">
            <div className="section-header">
              <h4 style={{ margin: 0 }}>Artist Notes</h4>
              {!isEditingNotes ? (
                <button className="btn btn-icon btn-ghost" onClick={() => setIsEditingNotes(true)}>
                  <Edit2 size={16} />
                </button>
              ) : (
                <button className="btn btn-sm btn-primary" onClick={handleSaveNotes} style={{ padding: '4px 12px' }}>
                  <Save size={14} style={{ marginRight: '4px' }}/> Save
                </button>
              )}
            </div>
            
            {isEditingNotes ? (
              <textarea 
                className="notes-area"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                autoFocus
              />
            ) : (
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', whiteSpace: 'pre-wrap' }}>
                {notes || 'No notes added yet.'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
