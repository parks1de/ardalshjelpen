interface LogoProps {
  size?: number
  color?: string
  className?: string
}

export function LogoMark({ size = 36, color = '#2D3748', className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size * 0.82}
      viewBox="0 0 44 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <polygon points="2,34 13,10 24,34" fill={color} opacity="0.35" />
      <polygon points="20,34 31,12 42,34" fill={color} opacity="0.55" />
      <polygon points="6,34 22,2 38,34" fill={color} />
    </svg>
  )
}

export function LogoFull({ height = 36, className = '' }: { height?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark size={height} />
      <span
        style={{ fontSize: height * 0.47, letterSpacing: '0.12em', lineHeight: 1 }}
        className="font-bold text-dark uppercase"
      >
        Årdalshjelpen
      </span>
    </span>
  )
}

export function MountainHero({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon points="40,360 200,80 360,360"   fill="#9ECFCA" opacity="0.18" />
      <polygon points="0,360 140,140 260,360"   fill="#9ECFCA" opacity="0.30" />
      <polygon points="220,360 360,100 480,360" fill="#9ECFCA" opacity="0.30" />
      <polygon points="80,380 240,20 400,380"   fill="#9ECFCA" opacity="0.70" />
      <polygon points="0,380 160,200 300,380"   fill="#9ECFCA" opacity="0.55" />
      <polygon points="180,380 340,180 480,380" fill="#9ECFCA" opacity="0.55" />
      <polygon points="210,80 240,20 270,80"    fill="white"   opacity="0.50" />
    </svg>
  )
}
