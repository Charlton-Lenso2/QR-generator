import { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download } from 'lucide-react';

export default function QrPreview({ value, design }) {
  const wrapperRef = useRef(null);

  const handleDownload = () => {
    const canvas = wrapperRef.current?.querySelector('canvas');
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qr-code.png';
    link.click();
  };

  return (
    <div className="qr-preview">
      <div className="proof-card">
        <span className="proof-label">Live preview</span>
        <div className="proof-body">
          {value ? (
            <div ref={wrapperRef} className="qr-canvas-wrapper">
              <QRCodeCanvas
                value={value}
                size={design.size}
                fgColor={design.fgColor}
                bgColor={design.bgColor}
                level={design.level}
                includeMargin
                imageSettings={
                  design.logo
                    ? { src: design.logo, height: design.size * 0.2, width: design.size * 0.2, excavate: true }
                    : undefined
                }
              />
            </div>
          ) : (
            <p className="qr-placeholder">Fill in the details to see your QR code</p>
          )}
        </div>
        {value && <code className="proof-data">{value.replace(/\n/g, '  ')}</code>}
      </div>
      <button type="button" className="download-btn" onClick={handleDownload} disabled={!value}>
        <Download size={16} strokeWidth={1.75} />
        Download PNG
      </button>
    </div>
  );
}