import "./App.scss";

import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

// The remote component provided by federated_shared_ui
import FederatedButton from "federated_shared_ui/button";
import TransfersPage from "federated_transfers/transfers";
import BalancesPage from "federated_balances/balances";
import ReportsPage from "federated_reports/reports";
import LedgerPage from "federated_ledger/ledger";
import SettingsPage from "federated_settings/settings";

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
      <Navbar
        links={links}
        FederatedButton={
          <FederatedButton
            text="Federate"
            type="button"
            variant="success"
            onClick={() => console.log("Clicked")}
          />
        }
      />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<TransfersPage />} />
          <Route path="/balances" element={<BalancesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/ledger" element={<LedgerPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Suspense>
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
