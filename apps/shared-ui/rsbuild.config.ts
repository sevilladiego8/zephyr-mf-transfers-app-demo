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
      name: "federated_shared_ui",
      exposes: {
        "./button": "./src/components/Button/Button.tsx",
        "./input": "./src/components/Inputs/Input/Input.tsx",
        "./textarea": "./src/components/Inputs/TextArea/TextArea.tsx",
        "./modal": "./src/components/Modal/Modal.tsx",
        "./table": "./src/components/Table/Table.tsx",
        "./analytics-chart":
          "./src/components/AnalyticsChart/AnalyticsChart.tsx",
      },
      shared: ["react", "react-dom", "bootstrap"],
    }),
    withZephyr(),
  ],
  server: {
    port: 3000,
  },
});
