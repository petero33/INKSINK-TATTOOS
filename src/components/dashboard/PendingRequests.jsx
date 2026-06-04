import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Calendar, DollarSign, Eye } from 'lucide-react';
import { requestsAPI } from '../../services/api';

export default function PendingRequests() {
  const { state, dispatch } = useApp();
  const [selectedRequest, setSelectedRequest] = useState(null);
  
  const pendingRequests = state.requests.filter(r => r.status === 'pending');

  const handleAction = async (id, action) => {
    try {
      await requestsAPI.updateStatus(id, action);
      // Let AppContext reload data, but for instant UI response, update local state
      dispatch({
        type: 'UPDATE_REQUEST_STATUS',
        payload: { id, status: action }
      });
      setSelectedRequest(null);
    } catch (err) {
      console.error('Failed to update request:', err);
    }
  };

  return (
    <div className="pending-requests">
      <style>{`
        .requests-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-xl);
        }
        .requests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: var(--space-lg);
        }
        .request-card {
          background: var(--bg-secondary);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          transition: all var(--transition-base);
          position: relative;
          overflow: hidden;
        }
        .request-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--accent-primary);
        }
        .request-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .request-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .client-name {
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--text-primary);
        }
        .request-date {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .request-idea {
          color: var(--text-secondary);
          font-size: 0.9rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          background: rgba(0,0,0,0.2);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
        }
        .request-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 0.85rem;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--text-secondary);
        }
        .request-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: auto;
          padding-top: var(--space-md);
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        
        /* Detail Modal (Simplified for inline here) */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10,10,15,0.8);
          backdrop-filter: blur(5px);
          z-index: var(--z-modal);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-lg);
          animation: fadeIn var(--transition-fast);
        }
        .modal-content {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          padding: var(--space-xl);
          animation: scaleIn var(--transition-fast);
        }
      `}</style>
      
      <div className="requests-header">
        <h3>Pending Tattoo Requests</h3>
        <div className="badge badge-purple">{pendingRequests.length} Needs Review</div>
      </div>
      
      {pendingRequests.length === 0 ? (
        <div className="card text-center" style={{ padding: 'var(--space-3xl) 0', color: 'var(--text-secondary)' }}>
          <p>Inbox zero! All caught up on requests.</p>
        </div>
      ) : (
        <div className="requests-grid">
          {pendingRequests.map((req, idx) => (
            <div 
              key={req.id} 
              className="request-card animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="request-header">
                <div>
                  <div className="client-name">{req.client?.name || req.clientName}</div>
                  <div className="request-date">Received {new Date(req.createdAt).toLocaleDateString()}</div>
                </div>
                <span className="badge badge-cyan">{req.style}</span>
              </div>
              
              <div className="request-idea">
                "{req.tattooIdea}"
              </div>
              
              <div className="request-meta">
                <span className="badge badge-purple">{req.placement}</span>
                <span className="badge badge-purple">{req.size}</span>
                <div className="meta-item"><Calendar size={14} /> {new Date(req.preferredDate).toLocaleDateString()}</div>
                {req.preferredTime && <div className="meta-item"><Calendar size={14} /> {req.preferredTime}</div>}
                <div className="meta-item"><DollarSign size={14} /> {req.budget}</div>
              </div>
              
              <div className="request-actions">
                <button 
                  className="btn btn-sm btn-ghost" 
                  style={{ gridColumn: '1 / -1', background: 'rgba(255,255,255,0.05)' }}
                  onClick={() => setSelectedRequest(req)}
                >
                  <Eye size={16} /> Review Full Details
                </button>
                <button 
                  className="btn btn-sm btn-secondary" 
                  style={{ borderColor: 'var(--accent-hot)', color: 'var(--accent-hot)' }}
                  onClick={() => handleAction(req.id, 'declined')}
                >
                  Decline
                </button>
                <button 
                  className="btn btn-sm btn-primary"
                  onClick={() => handleAction(req.id, 'accepted')}
                >
                  Accept
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Simple Modal for MVP instead of separate RequestDetail component to save files */}
      {selectedRequest && (
        <div className="modal-overlay" onClick={() => setSelectedRequest(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3 style={{ marginBottom: '8px' }}>Review Request</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>From: {selectedRequest.client?.name || selectedRequest.clientName} ({selectedRequest.client?.phone || selectedRequest.clientPhone})</p>
            
            <div className="card" style={{ marginBottom: '24px', background: 'var(--bg-secondary)' }}>
              <h5 style={{ marginBottom: '8px' }}>Idea</h5>
              <p style={{ color: 'var(--text-secondary)' }}>"{selectedRequest.tattooIdea}"</p>
            </div>
            
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Style</span>
                <span>{selectedRequest.style}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Placement</span>
                <span>{selectedRequest.placement}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Size</span>
                <span>{selectedRequest.size}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Color</span>
                <span>{selectedRequest.colorType}</span>
              </div>
            </div>
            
            {selectedRequest.referenceImages && selectedRequest.referenceImages.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <h5 style={{ marginBottom: '8px' }}>References</h5>
                <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }}>
                  {selectedRequest.referenceImages.map((img, i) => (
                    <img key={i} src={img} alt="Ref" style={{ height: '100px', borderRadius: '8px', objectFit: 'cover' }} />
                  ))}
                </div>
              </div>
            )}
            
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '32px' }}>
              <button className="btn btn-ghost" onClick={() => setSelectedRequest(null)}>Close</button>
              <button className="btn btn-secondary" onClick={() => handleAction(selectedRequest.id, 'consultation')}>Request Consult</button>
              <button className="btn btn-primary" onClick={() => handleAction(selectedRequest.id, 'accepted')}>Accept & Schedule</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
