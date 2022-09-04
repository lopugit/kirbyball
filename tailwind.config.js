const tailwindConf = {
  mode: 'jit',
  theme: {
    extend: {
      spacing: {}
    },
    colors: {
      white: '#fff',
      primary: '#FEF657',
      secondary: '#FFC0E1',
      lightgray: '#c6cbde',
      gray: '#D6D6D6',
      darkgray: '#404040',
      black: '#000'
    },
    fontSize: {
      '2xs': '0.7rem',
      xs: '0.8rem',
      sm: '0.865rem',
      base: '1rem', // 16px - Body
      lg: '1.125rem', // 17px
      xl: '1.25rem', // 20px - Sub headings
      '2xl': '1.5rem', // 24px - Larger sub headings / H3
      '3xl': '1.875rem', // 30px - H2
      '4xl': '2.55rem', // 41px - H1
      '5xl': '2.97rem', // 48px - H1 Home
      '6xl': '4.22rem' // 68px stats
    },
    fontWeight: {
      light: 100,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      xbold: 800,
      xxbold: 900,
      100: 100,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900
    }
  },
  screens: {
    sm: '640px', // => @media (min-width: 640px) { ... }
    md: '768px', // => @media (min-width: 768px) { ... }
    lg: '1024px', // => @media (min-width: 1024px) { ... }
    xl: '1280px', // => @media (min-width: 1280px) { ... }
    '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    tiny: { raw: '(min-height: 400px)' },
    tall: { raw: '(min-height: 800px)' }
  }

}

for (let i = 0; i <= 100; i++) {
  const ii = '0' + i
  tailwindConf.theme.extend.spacing[ii] = (i / 10) * 0.25 + 'rem'
  tailwindConf.theme.extend.spacing[ii + 'vh'] = i / 10 + 'vh'
  tailwindConf.theme.extend.spacing[ii + 'vw'] = i / 10 + 'vw'
  tailwindConf.theme.extend.spacing[ii + 'p'] = i / 10 + '%'
}
for (let i = 0; i <= 100; i++) {
  tailwindConf.theme.extend.spacing[i] = i * 0.25 + 'rem'
  tailwindConf.theme.extend.spacing[i + 'vh'] = i + 'vh'
  tailwindConf.theme.extend.spacing[i + 'px'] = i + 'px'
  tailwindConf.theme.extend.spacing[i + 'vw'] = i + 'vw'
  tailwindConf.theme.extend.spacing[i + 'p'] = i + '%'
  tailwindConf.theme.fontSize[i] = i + 'px'
}
for (let i = 0; i <= 1000; i++) {
  if (i % 10 === 0) {
    tailwindConf.theme.extend.spacing[i + 'px'] = i + 'px'
  }
}

module.exports = tailwindConf
