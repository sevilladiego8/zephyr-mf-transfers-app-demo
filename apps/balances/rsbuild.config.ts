import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { withZephyr } from 'zephyr-rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginModuleFederation({
      name: 'federated_balances',
      exposes: {
        './balances': './src/App.tsx'
      },
      shared: ['react', 'react-dom', 'bootstrap'],
    }),
    withZephyr(),
  ],
  server: {
    port: 3002,
  },
});
