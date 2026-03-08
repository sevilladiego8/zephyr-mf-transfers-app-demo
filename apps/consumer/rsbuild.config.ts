import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { withZephyr } from "zephyr-rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginModuleFederation({
      name: "federated_consumer",
      remotes: {
        federated_shared_ui:
          "federated_shared_ui@http://localhost:3000/mf-manifest.json",
        // main page
        federated_transfers:
          "federated_transfers@http://localhost:3001/mf-manifest.json",
        federated_balances:
          "federated_balances@http://localhost:3002/mf-manifest.json",
        federated_reports:
          "federated_reports@http://localhost:3003/mf-manifest.json",
        federated_ledger:
          "federated_ledger@http://localhost:3004/mf-manifest.json",
        federated_settings:
          "federated_settings@http://localhost:3005/mf-manifest.json",
      },
      // consider react-router-dom later
      shared: ["react", "react-dom", "bootstrap"],
    }),
    withZephyr(),
  ],
  server: {
    port: 2000,
  },
});
