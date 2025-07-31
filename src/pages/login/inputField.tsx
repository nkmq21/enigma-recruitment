interface InputFieldProps {
    label: string;
    placeholder: string;
    type?: string;
}

export function InputField({ label, placeholder, type = "text" }: InputFieldProps) {
    return (
        <div className="input-field">
            <div className="input-wrapper">
                <label className="label">{label}</label>
                <div className="input-container">
                    <input type={type} placeholder={placeholder} className="input" />
                </div>
            </div>
            <style jsx>{`
          .input-field {
            width: 100%;
            gap: 6px;
          }
          .input-wrapper {
            align-items: stretch;
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: start;
            gap: 6px;
          }
          .label {
            color: #344054;
            font-family: Inter;
            font-size: 14px;
            line-height: 1;
            align-self: start;
            gap: 2px;
            font-weight: 500;
            white-space: nowrap;
          }
          .input-container {
            align-items: center;
            border-radius: 8px;
            border: 1px solid var(--Colors-Border-border-primary, #D0D5DD);
            box-shadow: 0px 1px 2px 0px var(--Colors-Effects-Shadows-shadow-xs, rgba(16, 24, 40, 0.05));
            display: flex;
            margin-top: 6px;
            width: 100%;
            padding: 10px 14px;
            gap: 8px;
            background-color: #FFF;
          }
          .input {
            color: #667085;
            font-family: Inter;
            font-size: 16px;
            line-height: 24px;
            align-self: stretch;
            flex: 1;
            flex-shrink: 1;
            flex-basis: 0%;
            min-width: 240px;
            margin: auto 0;
            width: 100%;
            border: none;
            outline: none;
            background: transparent;
          }
          @media (max-width: 991px) {
            .label {
              white-space: initial;
            }
          }
        `}</style>
        </div>
    );
}