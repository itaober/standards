import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

// https://github.com/conventional-changelog/commitlint
const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [RuleConfigSeverity.Error, 'never'],
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'release',
      ],
    ],
    'subject-min-length': [RuleConfigSeverity.Error, 'always', 4],
  },
};

export default config;
