import { Theme } from '../models';

export const colors = {
    light: '#ffffff',
    dark: '#1A1A1D',
    darkTheme: '#1A1A1D',
    lightTheme: '#FF6600',
    subtitleColor: '#FF6600',
    grid: '#0047AB',
    lineColor: '#F3F3F3',
}

export let isDarkMode = true;

export const fontFamilies = {
    headerFont: "Open Sans",
    bodyFont: "Anonymous Pro"
}

export const fontSizes = {
    headerSize: '1.5rem',
    bodySize: '1.5rem'
}

export const parseCustomTheme = (customTheme: Theme) => {
    if (!customTheme.isDarkMode) {
        parseLightMode(customTheme);
    } else {
        parseDarkMode(customTheme);
    }
    
    colors.subtitleColor = customTheme.subtitleColor || colors.subtitleColor;
    colors.lineColor = customTheme.lineColor || colors.lineColor;
    fontFamilies.bodyFont = customTheme.bodyFont || fontFamilies.bodyFont;
    fontFamilies.headerFont = customTheme.headerFont || fontFamilies.headerFont;
}

const parseLightMode = (customTheme: Theme) => {
    colors.dark = customTheme.dark || colors.dark;
    colors.darkTheme = customTheme.darkTheme || colors.darkTheme;
    colors.light = customTheme.light || colors.light;
    colors.lightTheme = customTheme.lightTheme || colors.lightTheme;
    colors.grid = customTheme.grid || colors.grid;
}

const parseDarkMode = (customTheme: Theme) => {
    isDarkMode = true;

    const curColors = {...colors}

    colors.dark = customTheme.light || curColors.light;
    colors.darkTheme = customTheme.darkTheme || curColors.darkTheme;
    colors.lightTheme = customTheme.lightTheme || curColors.lightTheme;
    colors.light = customTheme.dark || curColors.dark;
}