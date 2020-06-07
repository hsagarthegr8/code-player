import { createMuiTheme } from '@material-ui/core'
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
    themeName: 'Code Player',
    palette: {
        primary: {
            main: green['A400'],
        },
    },
    props: {
        MuiTextField: {
            size: 'small',
            variant: 'outlined',
        },
    },
    overrides: {
        MuiPaper: {
            root: {
                padding: 30,
            },
        },
        MuiTextField: {
            root: {
                marginBottom: 15,
            },
        },
        MuiButton: {
            containedPrimary: {
                color: 'white',
            },
        },

        MuiInputAdornment: {
            root: {
                height: '2.5em',
                width: '3em',
                maxHeight: '2.5em',
                backgroundColor: '#f3f3f3',
            },
        },

        MuiOutlinedInput: {
            adornedStart: {
                paddingLeft: 0,
            },
        },

        MuiSvgIcon: {
            root: {
                margin: 'auto',
            },
        },
    },
})

export default theme
