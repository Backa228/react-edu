import { UserProvider } from './userContext.jsx'
import { ThemeProvider } from './themeContext.jsx'

export const AppProviders = ({ children }) => {
    return (
        <UserProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </UserProvider>
    )
}