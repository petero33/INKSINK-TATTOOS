import { placementOptions, styleOptions, sizeOptions, budgetOptions } from '../../data/mockData';

export default function StepTattooRequest({ formData, onChange }) {
  const handleStyleSelect = (style) => {
    onChange('style', style);
  };

  const handleColorToggle = (type) => {
    onChange('colorType', type);
  };

  return (
    <div className="step-tattoo">
      <style>{`
        .step-tattoo {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }
        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: var(--space-sm);
        }
        .option-chip {
          padding: var(--space-sm) var(--space-md);
          border-radius: var(--radius-full);
          border: var(--border-glass);
          background: var(--bg-card);
          color: var(--text-secondary);
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          font-size: 0.9rem;
        }
        .option-chip:hover {
          border-color: var(--accent-primary);
          color: var(--text-primary);
        }
        .option-chip.active {
          background: var(--accent-primary-dim);
          border-color: var(--accent-primary);
          color: var(--accent-glow);
          box-shadow: var(--glow-purple);
        }
        .size-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-md);
        }
        .size-card {
          padding: var(--space-md);
          border-radius: var(--radius-md);
          border: var(--border-glass);
          background: var(--bg-card);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: center;
        }
        .size-card:hover {
          border-color: var(--accent-primary);
          background: var(--bg-card-hover);
        }
        .size-card.active {
          border-color: var(--accent-primary);
          background: var(--accent-primary-dim);
          box-shadow: var(--glow-purple);
        }
        .size-card h4 {
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .size-card p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .color-toggle {
          display: flex;
          background: var(--bg-secondary);
          border-radius: var(--radius-full);
          padding: 4px;
        }
        .color-btn {
          flex: 1;
          padding: 8px 16px;
          text-align: center;
          border-radius: var(--radius-full);
          cursor: pointer;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
          color: var(--text-secondary);
        }
        .color-btn.active {
          background: var(--accent-primary);
          color: white;
          box-shadow: var(--shadow-sm);
        }
      `}</style>

      <div className="form-group">
        <label>Describe your tattoo idea</label>
        <textarea 
          placeholder="E.g. I want a realistic lion with a crown on my upper arm..."
          value={formData.tattooIdea}
          onChange={(e) => onChange('tattooIdea', e.target.value)}
          rows={4}
        />
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-xl)' }}>
        <div className="form-group">
          <label>Placement</label>
          <select 
            value={formData.placement}
            onChange={(e) => onChange('placement', e.target.value)}
          >
            <option value="">Select placement</option>
            {placementOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label>Color Preference</label>
          <div className="color-toggle">
            {['Blackwork', 'Full Color', 'Both'].map(type => (
              <div 
                key={type}
                className={`color-btn ${formData.colorType === type ? 'active' : ''}`}
                onClick={() => handleColorToggle(type)}
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>Preferred Style</label>
        <div className="options-grid">
          {styleOptions.map(style => (
            <div 
              key={style}
              className={`option-chip ${formData.style === style ? 'active' : ''}`}
              onClick={() => handleStyleSelect(style)}
            >
              {style}
            </div>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Estimated Size</label>
        <div className="size-cards">
          {sizeOptions.map(size => (
            <div 
              key={size.label}
              className={`size-card ${formData.size === size.label ? 'active' : ''}`}
              onClick={() => onChange('size', size.label)}
            >
              <h4>{size.label}</h4>
              <p>{size.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-xl)' }}>
         <div className="form-group">
            <label>Budget Range (KES)</label>
            <select 
              value={formData.budget}
              onChange={(e) => onChange('budget', e.target.value)}
            >
              <option value="">Select budget range</option>
              {budgetOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          
          <div className="form-group">
            <label>Pain Tolerance (1-10)</label>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value={formData.painTolerance}
              onChange={(e) => onChange('painTolerance', e.target.value)}
              style={{ padding: 0 }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
              <span>1 (Very low)</span>
              <span>{formData.painTolerance}</span>
              <span>10 (Steel)</span>
            </div>
          </div>
      </div>
    </div>
  );
}
