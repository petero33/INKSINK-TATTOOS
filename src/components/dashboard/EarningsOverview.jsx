import { useApp } from '../../context/AppContext';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export default function EarningsOverview() {
  const { state } = useApp();
  const data = state.earnings;

  // Find max value for bar chart height calculation
  const maxWeekly = Math.max(...data.weeklyBreakdown.map(d => d.amount));

  return (
    <div className="earnings-overview">
      <style>{`
        .overview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--space-lg);
          margin-bottom: var(--space-2xl);
        }
        .stat-card {
          background: var(--bg-secondary);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .stat-card::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, var(--accent-primary-dim) 0%, transparent 70%);
          transform: translate(30%, -30%);
          pointer-events: none;
        }
        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 8px;
        }
        .stat-value {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .stat-growth {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.85rem;
        }
        .growth-up { color: var(--accent-green); }
        .growth-down { color: var(--accent-hot); }
        
        .charts-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--space-lg);
        }
        @media (max-width: 992px) {
          .charts-grid { grid-template-columns: 1fr; }
        }
        
        .chart-card {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-xl);
        }
        .chart-header {
          margin-bottom: var(--space-xl);
        }
        
        /* CSS Bar Chart */
        .bar-chart {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 200px;
          padding-top: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex: 1;
        }
        .bar-wrapper {
          width: 32px;
          height: 100%;
          display: flex;
          align-items: flex-end;
          background: rgba(0,0,0,0.2);
          border-radius: 4px 4px 0 0;
          overflow: hidden;
          position: relative;
        }
        .bar-wrapper:hover .bar-tooltip {
          opacity: 1;
        }
        .bar-fill {
          width: 100%;
          background: var(--gradient-purple);
          border-radius: 4px 4px 0 0;
          transition: height 1s var(--transition-spring);
        }
        .bar-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .bar-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-primary);
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          color: white;
          opacity: 0;
          transition: opacity 0.2s;
          pointer-events: none;
          white-space: nowrap;
          border: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 4px;
        }
        
        /* Progress list */
        .progress-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .progress-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .progress-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }
        .progress-track {
          height: 8px;
          background: rgba(0,0,0,0.3);
          border-radius: 4px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: var(--accent-cyan);
          border-radius: 4px;
        }
      `}</style>
      
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <h2>Earnings Overview</h2>
        <p>Monitor your studio's financial performance.</p>
      </div>

      <div className="overview-grid">
        <div className="stat-card animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <span className="stat-label">Today's Revenue</span>
          <span className="stat-value">{data.totalToday.toLocaleString()} KES</span>
          <div className="stat-growth growth-up">
            <TrendingUp size={16} /> <span>Calculated from completed sessions</span>
          </div>
        </div>
        <div className="stat-card animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <span className="stat-label">This Week</span>
          <span className="stat-value">{data.totalThisWeek.toLocaleString()} KES</span>
          <div className="stat-growth growth-up">
            <TrendingUp size={16} /> <span>+12% from last week</span>
          </div>
        </div>
        <div className="stat-card animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <span className="stat-label">This Month</span>
          <span className="stat-value">{data.totalThisMonth.toLocaleString()} KES</span>
          <div className="stat-growth growth-up">
            <TrendingUp size={16} /> <span>+8% from last month</span>
          </div>
        </div>
        <div className="stat-card animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <span className="stat-label">Pending Deposits</span>
          <span className="stat-value">{data.depositsPending.toLocaleString()} KES</span>
          <div className="stat-growth" style={{ color: 'var(--text-secondary)' }}>
            <DollarSign size={16} /> <span>From upcoming bookings</span>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="chart-header">
            <h4>Weekly Revenue</h4>
          </div>
          <div className="bar-chart">
            {data.weeklyBreakdown.map((day) => {
              const heightPercent = maxWeekly > 0 ? (day.amount / maxWeekly) * 100 : 0;
              return (
                <div key={day.day} className="bar-group">
                  <div className="bar-wrapper">
                    <div className="bar-tooltip">{day.amount.toLocaleString()} KES</div>
                    <div 
                      className="bar-fill" 
                      style={{ height: `${heightPercent}%` }}
                    ></div>
                  </div>
                  <span className="bar-label">{day.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="chart-card animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="chart-header">
            <h4>Popular Styles</h4>
          </div>
          <div className="progress-list">
            {data.popularStyles.slice(0, 5).map((style, idx) => (
              <div key={style.style} className="progress-item">
                <div className="progress-header">
                  <span>{style.style}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{style.percentage}%</span>
                </div>
                <div className="progress-track">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: `${style.percentage}%`,
                      background: idx === 0 ? 'var(--accent-primary)' : 
                                  idx === 1 ? 'var(--accent-cyan)' : 
                                  idx === 2 ? 'var(--accent-gold)' : 'var(--text-muted)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
