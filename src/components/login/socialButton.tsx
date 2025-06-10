interface SocialButtonProps {
    icon: string;
    text: string;
    onClick?: () => void;
}

export function SocialButton({ icon, text, onClick }: SocialButtonProps) {
    return (
        <button className="social-button" onClick={onClick}>
            <img src={icon} className="icon" alt="" />
            <span className="text">{text}</span>
            <style jsx>{`
          .social-button {
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            border: 1px solid var(--Colors-Border-border-primary, #D0D5DD);
            box-shadow: 0px 0px 0px 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(16, 24, 40, 0.18)) inset, 0px -2px 0px 0px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(16, 24, 40, 0.05)) inset, 0px 1px 2px 0px var(--Colors-Effects-Shadows-shadow-xs, rgba(16, 24, 40, 0.05));
            display: flex;
            width: 100%;
            gap: 12px;
            overflow: hidden;
            padding: 10px var(--spacing-xl, 16px);
            background-color: #FFF;
            cursor: pointer;
          }
          .icon {
            aspect-ratio: 1;
            object-fit: contain;
            object-position: center;
            width: 24px;
            align-self: stretch;
            margin: auto 0;
            flex-shrink: 0;
          }
          .text {
            color: #344054;
            font-family: Inter;
            font-size: 16px;
            line-height: 24px;
            align-self: stretch;
            margin: auto 0;
          }
        `}</style>
        </button>
    );
}