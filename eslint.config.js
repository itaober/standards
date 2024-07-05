import eslint from '@itaober/eslint-config';

export default eslint({
  react: {
    overrides: {
      'react/no-danger': 'warn',
      'react/self-closing-comp': 'error',
    },
  },
});
