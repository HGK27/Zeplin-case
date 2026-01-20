export default function BookmarkIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fill="currentColor"
        d="M24.727 0h-17.455c-4.010 0-7.273 3.263-7.273 7.273v17.455c0 4.010 3.263 7.273 7.273 7.273h17.455c4.010 0 7.273-3.263 7.273-7.273v-17.455c0-4.010-3.263-7.273-7.273-7.273zM2.909 7.273c0-2.406 1.957-4.364 4.364-4.364h17.455c2.406 0 4.363 1.957 4.363 4.364v1.455h-26.182v-1.455zM7.273 29.091c-2.406 0-4.364-1.957-4.364-4.363v-13.091h5.818v17.454h-1.455zM24.727 29.091h-13.091v-17.454h17.454v13.091c0 2.406-1.957 4.363-4.363 4.363z"
      ></path>
    </svg>
  );
}
