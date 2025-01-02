export const GLOB_SRC_EXT = '?([cm])[jt]s?(x)';
export const GLOB_SRC = '**/*.?([cm])[jt]s?(x)';

export const GLOB_JS = '**/*.?([cm])js';
export const GLOB_JSX = '**/*.?([cm])jsx';

export const GLOB_TS = '**/*.?([cm])ts';
export const GLOB_TSX = '**/*.?([cm])tsx';

export const GLOB_STYLE = '**/*.{c,le,sc}ss';
export const GLOB_CSS = '**/*.css';
export const GLOB_POSTCSS = '**/*.{p,post}css';
export const GLOB_LESS = '**/*.less';
export const GLOB_SCSS = '**/*.scss';

export const GLOB_HTML = '**/*.htm?(l)';

export const GLOB_VUE = '**/*.vue';

/** ESLint ignore pattern */
export const GLOB_IGNORES = [
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',

  '**/output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.history',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.next',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',
  '**/.yarn',
  '**/vite.config.*.timestamp-*',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
];

export const GLOB_MARKDOWN = '**/*.md';
export const GLOB_ASTRO_TS = '**/*.astro/*.ts';
