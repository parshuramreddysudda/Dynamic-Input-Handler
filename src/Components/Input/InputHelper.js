const InputHelper = {
    validate,
    isValidForm
};

function validate(element) {
    for (const validation of element.validations) {
        switch (validation.type) {
            case 'required':
                if (element.value === '') {
                    element.validationText = validation.message;
                    element.valid = false;
                    return;
                }
                break;
            case 'validDigitRange':
                const value = parseInt(element.value);
                if (isNaN(value) || value < element.min || value > element.max) {
                    element.validationText = validation.message;
                    element.valid = false;
                    return;
                }
                break;
            case 'validDuration':
                if (element.value !== '') {
                    const lastValue = element.value.slice(-1);
                    const isValid = lastValue === 'm' || lastValue === 'h';
                    const durationValue = parseInt(element.value.slice(0, -1));
                    if (!isValid || isNaN(durationValue)) {
                        element.validationText = validation.message;
                        element.valid = false;
                        return;
                    }
                }
                break;
            default:
                break;
        }
    }

    element.validationText = '';
    element.valid = true;
}

function isValidForm(elementConfig) {
    return Object.values(elementConfig)
        .every(el => el.valid);
}

export default InputHelper;
