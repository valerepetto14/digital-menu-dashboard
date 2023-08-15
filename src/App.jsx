import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import SignIn from "./pages/auth/signIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
