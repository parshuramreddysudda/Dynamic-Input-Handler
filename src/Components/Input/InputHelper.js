const InputHelper = {
    validate,
    isValidForm
};

function validate(element) {
    let isValid = true;

    // Check each validation for the element
    for (const validation of element.validations) {
        switch (validation.type) {
            case 'required':
                if (validation.type === 'required' && element.value === '') {
                    element.validationText = validation.message;
                    element.valid = false;
                    return;
                }
                break;
            case 'email':
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(element.value)) {
                    element.validationText = validation.message;
                    element.valid = false;
                    isValid = false;
                }
                break;
            case 'text':
                const valueLength = element.value.length;
                if (validation.min && valueLength < validation.min) {
                    element.validationText = `Minimum ${validation.min} characters required.`;
                    element.valid = false;
                    isValid = false;
                } else if (validation.max && valueLength > validation.max) {
                    element.validationText = `Maximum ${validation.max} characters allowed.`;
                    element.valid = false;
                    isValid = false;
                }
                break;
            case 'tel':
                if (isNaN(element.value)) {
                    element.validationText = 'Please enter a valid numeric phone number.';
                    element.valid = false;
                    isValid = false;
                } else {
                    const phonePattern = /^[0-9]{10}$/;
                    if (!phonePattern.test(element.value)) {
                        element.validationText = validation.message;
                        element.valid = false;
                        isValid = false;
                    }
                }
                break;
            case 'ipv4':
                const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
                if (!ipv4Pattern.test(element.value)) {
                    element.validationText = validation.message;
                    element.valid = false;
                    isValid = false;
                }
                break;
            case 'ipv6':
                const ipv6Pattern = /^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$/;
                if (!ipv6Pattern.test(element.value)) {
                    element.validationText = validation.message;
                    element.valid = false;
                    isValid = false;
                }
                break;
            // Add more validation cases as needed
            default:
                break;
        }

        // If any validation failed, stop checking further validations
        if (!isValid) {
            break;
        }
    }

    // Clear validation text and set element as valid if all validations pass
    if (isValid) {
        element.validationText = '';
        element.valid = true;
    }
}

function isValidForm(elementConfig) {
    return Object.values(elementConfig).every(el => el.valid);
}

export default InputHelper;
