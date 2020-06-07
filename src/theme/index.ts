import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    typography: {
        h5: {
            fontSize: '1.25rem',
        },
        h6: {
            fontSize: '1rem',
        },
    },
    palette: {
        primary: {
            main: '#1ba94c',
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
        MuiAppBar: {
            root: {
                padding: 0,
            },
            colorPrimary: {
                backgroundColor: '#39424e',
                color: 'white',
            },
        },
    },
})

export default theme
