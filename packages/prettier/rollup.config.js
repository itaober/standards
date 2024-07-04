import typescript from '@rollup/plugin-typescript';

const input = 'src/index.ts';

export default [
  {
    input,
    output: [
      {
        file: 'dist/index.js',
        format: 'es',
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
      },
    ],
    plugins: [typescript()],
  },
];
