interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      <span className="button-text">{children}</span>
      <style jsx>{`
          .button {
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            display: flex;
            width: 100%;
            gap: 6px;
            overflow: hidden;
            padding: 10px var(--spacing-xl, 16px);
            cursor: pointer;
            border: none;
          }
          .button.primary {
            background-color: #2494B6;
            border: 2px solid var(--Gradient-skeuemorphic-gradient-border, rgba(255, 255, 255, 0.12));
            box-shadow: 0px 0px 0px 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(16, 24, 40, 0.18)) inset, 0px -2px 0px 0px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(16, 24, 40, 0.05)) inset, 0px 1px 2px 0px var(--Colors-Effects-Shadows-shadow-xs, rgba(16, 24, 40, 0.05));
          }
          .button-text {
            color: #FFF;
            font-family: Inter;
            font-size: 16px;
            line-height: 24px;
            align-self: stretch;
            margin: auto 0;
            padding: 0 var(--spacing-xxs, 2px);
          }
        `}</style>
    </button>
  );
}