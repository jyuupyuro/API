/**
 * Logo
 */
import logo from '../../assets/pframe/logo/logo.png'
import logoTitleBlue from '../../assets/pframe/logo/logo_title_blue.png'

/**
 * Background
 */
import blueLowPloy from '../../assets/pframe/theme/blue-low-poly.jpg'

/**
 * Color Theme
 */
// Dark = #424D60
// Light = #4291F2
const ThemeColor = `#2355AF`
const ThemeText = `white`

const img = {
    logo: logoTitleBlue,
    sideLogo: logo,
    background: blueLowPloy
}

const color = {
    themeColor: ThemeColor,
    themeText: ThemeText
}

const style = {
    LOGO: {
        height: "180px"
    }
}

export const COMPANY = {
    NAME: 'PFrame',
    ADDRESS: 'Earth'
}

export const PLATFORM = {
    NAME: 'PFrame'
}

export const LOGO = img.logo;
export const LOGINBACKGROUND = img.background;
export const SIDEBARLOGO = img.sideLogo;

export const STYLE = style

export const THEME_COLOR = color.themeColor;
export const TEXT_COLOUR = color.themeText;