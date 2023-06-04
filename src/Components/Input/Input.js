import React from 'react';

const Input = props => {
    const { id, key, type, placeholder, value, onChange, label, valid, validationText, hideLabel, options } = props;

    let element = <></>;

    if (type === 'text' || type === 'number' || type === 'tel' || type === 'email') {
        element = (
            <input
                id={`input-${id}`}
                className="input"
                key={`input-${key}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={event => onChange(event.target.value)}
            />
        );
    } else if (type === 'select') {
        element = (
            <select
                id={`input-${id}`}
                className="input"
                key={`input-${key}`}
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                {options && options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    } else if (type === 'checkbox') {
        element = (
            <input
                id={`input-${id}`}
                className="input"
                key={`input-${key}`}
                type="checkbox"
                checked={value}
                onChange={event => onChange(event.target.checked)}
            />
        );
    }

    return (
        <div className="input-container">
            {!hideLabel && <span>{label}</span>}
            {element}
            {!valid && <span className="input-error-message">{validationText}</span>}
        </div>
    );
};

export default Input;
