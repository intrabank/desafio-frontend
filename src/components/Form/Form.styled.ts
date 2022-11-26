import { styled } from '../../styles'

/* Form General Styles */

export const FormContainer = styled('div', {
    minWidth: '515px',
    width: '706px',
    background: '$cardBackground',
    borderRadius: '8px',
    padding: '54px 77px',
    border: '2px solid #2A2A2A',

    // Style for 768px width
    '@bp1': {
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: 'none'
    }
})

export const FormHeader = styled('header', {
    marginBottom: '32px',
    fontFamily: '$default',

    h1: {
        fontWeight: 600,
        fontSize: '25px',
        textAlign: 'center',
    },

    p: {
        fontWeight: 300,
        fontSize: '14px',
        textAlign: 'center',
    }
})

export const FormContent = styled('form', {
    'input[type="date"]::-webkit-inner-spin-button, input[type="date"]::-webkit-calendar-picker-indicator': {
        display: 'none',
        '-webkit-appearance': 'none',
    }, 
    

    'textarea': {
        minHeight: '96px !important',
        maxHeight: '96px !important',
        resize: 'none',
        marginTop: '19px',
    },  

    '.form-control': {
        width: '100%',
        height: '56px',
        padding: '12px 18px',
        background: '$inputBackground',
        border: '1px solid #414141',
        borderRadius: '8px',
        marginBottom: '8px',
        color: '$title !important',
        outline: 'none',
        fontFamily: '$default',
        fontSize: '14px',
        '&:last-child': {
            marginBottom: '0px',
        },
    },

    '.form-control:focus': {
        boxShadow: 'none',
        border: 'solid 1px #FFF',
        background: '$inputBackground',
    },

    '.form-label': {
        color: '#888888',
        fontSize: '14px',
        fontFamily: '$default',
    },

    '.form-floating > .form-control-plaintext ~ label, .form-floating > .form-control:focus ~ label, .form-floating > .form-control:not(:placeholder-shown) ~ label, .form-floating > .form-select ~ label': {
        color: '$title !important',
        opacity: '1 !important',
    },

    '.input-wrapper': {
        position: 'relative',
        marginBottom: '16px',
    },

    '.input-wrapper .error-message': {
        color: '#FA4D56',
        fontFamily: '$default',
    },

    '.eye-icon': {
        zIndex: 9999,
        position: 'absolute',
        top: '20%',
        right: '15px',
    },

    '.wrong-field': {
        border: '1px solid #FA4D56',
    },

    '.checkbox-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '45px',
    },

    '.checkbox-wrapper input': {
        display: 'none'
    },

    '.checkbox-wrapper label': {
        fontWeight: 300,
    },

    '.checkbox-wrapper input + label:before': {
        content: '',
        width: '20px',
        height: '20px',
        borderRadius: '4px',
        background: 'transparent',
        border: '2px solid #B8B8B8',
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: '11px',
        marginBottom: '4px',
        cursor: 'pointer',
    },

    '.checkbox-wrapper input:checked + label:before': {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 1.5625L4.125 8.4375L1 5.3125' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
        backgroundColor: '$primaryColor',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '2px solid $primaryColor',
    },
})


/* Selector General Styles */

export const SelectorContainer = styled('div', {
    width: '100%',
    background: '$inputBackground',
    border: '1px solid #414141',
    borderRadius: '8px',
    marginBottom: '16px',
    color: '$formLabel',
    fontFamily: '$default',
    fontSize: '14px',

    '.selector-native': {
        width: '100%',
        padding: '1rem .75rem',
        paddingBottom: '0px',
        heigth: '100%',
    },

    '.selector-menu': {
        width: '90%',
        padding: '19px 16px',
        display: 'none',
    },

    '.divider': {
        width: '90%',
        height: '1px',
        background: '#414141',
        margin: '0 auto',
        marginTop: '19px',
        display: 'none',
    },

    '.selector-option': {
        width: '100%',
        color: '$formLabel',
        marginBottom: '22px',

        '&:last-child': {
            marginBottom: '0px',
        }
    },

    '.activated': {
        display: 'block',
    }
})

/* Country Dropdown Style */

export const DropdownContainer = styled('div', {
    width: '100%',
    marginBottom: '8px',
})

export const DropdownHeader = styled('div', {
    fontSize: '14px',
    color: '$formLabel',
    background: '$inputBackground',
    borderRadius: '8px',
    paddingTop: '19px',
    paddingBottom: '19px',
    paddingLeft: '16px',
    paddingRight: '20.5px',
    fontFamily: '$default',
    border: '1px solid #414141',
    marginBottom: '-5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    'p': {
        marginBottom: 0,
    }
})

export const DropdownListContainer = styled('div', {
    marginBottom: '20px',
})

export const DropdownList = styled('div', {
    margin: 0,
    padding: '20px 16px',
    background: '$inputBackground',
    color: '#B8B8B8',
    fontSize: '14px',
    fontWeight: 400,
    borderLeft: '1px solid #414141',
    borderRight: '1px solid #414141',
    borderBottom: '1px solid #414141',

    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    '&:first-child': {
        paddingTop: '0.8em',
    }

})

export const ListItem = styled('div', {
    padding: '8px',
    listStyle: 'none',
    marginBottom: '0.8em',
    cursor: 'default',
})

/* Button Style */

export const SubmitButton = styled('button', {
    width: '100%',
    height: '56px',
    borderRadius: '8px',
    background: '#2A2A2A',
    color: '#888888',
    border: 'none',
    fontFamily: '$default',
    fontWeight: 500,

    '&.activated-button': {
        background: '$primaryColor',
        color: '#000',
    },
})

