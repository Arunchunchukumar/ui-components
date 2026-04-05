import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts',
  output: [
    { dir: 'dist/cjs', format: 'cjs', sourcemap: true, preserveModules: true },
    { dir: 'dist/esm', format: 'esm', sourcemap: true, preserveModules: true },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json', declarationDir: 'dist/types' }),
  ],
  external: ['react', 'react-dom'],
};
