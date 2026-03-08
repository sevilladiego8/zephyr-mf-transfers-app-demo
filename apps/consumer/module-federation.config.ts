import { dependencies } from "./package.json";
import type { Rspack } from "@rsbuild/core";

export const mfConfig: Rspack.ModuleFederationPluginOptions = {
  name: "host",
  remotes: {
    federated_shared_ui:
      "federated_shared_ui@http://localhost:3000/remoteEntry.js",
    // extra remotes
    federated_transfers: "federated_transfers@http://localhost:3001/remoteEntry.js",
    federated_balances: "federated_balances@http://localhost:3002/remoteEntry.js",
    federated_reports: "federated_reports@http://localhost:3003/remoteEntry.js",
    federated_ledger: "federated_ledger@http://localhost:3004/remoteEntry.js",
    federated_settings: "federated_settings@http://localhost:3005/remoteEntry.js",    
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    "bootstrap":{
      singleton: true,
      requiredVersion: dependencies["bootstrap"],
    }
  },
};
