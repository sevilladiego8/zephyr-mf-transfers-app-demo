import "./App.scss";
import { Suspense, lazy, useState } from "react";

const FederatedButton = lazy(() => import("federated_shared_ui/button"));
const FederatedInput = lazy(() => import("federated_shared_ui/input"));
const FederatedTextArea = lazy(() => import("federated_shared_ui/textarea"));
const FederatedAnalyticsChart = lazy(
  () => import("federated_shared_ui/analytics-chart"),
);

const App = () => {
  const [email, setEmail] = useState("");
  const [txtAreaMsg, setTxtAreaMsg] = useState("");

  return (
    <div className="transfers-page">
      <h1>Transfers Page</h1>
      <h2>Remote</h2>
      <p>Transfers page here</p>

      <Suspense fallback={null}>
        <div className="container mt-3">
          <FederatedButton
            text="Submit"
            type="submit"
            variant="success"
            onClick={() => console.log("Clicked Transfers button 1")}
          />
        </div>
        <div className="container mt-3">
          <FederatedInput
            id="email"
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </div>
        <div className="container mt-3">
          <FederatedTextArea
            id="message"
            rows={5}
            placeholder="Write your message..."
            value={txtAreaMsg}
            onChange={(e: any) => setTxtAreaMsg(e.target.value)}
          />
        </div>
        <div className="container mt-3">
          <FederatedAnalyticsChart
            title="Sales Overview"
            total="$24,300"
            growth="+8.1%"
            data={[
              { label: "Jan", value: 30 },
              { label: "Feb", value: 45 },
              { label: "Mar", value: 52 },
              { label: "Apr", value: 61 },
              { label: "May", value: 48 },
            ]}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
