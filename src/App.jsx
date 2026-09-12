import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StepIndicator from './components/StepIndicator';
import TypeSelector from './components/TypeSelector';
import ContentForm from './components/ContentForm';
import DesignCustomizer from './components/DesignCustomizer';
import QrPreview from './components/QrPreview';
import QrMark from './components/QrMark';
import { QR_TYPES } from './data/qrtypes';
import { buildQrValue } from './utils/buildQrValue';
import './App.css';

const STEP_LABELS = ['Select type', 'Add content', 'Design', 'Export'];

export default function App() {
  const [step, setStep] = useState(1);
  const [selectedTypeId, setSelectedTypeId] = useState(null);
  const [formData, setFormData] = useState({});
  const [design, setDesign] = useState({
    fgColor: '#14140f',
    bgColor: '#ffffff',
    size: 260,
    level: 'M',
    logo: null,
  });

  const selectedType = QR_TYPES.find((t) => t.id === selectedTypeId) || null;
  const qrValue = useMemo(
    () => (selectedType ? buildQrValue(selectedType.id, formData) : ''),
    [selectedType, formData]
  );

  const canContinue = () => {
    if (step === 1) return !!selectedTypeId;
    if (step === 2) return !!qrValue;
    return true;
  };

  const handleTypeSelect = (id) => {
    setSelectedTypeId(id);
    setFormData({});
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <QrMark size={22} />
          <span>QR Studio</span>
        </div>
        <StepIndicator steps={STEP_LABELS} currentStep={step} />
      </header>

      <main className="app-main">
        <section className="step-panel">
          {step === 1 && (
            <>
              <h2>Select a type of QR code</h2>
              <TypeSelector types={QR_TYPES} selectedTypeId={selectedTypeId} onSelect={handleTypeSelect} />
            </>
          )}
          {step === 2 && (
            <>
              <h2>Add content</h2>
              <ContentForm type={selectedType} formData={formData} onChange={setFormData} />
            </>
          )}
          {step === 3 && (
            <>
              <h2>Design your QR code</h2>
              <DesignCustomizer design={design} onChange={setDesign} />
            </>
          )}
          {step === 4 && (
            <>
              <h2>Export</h2>
              <p>Your QR code is ready. Download it, or go back to make changes.</p>
            </>
          )}

          <div className="wizard-nav">
            <button type="button" className="nav-btn ghost" disabled={step === 1} onClick={() => setStep((s) => s - 1)}>
              <ChevronLeft size={16} /> Back
            </button>
            {step < 4 && (
              <button
                type="button"
                className="nav-btn primary"
                disabled={!canContinue()}
                onClick={() => setStep((s) => s + 1)}
              >
                Continue <ChevronRight size={16} />
              </button>
            )}
          </div>
        </section>

        <aside className="preview-panel">
          <QrPreview value={qrValue} design={design} />
        </aside>
      </main>
    </div>
  );
}