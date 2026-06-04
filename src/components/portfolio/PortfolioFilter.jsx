export default function PortfolioFilter({ categories, activeCategory, onCategoryChange, counts }) {
  return (
    <div className="filter-wrapper">
      <style>{`
        .filter-wrapper {
          position: sticky;
          top: 80px; /* Below navbar */
          z-index: var(--z-sticky);
          background: var(--bg-glass-heavy);
          backdrop-filter: blur(10px);
          padding: var(--space-md) 0;
          margin-bottom: var(--space-xl);
          border-bottom: var(--border-glass);
        }
        .filter-container {
          display: flex;
          gap: var(--space-sm);
          overflow-x: auto;
          padding-bottom: 8px; /* space for scrollbar */
          scrollbar-width: none; /* Firefox */
        }
        .filter-container::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }
        .filter-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          border: var(--border-glass);
          color: var(--text-secondary);
          font-size: 0.9rem;
          white-space: nowrap;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .filter-pill:hover {
          color: var(--text-primary);
          border-color: var(--accent-primary);
        }
        .filter-pill.active {
          background: var(--gradient-purple);
          color: white;
          border-color: transparent;
          box-shadow: var(--glow-purple);
        }
        .filter-count {
          background: rgba(0,0,0,0.2);
          padding: 2px 6px;
          border-radius: 10px;
          font-size: 0.75rem;
        }
      `}</style>
      
      <div className="container">
        <div className="filter-container">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
              <span className="filter-count">{counts[cat] || 0}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
