export default function ContentForm({ type, formData = {}, onChange }) {
  if (!type) return null;

  const handleFieldChange = (fieldName, value) => {
    onChange((previous) => ({
      ...previous,
      [fieldName]: value,
    }));
  };

  return (
    <div className="content-form">
      <h3>{type.label} details</h3>

      {type.fields.map((field) => {
        const fieldValue = formData[field.name] ?? "";

        if (field.type === "checkbox") {
          return (
            <label key={field.name} className="form-field checkbox-field">
              <input
                type="checkbox"
                checked={Boolean(fieldValue)}
                onChange={(event) =>
                  handleFieldChange(field.name, event.target.checked)
                }
              />
              <span>{field.label}</span>
            </label>
          );
        }

        if (field.type === "select") {
          return (
            <label key={field.name} className="form-field">
              {field.label}
              <select
                value={fieldValue}
                onChange={(event) =>
                  handleFieldChange(field.name, event.target.value)
                }
                required={field.required}
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          );
        }

        if (field.type === "textarea") {
          return (
            <label key={field.name} className="form-field">
              {field.label}
              <textarea
                value={fieldValue}
                placeholder={field.placeholder}
                required={field.required}
                rows={4}
                onChange={(event) =>
                  handleFieldChange(field.name, event.target.value)
                }
              />
            </label>
          );
        }

        return (
          <label key={field.name} className="form-field">
            {field.label}
            <input
              type={field.type}
              value={fieldValue}
              placeholder={field.placeholder}
              required={field.required}
              onChange={(event) =>
                handleFieldChange(field.name, event.target.value)
              }
            />
          </label>
        );
      })}
    </div>
  );
}
