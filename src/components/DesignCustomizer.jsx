import { Upload } from 'lucide-react';

export default function DesignCustomizer({ design, onChange }) {
  const update = (key, value) => onChange({ ...design, [key]: value });

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      update('logo', null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => update('logo', reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="design-customizer">
      <h3>Design your QR code</h3>

      <label className="form-field">
        Foreground color
        <input type="color" value={design.fgColor} onChange={(e) => update('fgColor', e.target.value)} />
      </label>

      <label className="form-field">
        Background color
        <input type="color" value={design.bgColor} onChange={(e) => update('bgColor', e.target.value)} />
      </label>

      <label className="form-field">
        Size ({design.size}px)
        <input
          type="range"
          min="150"
          max="400"
          value={design.size}
          onChange={(e) => update('size', Number(e.target.value))}
        />
      </label>

      <label className="form-field">
        Error correction
        <select value={design.level} onChange={(e) => update('level', e.target.value)}>
          <option value="L">Low</option>
          <option value="M">Medium</option>
          <option value="Q">Quartile</option>
          <option value="H">High (recommended with a logo)</option>
        </select>
      </label>

      <label className="form-field">
        Logo (optional)
        <span className="file-input-wrap">
          <Upload size={16} strokeWidth={1.75} />
          <input type="file" accept="image/*" onChange={handleLogoUpload} />
        </span>
      </label>
    </div>
  );
}