import { useState } from 'react';
import { Calendar, Image as ImageIcon, Ruler, DollarSign, MapPin, CheckCircle } from 'lucide-react';
import StepTattooRequest from './StepTattooRequest';
import StepDateSelect from './StepDateSelect';
import StepConfirmation from './StepConfirmation';
import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { isSlotAvailable } from '../../utils/schedule';
import { requestsAPI } from '../../services/api';

export default function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    tattooIdea: '',
    placement: '',
    size: '',
    style: '',
    colorType: 'Blackwork',
    budget: '',
    painTolerance: 5,
    referenceImages: [],
    date: '',
    time: '',
    duration: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    acceptedTerms: false,
  });
  
  const { state, dispatch } = useApp();
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep === 2 && (!formData.date || !formData.time)) {
      setSubmitError('Please choose an available date and time before continuing.');
      return;
    }

    setSubmitError('');
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };
  const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleChange = (field, value) => {
    setSubmitError('');
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSlotAvailable(state, formData.date, formData.time)) {
      setSubmitError('That time is already booked. Please choose another available slot.');
      setCurrentStep(2);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        idea: formData.tattooIdea,
        placement: formData.placement,
        size: formData.size,
        style: formData.style,
        colorType: formData.colorType,
        budget: formData.budget,
        preferredDate: formData.date,
        painTolerance: formData.painTolerance,
        referenceImages: formData.referenceImages
      };

      await requestsAPI.submitPublic(payload);
      
      // Optionally still dispatch locally so the user sees it immediately if they login
      // but usually public form doesn't need to update artist state immediately unless using websockets
      
      navigate('/?booking=success');
    } catch (error) {
      setSubmitError(error.message || 'Failed to submit booking request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-wizard card-glass">
      <style>{`
        .booking-wizard {
          max-width: 800px;
          margin: 0 auto;
        }
        .wizard-header {
          text-align: center;
          margin-bottom: var(--space-xl);
        }
        .progress-bar {
          display: flex;
          justify-content: space-between;
          position: relative;
          margin-bottom: var(--space-2xl);
        }
        .progress-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--bg-card);
          z-index: 1;
          transform: translateY(-50%);
        }
        .progress-fill {
          position: absolute;
          top: 50%;
          left: 0;
          height: 2px;
          background: var(--accent-primary);
          z-index: 1;
          transform: translateY(-50%);
          transition: width var(--transition-base);
        }
        .step-indicator {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-sm);
        }
        .step-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 2px solid var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          transition: all var(--transition-base);
        }
        .step-indicator.active .step-circle {
          border-color: var(--accent-primary);
          background: var(--accent-primary-dim);
          color: var(--accent-glow);
          box-shadow: var(--glow-purple);
        }
        .step-indicator.completed .step-circle {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: white;
        }
        .step-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .step-indicator.active .step-label {
          color: var(--text-primary);
          font-weight: 600;
        }
        .wizard-content {
          min-height: 400px;
        }
        .wizard-actions {
          display: flex;
          justify-content: space-between;
          margin-top: var(--space-2xl);
          padding-top: var(--space-xl);
          border-top: var(--border-glass);
        }
      `}</style>
      
      <div className="wizard-header">
        <h2 className="gradient-text">Book Your Session</h2>
        <p>Tell us about your idea and find a time that works.</p>
        {submitError && (
          <div style={{ marginTop: '12px', color: 'var(--accent-hot)' }}>{submitError}</div>
        )}
      </div>

      <div className="progress-bar">
        <div className="progress-line"></div>
        <div 
          className="progress-fill" 
          style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
        ></div>
        
        {['Tattoo Details', 'Pick Date', 'Confirm'].map((label, idx) => {
          const stepNum = idx + 1;
          let statusClass = '';
          if (stepNum === currentStep) statusClass = 'active';
          else if (stepNum < currentStep) statusClass = 'completed';
          
          return (
            <div key={stepNum} className={`step-indicator ${statusClass}`}>
              <div className="step-circle">
                {stepNum < currentStep ? <CheckCircle size={20} /> : stepNum}
              </div>
              <span className="step-label">{label}</span>
            </div>
          );
        })}
      </div>

      <div className="wizard-content animate-fadeIn">
        {currentStep === 1 && (
          <StepTattooRequest formData={formData} onChange={handleChange} />
        )}
        {currentStep === 2 && (
          <StepDateSelect formData={formData} onChange={handleChange} />
        )}
        {currentStep === 3 && (
          <StepConfirmation formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
        )}
      </div>

      <div className="wizard-actions">
        {currentStep > 1 ? (
          <button type="button" className="btn btn-secondary" onClick={handleBack} disabled={isSubmitting}>
            Back
          </button>
        ) : (
          <div></div>
        )}
        
        {currentStep < 3 ? (
          <button type="button" className="btn btn-primary" onClick={handleNext}>
            Continue
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
          </button>
        )}
      </div>
    </div>
  );
}
