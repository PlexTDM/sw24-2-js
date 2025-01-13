import { createContext, useState, useContext } from "react";
import PropTypes from 'prop-types';

const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
    ThemeProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);