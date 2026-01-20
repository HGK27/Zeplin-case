export default function MenuIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M3.2 32c-1.769 0-3.2-1.431-3.2-3.2s1.431-3.2 3.2-3.2h6.4c1.769 0 3.2 1.431 3.2 3.2s-1.431 3.2-3.2 3.2h-6.4zM22.4 16c0 1.769-1.431 3.2-3.2 3.2h-16c-1.769 0-3.2-1.431-3.2-3.2s1.431-3.2 3.2-3.2h16c1.769 0 3.2 1.431 3.2 3.2zM28.8 0c1.769 0 3.2 1.431 3.2 3.2s-1.431 3.2-3.2 3.2h-25.6c-1.769 0-3.2-1.431-3.2-3.2s1.431-3.2 3.2-3.2h25.6z" />
    </svg>
  );
}