interface BlobProps {
  className?: string;
  color?: string;
}

export default function Blob({
  className,
  color = "fill-brand-body/20",
}: BlobProps) {
  return (
    <div
      className={`absolute -z-10 pointer-events-none select-none ${className}`}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          className={color}
          d="M32.7,-51.1C45.8,-49,62.4,-47.3,68.9,-38.8C75.4,-30.4,71.9,-15.2,67.5,-2.6C63,10.1,57.7,20.2,54.5,34.3C51.3,48.5,50.2,66.7,41.4,76.4C32.7,86.1,16.4,87.3,2.2,83.5C-12,79.8,-24,71.1,-32.5,61.2C-40.9,51.4,-45.8,40.3,-52.5,29.9C-59.2,19.5,-67.7,9.7,-69.5,-1C-71.3,-11.8,-66.4,-23.6,-58.2,-31.5C-50,-39.4,-38.6,-43.3,-28.4,-47.1C-18.2,-50.9,-9.1,-54.6,0.3,-55.2C9.8,-55.8,19.5,-53.3,32.7,-51.1Z"
          transform="translate(100 100)"
        />
      </svg>
      ;
    </div>
  );
}
