import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import DPSTMLoginForm from "./Login";
import DPSTMApplicationForm from "./ApplicationForm";
import DPSTMDashboard from "./Dashboard";

import { Styles } from "./styles";

function App() {
  const [token, setToken] = useState();
  const navigate = useNavigate();
  // setToken(undefined);
  // let udef = typeof undefined;

  const handleLogout = (e) => {
    e.preventDefault();
    setToken(null);
    navigate("/");
  };
  if (token == null || typeof token == typeof undefined) {
    return (
      <Styles>
        <h1>Distributed Public Goods Projects And Talent Mangement</h1>
        <DPSTMLoginForm setToken={setToken} />
      </Styles>
    );
  }

  return (
    <Styles>
      <h1>Distributed Public Goods Projects And Talent Mangement</h1>
      <div className="right">
        <table>
          <tr>
            <td>
              <label>USER Logged In</label>
            </td>
            <td>
              <button onClick={handleLogout}>Logout</button>
            </td>
          </tr>
        </table>
      </div>
      <Routes>
        <Route path="/" element={<DPSTMDashboard />} />
        <Route path="/application/:Id" element={<DPSTMApplicationForm />} />
      </Routes>
    </Styles>
  );
}
// }

export default App;
