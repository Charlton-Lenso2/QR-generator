export default function TypeSelector({ types, selectedTypeId, onSelect }) {
  return (
    <div className="type-grid">
      {types.map((type) => {
        const Icon = type.icon;
        const selected = selectedTypeId === type.id;
        return (
          <button
            key={type.id}
            type="button"
            className={`type-tile ${selected ? 'selected' : ''}`}
            onClick={() => onSelect(type.id)}
          >
            <span className="type-icon">
              <Icon size={20} strokeWidth={1.75} />
            </span>
            <span className="type-label">{type.label}</span>
            <span className="type-description">{type.description}</span>
          </button>
        );
      })}
    </div>
  );
}