import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { authAPI } from '../services/api';
export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { dispatch } = useApp();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await authAPI.login(password);
      localStorage.setItem('inksink-token', res.token);
      dispatch({ type: 'LOGIN' });
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <style>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-primary);
          padding: var(--space-xl);
          position: relative;
        }
        .login-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image: radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%);
        }
        .login-card {
          width: 100%;
          max-width: 400px;
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-xl);
          padding: var(--space-2xl);
          position: relative;
          z-index: 1;
          box-shadow: var(--shadow-xl);
        }
        .login-header {
          text-align: center;
          margin-bottom: var(--space-xl);
        }
        .login-logo {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
      `}</style>

      <div className="login-bg"></div>
      
      <div className="login-card animate-scaleIn">
        <div className="login-header">
          <div className="login-logo"><span className="gradient-text">IS</span> Admin</div>
          <p style={{ color: 'var(--text-secondary)' }}>Artist Dashboard Access</p>
        </div>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label>Master Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          
          {error && (
            <div style={{ color: 'var(--accent-hot)', fontSize: '0.85rem' }}>
              {error}
            </div>
          )}
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
            Access Dashboard
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <a href="/" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>&larr; Back to public site</a>
        </div>
      </div>
    </div>
  );
}
