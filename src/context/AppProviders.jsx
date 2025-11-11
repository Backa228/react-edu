import { UserProvider } from './userContext.jsx'
import { ThemeProvider } from './themeContext.jsx'

export const AppProviders = ({ children }) => {
    return (
        <UseProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </UseProvider>
    )
}