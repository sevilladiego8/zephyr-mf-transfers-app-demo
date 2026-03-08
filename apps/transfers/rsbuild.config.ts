import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { withZephyr } from "zephyr-rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginModuleFederation({
      name: "federated_transfers",
      exposes: {
        "./transfers": "./src/App.tsx",
      },
      // zephyr cloud has issues with this remote, i'm not sure why
      // remotes: {
      //   federated_shared_ui:
      //     "federated_shared_ui@http://localhost:3000/mf-manifest.json",
      // },
      shared: ["react", "react-dom", "bootstrap"],
    }),
    withZephyr(),
  ],
  server: {
    port: 3001,
  },
});
