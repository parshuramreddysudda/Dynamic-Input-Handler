import React, { useState } from 'react';
import Input from '../Components/Input/Input';
import UserLayoutConfig from './Services/UserLayout.config.json';
import UserFormConfig from './Services/UserFormConfig';

const UserLayout = () => {
    const [showDependentLayout, setShowDependentLayout] = useState(false);

    const handleCheckboxChange = () => {
        setShowDependentLayout(!showDependentLayout);
    };

    const onChange = (value) => {
        // Handle onChange event
    };

    const renderField = (fieldId) => {
        const fieldConfig = UserFormConfig[fieldId];
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
                        onChange={onChange}
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

    const renderSection = (section) => {
        return (
            <div key={section.header} className="mb-8">
                <h2 className="mb-4 text-xl font-bold">{section.header}</h2>
                {section.subHeaders.map((subHeader) => renderSubHeader(subHeader))}
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
                {section.dependent && showDependentLayout && (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {section.dependent['Section 1'].map((fieldId) => renderField(fieldId))}
                    </div>
                )}
                {section.buttons && (
                    <div className="mt-4">
                        <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                            {section.buttons.button1}
                        </button>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div>
            {UserLayoutConfig.sections.map((section) => renderSection(section))}
        </div>
    );
};

export default UserLayout;
