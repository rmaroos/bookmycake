import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'dark' | 'outline-light';

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  'inline-flex items-center justify-center gap-2 px-7 py-3 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ease-elegant';

const variants: Record<Variant, string> = {
  primary: 'bg-gold text-white hover:bg-gold-dark',
  secondary: 'border border-ink/20 text-ink hover:border-gold hover:text-gold',
  dark: 'bg-ink text-white hover:bg-ink/85',
  'outline-light': 'border border-white/70 text-white hover:bg-white hover:text-ink',
};

export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  icon,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
