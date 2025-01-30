import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js'; // I added this line
import tseslint from 'typescript-eslint'; // I added this line

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

// export default eslintConfig; // I commented this line
export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintConfig, // I added this line
);
