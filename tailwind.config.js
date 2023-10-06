
module.exports = {
  content: [],
  theme: {
    extend: {
      colors:{
        'color01': "#22223B",
        'color02': "#4A4E69",
        'color03': "#9A8C98",
        'color04': "#C9ADA7",
        'color05': "#F2E9E4",
        'white': "#ffffff"
      },
      typography: ({ theme }) => ({
        them01: {
          css: {
            '--tw-prose-body': theme('colors.color05[800]'),
            '--tw-prose-headings': theme('colors.color05[900]'),
            '--tw-prose-lead': theme('colors.color05[700]'),
            '--tw-prose-links': theme('colors.color05[900]'),
            '--tw-prose-bold': theme('colors.color05[900]'),
            '--tw-prose-counters': theme('colors.color05[600]'),
            '--tw-prose-bullets': theme('colors.color05[400]'),
            '--tw-prose-hr': theme('colors.color05[300]'),
            '--tw-prose-quotes': theme('colors.color05[900]'),
            '--tw-prose-quote-borders': theme('colors.color05[300]'),
            '--tw-prose-captions': theme('colors.color05[700]'),
            '--tw-prose-code': theme('colors.color05[900]'),
            '--tw-prose-pre-code': theme('colors.color05[100]'),
            '--tw-prose-pre-bg': theme('colors.color05[900]'),
            '--tw-prose-th-borders': theme('colors.color05[300]'),
            '--tw-prose-td-borders': theme('colors.color05[200]'),
            '--tw-prose-invert-body': theme('colors.color05[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.color05[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.color05[400]'),
            '--tw-prose-invert-bullets': theme('colors.color05[600]'),
            '--tw-prose-invert-hr': theme('colors.color05[700]'),
            '--tw-prose-invert-quotes': theme('colors.color05[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.color05[700]'),
            '--tw-prose-invert-captions': theme('colors.color05[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.color05[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.color05[600]'),
            '--tw-prose-invert-td-borders': theme('colors.color05[700]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
