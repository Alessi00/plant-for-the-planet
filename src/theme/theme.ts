import css from 'styled-jsx/css';
import tenantConfig from '../../tenant.config';
import theme from './themeProperties';
const config = tenantConfig();

const {
  light,
  dark,
  fontSizes,
  primaryColor,
  primaryDarkColor,
  defaultFontFamily,
  primaryLightColor,
  topProjectBackgroundColor,
  nonDonatableProjectBackgroundColor,
} = theme;

const globalStyles = css.global`
  :root {
    --primary-font-family: ${config.font.primaryFontFamily ||
    defaultFontFamily};
    --secondary-font-family: ${config.font.secondaryFontFamily ||
    defaultFontFamily};
    --font-xx-extra-small: ${fontSizes.fontXXSmall};
    --font-x-extra-small: ${fontSizes.fontXSmall};
    --font-small: ${fontSizes.fontSmall};
    --font-sixteen: ${fontSizes.fontSixteen};
    --font-medium: ${fontSizes.fontMedium};
    --font-large: ${fontSizes.fontLarge};
    --font-x-large: ${fontSizes.fontXLarge};
    --font-xx-large: ${fontSizes.fontXXLarge};
    --font-xxx-large: ${fontSizes.fontXXXLarge};
    --primary-color: ${primaryColor};
    --primary-dark-color: ${primaryDarkColor};
    --primary-light-color: ${primaryLightColor};
    --top-project-background-color: ${topProjectBackgroundColor};
    --non-donatable-project-background-color: ${nonDonatableProjectBackgroundColor};
  }
  .theme-light {
    --primary-font-color: ${light.primaryFontColor};
    --divider-color: ${light.dividerColor};
    --secondary-color: ${light.secondaryColor};
    --background-color-dark: ${light.backgroundColorDark};
    --background-color: ${light.backgroundColor};
    --highlight-background: ${light.highlightBackground};
    --light: ${light.light};
    --dark: ${light.dark};
    --danger-color: ${light.dangerColor};
    --safe-color: ${light.safeColor};
    --undecade-fill: ${light.unDecadeFill};
    --mapbox-icon: ${light.mapboxIcon};
    --background-base: ${light.backgroundBase};
    --disabled-font-color: ${light.disabledFontColor};
  }
  .theme-dark {
    --primary-font-color: ${dark.primaryFontColor};
    --divider-color: ${dark.dividerColor};
    --secondary-color: ${dark.secondaryColor};
    --background-color-dark: ${dark.backgroundColorDark};
    --background-color: ${dark.backgroundColor};
    --highlight-background: ${dark.highlightBackground};
    --light: ${dark.light};
    --dark: ${dark.dark};
    --danger-color: ${dark.dangerColor};
    --safe-color: ${dark.safeColor};
    --undecade-fill: ${dark.unDecadeFill};
    --mapbox-icon: ${dark.mapboxIcon};
    --background-base: ${dark.backgroundBase};
    --disabled-font-color: ${dark.disabledFontColor};
  }
`;

export default globalStyles;
