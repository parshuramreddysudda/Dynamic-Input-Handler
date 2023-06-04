import React from 'react';

const Input = props => {
    const { id, key, type, placeholder, value, onChange, label, valid, validationText, hideLabel, options } = props;

    let element = <></>;
    let inputClassName = "input bg-white border rounded-md py-2 px-3 focus:outline-none transition duration-300";

    if (valid === false) {
        inputClassName += " border-red-500 focus:border-red-500";
    } else if (valid === true) {
        inputClassName += " focus:border-blue-500";
    }



    if (type === 'text' || type === 'number' || type === 'tel' || type === 'email') {
        element = (
            <input
                id={`input-${id}`}
                className={inputClassName}
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
                className={inputClassName}
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
        <div className="p-4 bg-white rounded-lg ">
            {!hideLabel && <label htmlFor={`input-${id}`} className="block mb-2 text-lg font-medium">{label}</label>}
            {element}
            {!valid && <span className="mt-2 text-sm text-red-500">{validationText}</span>}
        </div>
    );
};

export default Input;
