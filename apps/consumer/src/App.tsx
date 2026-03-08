import "./App.scss";

import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

// The remote component provided by federated_shared_ui
// import FederatedButton from "federated_shared_ui/button";
// The remote apps provided by module_federation
// import TransfersPage from "federated_transfers/transfers";
// import BalancesPage from "federated_balances/balances";
// import ReportsPage from "federated_reports/reports";
// import LedgerPage from "federated_ledger/ledger";
// import SettingsPage from "federated_settings/settings";

// const FederatedButton = lazy(() => import("federated_shared_ui/button"));
const TransfersPage = lazy(() => import("federated_transfers/transfers"));
const BalancesPage = lazy(() => import("federated_balances/balances"));
const ReportsPage = lazy(() => import("federated_reports/reports"));
const LedgerPage = lazy(() => import("federated_ledger/ledger"));
const SettingsPage = lazy(() => import("federated_settings/settings"));

const App = () => {
  const links = [
    { label: "Transfers", href: "/" },
    { label: "Balances", href: "/balances" },
    { label: "Reports", href: "/reports" },
    { label: "Ledger", href: "/ledger" },
    { label: "Settings", href: "/settings" },
  ];

  return (
    <>
      <Navbar links={links} />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<TransfersPage />} />
            <Route path="/balances" element={<BalancesPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/ledger" element={<LedgerPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;

/**
 * 
 * 


          <FederatedInput
            id="email"
            type="email"
            value={"aaaa"}
            placeholder="Enter email"
            // onChange={(e) => setEmail(e.target.value)}
          />
 */
