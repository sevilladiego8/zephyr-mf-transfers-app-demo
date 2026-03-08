import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { withZephyr } from 'zephyr-rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'federated_balances',
      exposes: {
        './balances': './src/App.tsx'
      },
      shared: ['react', 'react-dom'],
    }),
    withZephyr(),
  ],
  server: {
    port: 3002,
  },
});
