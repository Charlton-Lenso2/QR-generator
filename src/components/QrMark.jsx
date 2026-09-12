export default function QrMark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="4" y="4" width="2" height="2" fill="currentColor" />
      <rect x="15" y="1" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="18" y="4" width="2" height="2" fill="currentColor" />
      <rect x="1" y="15" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="4" y="18" width="2" height="2" fill="currentColor" />
      <rect x="15" y="16" width="3" height="3" fill="currentColor" />
      <rect x="20" y="16" width="3" height="3" fill="currentColor" />
      <rect x="15" y="21" width="3" height="3" fill="currentColor" />
      <rect x="20" y="20" width="2" height="2" fill="currentColor" />
    </svg>
  );
}