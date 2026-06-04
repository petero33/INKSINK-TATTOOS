import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, ChevronRight, User } from 'lucide-react';
import ClientProfile from './ClientProfile';

export default function ClientList() {
  const { state } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  
  const filteredClients = state.clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    client.phone.includes(searchTerm) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedClient) {
    return <ClientProfile client={selectedClient} onBack={() => setSelectedClient(null)} />;
  }

  return (
    <div className="client-list-view">
      <style>{`
        .list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-xl);
        }
        @media (max-width: 768px) {
          .list-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-md);
          }
        }
        .search-box {
          position: relative;
          width: 300px;
        }
        .search-box input {
          padding-left: 40px;
          border-radius: var(--radius-full);
          background: var(--bg-secondary);
        }
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        .client-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--space-lg);
        }
        .client-card {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .client-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-2px);
          background: var(--bg-card-hover);
        }
        .client-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-glow);
          font-weight: 600;
          font-size: 1.2rem;
          flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .client-info {
          flex: 1;
        }
        .client-name {
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .client-contact {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }
        .client-stats {
          display: flex;
          gap: 12px;
          font-size: 0.8rem;
        }
        .stat-item {
          background: rgba(0,0,0,0.2);
          padding: 4px 8px;
          border-radius: 4px;
          color: var(--text-secondary);
        }
        .stat-item strong {
          color: var(--text-primary);
          margin-left: 4px;
        }
      `}</style>
      
      <div className="list-header">
        <div>
          <h2>Client Database</h2>
          <p>Manage your {state.clients.length} clients and their history.</p>
        </div>
        
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search by name, phone, or email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {filteredClients.length === 0 ? (
        <div className="card text-center" style={{ padding: 'var(--space-4xl) 0' }}>
          <User size={48} style={{ opacity: 0.3, margin: '0 auto 16px', color: 'var(--text-secondary)' }} />
          <p style={{ color: 'var(--text-secondary)' }}>No clients found matching "{searchTerm}"</p>
        </div>
      ) : (
        <div className="client-grid">
          {filteredClients.map((client, idx) => (
            <div 
              key={client.id} 
              className="client-card animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.05}s` }}
              onClick={() => setSelectedClient(client)}
            >
              <div className="client-avatar">
                {client.name.charAt(0)}
              </div>
              <div className="client-info">
                <div className="client-name">{client.name}</div>
                <div className="client-contact">{client.phone} • {client.email}</div>
                
                <div className="client-stats">
                  <div className="stat-item">
                    Tattoos: <strong>{client.appointments ? client.appointments.length : 0}</strong>
                  </div>
                  <div className="stat-item">
                    Spent: <strong>{(client.totalSpent || 0).toLocaleString()}</strong> KES
                  </div>
                </div>
              </div>
              <ChevronRight size={20} className="text-muted" style={{ alignSelf: 'center' }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
