import { Check } from 'lucide-react';

export default function StepIndicator({ steps, currentStep }) {
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="step-track">
      <div className="step-track-line">
        <div className="step-track-fill" style={{ width: `${progress}%` }} />
      </div>
      <ol className="step-list">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const status = stepNumber < currentStep ? 'done' : stepNumber === currentStep ? 'active' : 'upcoming';
          return (
            <li key={label} className={`step-tick step-${status}`}>
              <span className="tick-mark">{status === 'done' ? <Check size={11} /> : stepNumber}</span>
              <span className="tick-label">{label}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}