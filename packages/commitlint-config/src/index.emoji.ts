import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

/**
 * @type {import('@commitlint/types').UserConfig}
 * @see https://github.com/conventional-changelog/commitlint
 */
const commitlintConfig: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [RuleConfigSeverity.Error, 'never'],
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        '🎉 init',
        '✨ feat',
        '🐛 fix',
        '📚 docs',
        '🎨 style',
        '🤡 refactor',
        '⚡️ perf',
        '✅ test',
        '🔧 build',
        '👷 ci',
        '🤡 chore',
        '⏪ revert',
        '🚀 release',
      ],
    ],
    'subject-min-length': [RuleConfigSeverity.Error, 'always', 4],
  },
  prompt: {
    settings: {},
    messages: {
      skip: ':skip',
      max: 'upper %d chars',
      min: '%d chars at least',
      emptyWarning: 'can not be empty',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit',
    },
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          '🎉 init': {
            description: 'Initial commit.',
            title: 'init',
            emoji: '🎉',
          },
          '✨ feat': {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨',
          },
          '🐛 fix': {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          '📚 docs': {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚',
          },
          '🎨 style': {
            description:
              'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '🎨',
          },
          '🤡 refactor': {
            description: 'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '🤡',
          },
          '⚡️ perf': {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '⚡️',
          },
          '✅ test': {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '✅',
          },
          '🔧 build': {
            description:
              'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '🔧',
          },
          '👷 ci': {
            description:
              'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
            title: 'Continuous Integrations',
            emoji: '👷',
          },
          '🤡 chore': {
            description: "Other changes that don't modify src or test files",
            title: 'Chores',
            emoji: '🤡',
          },
          '⏪ revert': {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: '⏪',
          },
          '🚀 release': {
            description: 'Create a release commit',
            title: 'Release',
            emoji: '🚀',
          },
        },
      },
      subject: {
        description: 'Write a short, imperative tense description of the change',
      },
    },
  },
};

export { RuleConfigSeverity, UserConfig };

export default commitlintConfig;
