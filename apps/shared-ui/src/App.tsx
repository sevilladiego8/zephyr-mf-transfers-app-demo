import { useState } from "react";

import LocalButton from "./components/Button/Button";
import LocalInput from "./components/Inputs/Input/Input";
import LocalTextArea from "./components/Inputs/TextArea/TextArea";
import LocalAnalyticsChart from "./components/AnalyticsChart/AnalyticsChart";

const App = () => {
  const [email, setEmail] = useState("");
  const [txtAreaMsg, setTxtAreaMsg] = useState("");

  return (
    <>
      <h1>Basic Host-Remote</h1>
      <h2>Remote</h2>
      <div className="container mt-3">
        <LocalButton
          text="Submit"
          type="submit"
          variant="success"
          onClick={() => console.log("Clicked")}
        />
      </div>
      <div className="container mt-3">
        <LocalInput
          id="email"
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="container mt-3">
        <LocalTextArea
          id="message"
          rows={5}
          placeholder="Write your message..."
          value={txtAreaMsg}
          onChange={(e) => setTxtAreaMsg(e.target.value)}
        />
      </div>
      <div className="container mt-3">
        <LocalAnalyticsChart
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
    </>
  );
};

export default App;
