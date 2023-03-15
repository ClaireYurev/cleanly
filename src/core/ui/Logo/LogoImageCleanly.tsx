const LogoImage: React.FCC<{
  className?: string;
}> = ({ className }) => {
  return (  
    <svg
      className={`${className ?? 'w-[95px] sm:w-[105px]'}`}
      id="eRsKpYDLFqv1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 432 140"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
    >
        <defs>
          <linearGradient
            id="eRsKpYDLFqv2-fill"
            x1="0"
            y1="0.5"
            x2="1"
            y2="0.5"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
          <stop
            id="eRsKpYDLFqv2-fill-0"
            offset="0%"
            stop-color="#0E73CC"
          />
          <stop
            id="eRsKpYDLFqv2-fill-1"
            offset="0%"
            stop-color="#0E73CC"
          />
          <stop
            id="eRsKpYDLFqv2-fill-2"
            offset="49.6064%"
            stop-color="#00B7FF"
          />
          <stop
            id="eRsKpYDLFqv2-fill-3"
            offset="100%"
            stop-color="#8E79DE"
          />
          </linearGradient>
        </defs>
          <text
            dx="0"
            dy="0"
            font-family="&quot;Lato&quot;"
            font-size="140"
            font-weight="400"
            transform="translate(-3.020538 108.529258)"
            fill="url(#eRsKpYDLFqv2-fill)"
            stroke-width="0"
          >
            <tspan
              y="0"
              font-weight="400"
              stroke-width="0"
            >
              cleanly
            </tspan>
          </text>
    </svg>
  );
};

export default LogoImage;
