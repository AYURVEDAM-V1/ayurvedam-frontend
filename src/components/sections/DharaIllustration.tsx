/** The client's illustration of a dhara pot, with oil drops that fall in a loop. */
export function DharaIllustration() {
  return (
    <svg
      viewBox="0 0 320 300"
      role="img"
      aria-label="Illustration of a dhara pot streaming warm oil"
      className="block h-auto w-full"
    >
      <path
        d="M110 10 L150 70 M210 10 L170 70"
        stroke="var(--band-fg)"
        strokeOpacity=".35"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M120 70 H200 C200 110 186 128 160 132 C134 128 120 110 120 70Z"
        fill="var(--copper)"
      />
      <path
        d="M120 70 H200"
        stroke="var(--oil)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M134 86 C140 104 150 114 160 116"
        stroke="var(--band-fg)"
        strokeOpacity=".3"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="158.5" y="132" width="3" height="30" rx="1.5" fill="var(--oil)" />
      <circle className="animate-fall" cx="160" cy="166" r="3.4" fill="var(--oil)" />
      <circle
        className="animate-fall [animation-delay:0.9s]"
        cx="160"
        cy="166"
        r="3.4"
        fill="var(--oil)"
      />
      <circle
        className="animate-fall [animation-delay:1.7s]"
        cx="160"
        cy="166"
        r="3.4"
        fill="var(--oil)"
      />
      <ellipse
        cx="160"
        cy="288"
        rx="120"
        ry="10"
        fill="var(--band-fg)"
        fillOpacity=".06"
      />
      <path
        d="M60 290 C80 250 240 250 260 290"
        stroke="var(--band-fg)"
        strokeOpacity=".5"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M100 290 C112 268 208 268 220 290"
        stroke="var(--oil)"
        strokeOpacity=".6"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M30 120 C50 90 80 92 90 100 C76 120 52 128 30 120Z"
        fill="var(--band-fg)"
        fillOpacity=".14"
      />
      <path
        d="M290 170 C270 140 240 142 230 150 C244 170 268 178 290 170Z"
        fill="var(--band-fg)"
        fillOpacity=".14"
      />
    </svg>
  );
}
