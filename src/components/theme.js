const colors = {
  primary: '#DF4723',
  secondary: '#9b49c1',
  default: '#fff',
  black: '#333',
  gray: '#999',
  input: {
    text: '#666',
    border: '#ddd',
    placeholder: '#999',
  },
};

const viewports = {
  smartphone: '360px',
  tablet: '720px',
  desktop: '1280px',
};

const forms = {
  labelColor: colors.light,
  errorColor: colors.danger,
};

const typography = {
  title: {
    color: colors.black,
    size: '24px',
  },
  subtitle: {
    color: colors.black,
    size: '16px',
  },
  text: {
    color: colors.gray,
    size: '14px',
  },
  unit: 5,
};

const theme = Object.freeze({
  colors,
  forms,
  viewports,
  typography,
});

export default theme;
