import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    :focus {
            outline: none;
            box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']}
    }

    body {
        background-color: ${(props) => props.theme['gray-800']};
        color: ${(props) => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }

    .spin {
    animation: spin 12s linear infinite;
    }

    @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
    }
`
