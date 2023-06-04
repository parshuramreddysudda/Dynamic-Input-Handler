import React, { useState } from 'react';
import Input from '../Components/Input/Input';
import UserLayoutConfig from './Services/UserLayout.config.json';
import UserFormConfig from './Services/UserFormConfig';
import InputHelper from '../Components/Input/InputHelper';

const UserLayout = () => {
    const [movieConfig, setMovieConfig] = useState(UserFormConfig);
    const [formValidation, setFormValidation] = useState({});
    const [formValid, setFormValid] = useState(false);
    const [showDependentLayout, setShowDependentLayout] = useState(false);

    const handleCheckboxChange = () => {
        setShowDependentLayout((prevState) => !prevState);
    };

    const onChange = (value, id) => {
        inputChangeHandler(value, id);
    };

    const inputChangeHandler = (value, id) => {
        let updatedMovieConfig = { ...movieConfig };
        let updatedFormValidation = { ...formValidation };

        if (id) {
            let element = updatedMovieConfig[id];
            element.value = value;
            InputHelper.validate(element);
            updatedMovieConfig[id] = element;
            updatedFormValidation[id] = element.valid;
            setMovieConfig(updatedMovieConfig);
            setFormValidation(updatedFormValidation);
            setFormValid(Object.values(updatedFormValidation).every((valid) => valid));
        }
    };

    const renderField = (fieldId) => {
        const fieldConfig = movieConfig[fieldId];
        const idConfig = fieldConfig?.id;

        if (fieldConfig && idConfig) {
            return (
                <div key={idConfig} className="mb-4">
                    <Input
                        id={idConfig}
                        type={fieldConfig.type}
                        label={fieldConfig.label}
                        placeholder={fieldConfig.placeholder}
                        value={fieldConfig.value}
                        valid={fieldConfig.valid}
                        validationText={fieldConfig.validationText}
                        options={fieldConfig.options}
                        onChange={(value) => onChange(value, idConfig)}
                    />
                </div>
            );
        }

        return null;
    };

    const renderSubHeader = (subHeader) => {
        return (
            <div key={subHeader.header}>
                <h3 className="mb-2 text-lg font-semibold">{subHeader.header}</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {subHeader.fields.map((fieldId) => renderField(fieldId))}
                </div>
            </div>
        );
    };

    const renderDependentLayout = (dependentFields) => {
        return (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {dependentFields.map((fieldId) => renderField(fieldId))}
            </div>
        );
    };

    const renderButtons = (buttons, hasDependentLayout) => {
        return (
            <div className="mt-4">
                {Object.entries(buttons).map(([buttonType, buttonLabels]) => {
                    const shouldRenderButton = hasDependentLayout || buttonType !== 'dependent';
                    const isFormValid = Object.values(formValidation).every((valid) => valid);

                    return shouldRenderButton && isFormValid ? (
                        <React.Fragment key={buttonType}>
                            {buttonLabels.map((buttonLabel) => (
                                <button
                                    key={buttonLabel}
                                    className="px-4 py-2 mr-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                                >
                                    {buttonLabel}
                                </button>
                            ))}
                        </React.Fragment>
                    ) : null;
                })}
            </div>
        );
    };

    const renderSection = (section) => {
        const hasDependentLayout = section.dependent && showDependentLayout;
        const dependentFields = hasDependentLayout ? section.dependent.fields : [];

        return (
            <div key={section.header} className="mb-8">
                <h2 className="mb-4 text-xl font-bold">{section.header}</h2>
                {section.subHeaders.map(renderSubHeader)}
                {section.dependent && (
                    <div className="mb-4">
                        <Input
                            id="showDependentLayout"
                            type="checkbox"
                            label="Show Dependent Layout"
                            checked={showDependentLayout}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                )}
                {hasDependentLayout && renderDependentLayout(dependentFields)}
                {section.buttons && renderButtons(section.buttons, hasDependentLayout)}
            </div>
        );
    };

    return <div>{UserLayoutConfig.sections.map(renderSection)}</div>;
};

export default UserLayout;
