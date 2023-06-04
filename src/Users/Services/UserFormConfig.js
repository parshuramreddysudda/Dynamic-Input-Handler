let UserFormConfig = {
    userName: {
        id: 'userName',
        key: 'username',
        'data-test-id': 'usernameInput',
        type: 'text',
        label: 'Username',
        placeholder: 'Enter username',
        value: '',
        max: 20,
        min: 5,
        valid: undefined,
        validationText: '',
        validations: [
            {
                type: 'required',
                message: 'This is a required field'
            },
            {
                type: 'text',
                message: ""
            }
        ]
    },
    userEmail: {
        id: 'userEmail',
        key: 'userEmail',
        'data-test-id': 'emailInput',
        type: 'email',
        label: 'Email',
        placeholder: 'Enter email address',
        value: '',
        valid: undefined,
        validationText: '',
        validations: [
            {
                type: 'required',
                message: 'This is a required field'
            },
            {
                type: 'email',
                message: 'Please enter a valid email address'
            }
        ]
    },
    userPhone: {
        id: 'userPhone',
        key: 'userPhone',
        'data-test-id': 'phoneInput',
        type: 'tel',
        label: 'Phone Number',
        placeholder: 'Enter phone number',
        value: '',
        valid: undefined,
        validationText: '',
        validations: [
            {
                type: 'required',
                message: 'This is a required field'
            },
            {
                type: 'tel',
                message: 'Please enter a 10 digit valid phone number'
            }
        ]
    },
    userGender: {
        id: 'userGender',
        key: 'userGender',
        'data-test-id': 'genderSelect',
        type: 'select',
        label: 'Gender',
        placeholder: 'Select gender',
        value: '',
        valid: undefined,
        validationText: '',
        options: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' }
        ],
        validations: [
            {
                type: 'required',
                message: 'This is a required field'
            }
        ]
    },
    userIPv4: {
        id: 'userIPv4',
        key: 'userIPv4',
        'data-test-id': 'ipv4Input',
        type: 'text',
        label: 'IPv4 Address',
        placeholder: 'Enter IPv4 address',
        value: '',
        valid: undefined,
        validationText: '',
        validations: [
            {
                type: 'required',
                message: 'This is a required field'
            },
            {
                type: 'ipv4',
                message: 'Please enter a valid IPv4 address'
            }
        ]
    },
    userIPv6: {
        id: 'userIPv6',
        key: 'userIPv6',
        'data-test-id': 'ipv6Input',
        type: 'text',
        label: 'IPv6 Address',
        placeholder: 'Enter IPv6 address',
        value: '',
        valid: undefined,
        validationText: '',
        validations: [
            {
                type: 'required',
                message: 'This is a required field'
            },
            {
                type: 'ipv6',
                message: 'Please enter a valid IPv6 address'
            }
        ]
    },
    // Add other fields here
};

export default UserFormConfig; 