import { RuleConfigSeverity, type UserConfig } from '@itaober/commitlint-config';

const config: UserConfig = {
  extends: ['@itaober/commitlint-config'],
  rules: {
    'scope-empty': [RuleConfigSeverity.Error, 'never'],
    'scope-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['common', 'commitlint', 'eslint', 'prettier', 'tsconfig'],
    ],
  },
};

export default config;
