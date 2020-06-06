import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
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
    },
})

export default theme
