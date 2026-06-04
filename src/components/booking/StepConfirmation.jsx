import { CheckCircle } from 'lucide-react';

export default function StepConfirmation({ formData, onChange, onSubmit }) {
  const formatTime = (time) => {
    if (!time) return 'Not selected';

    const [hours, minutes] = time.split(':');
    const parsedHours = Number(hours);
    const suffix = parsedHours >= 12 ? 'PM' : 'AM';
    const displayHours = parsedHours % 12 || 12;
    return `${String(displayHours).padStart(2, '0')}:${minutes} ${suffix}`;
  };

  // Mock calculation based on size
  const getEstimatedCost = () => {
    switch (formData.size) {
      case 'Small': return '2,000 - 5,000 KES';
      case 'Medium': return '5,000 - 12,000 KES';
      case 'Large': return '12,000 - 25,000 KES';
      case 'Extra Large': return '25,000+ KES';
      default: return 'Custom Quote';
    }
  };

  const getDepositAmount = () => {
    // 30% of base price approx
    switch (formData.size) {
      case 'Small': return '1,000 KES';
      case 'Medium': return '2,500 KES';
      case 'Large': return '5,000 KES';
      case 'Extra Large': return '10,000 KES';
      default: return 'To be determined';
    }
  };

  return (
    <div className="step-confirm">
      <style>{`
        .summary-card {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-xl);
          margin-bottom: var(--space-xl);
        }
        .summary-section {
          margin-bottom: var(--space-lg);
          padding-bottom: var(--space-lg);
          border-bottom: var(--border-glass);
        }
        .summary-section:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-md);
        }
        .summary-item label {
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-bottom: 4px;
        }
        .summary-item p {
          color: var(--text-primary);
          font-weight: 500;
          margin: 0;
        }
        .deposit-box {
          background: var(--accent-primary-dim);
          border: 1px solid var(--accent-primary);
          border-radius: var(--radius-md);
          padding: var(--space-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: var(--space-md);
        }
        .deposit-box p {
          color: var(--accent-glow);
          font-weight: 700;
          font-size: 1.25rem;
          margin: 0;
        }
        .personal-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
          margin-top: var(--space-lg);
        }
        @media (max-width: 600px) {
          .personal-info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="summary-card">
        <div className="summary-section">
          <h4 style={{ marginBottom: '16px' }}>Tattoo Details</h4>
          <div className="summary-grid">
            <div className="summary-item">
              <label>Style</label>
              <p>{formData.style || 'Not specified'}</p>
            </div>
            <div className="summary-item">
              <label>Placement</label>
              <p>{formData.placement || 'Not specified'}</p>
            </div>
            <div className="summary-item">
              <label>Size</label>
              <p>{formData.size || 'Not specified'}</p>
            </div>
            <div className="summary-item">
              <label>Color</label>
              <p>{formData.colorType}</p>
            </div>
          </div>
          {formData.tattooIdea && (
            <div className="summary-item" style={{ marginTop: '16px' }}>
              <label>Idea Description</label>
              <p>{formData.tattooIdea}</p>
            </div>
          )}
        </div>

        <div className="summary-section">
          <h4 style={{ marginBottom: '16px' }}>Schedule & Pricing</h4>
          <div className="summary-grid">
            <div className="summary-item">
              <label>Preferred Date</label>
              <p>{formData.date || 'Not selected'}</p>
            </div>
            <div className="summary-item">
              <label>Time</label>
              <p>{formatTime(formData.time)}</p>
            </div>
            <div className="summary-item">
              <label>Estimated Cost</label>
              <p>{getEstimatedCost()}</p>
            </div>
          </div>
          
          <div className="deposit-box">
            <div>
              <label style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Required Deposit (MVP M-Pesa coming soon)</label>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Secures your slot. Deducted from final price.</span>
            </div>
            <p>{getDepositAmount()}</p>
          </div>
        </div>

        <div className="summary-section">
          <h4 style={{ marginBottom: '16px' }}>Your Details</h4>
          <div className="personal-info-grid">
            <div>
              <label>First Name</label>
              <input 
                type="text" 
                value={formData.firstName} 
                onChange={(e) => onChange('firstName', e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Last Name</label>
              <input 
                type="text" 
                value={formData.lastName} 
                onChange={(e) => onChange('lastName', e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Email</label>
              <input 
                type="email" 
                value={formData.email} 
                onChange={(e) => onChange('email', e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Phone Number (M-Pesa)</label>
              <input 
                type="tel" 
                value={formData.phone} 
                onChange={(e) => onChange('phone', e.target.value)} 
                required 
              />
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <input 
            type="checkbox" 
            id="terms" 
            style={{ width: 'auto' }}
            checked={formData.acceptedTerms}
            onChange={(e) => onChange('acceptedTerms', e.target.checked)}
          />
          <label htmlFor="terms" style={{ margin: 0 }}>
            I agree to the studio policies and understand the deposit is non-refundable if I cancel within 48 hours.
          </label>
        </div>
      </div>
    </div>
  );
}
