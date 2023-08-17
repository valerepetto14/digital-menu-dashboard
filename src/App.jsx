import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import Home from "./pages/home/home";
import SignIn from "./pages/auth/signIn";

function App() {
  return (
    <div className="App">
      <Routes basename="/dashboard">
        <Route element={<ProtectedRoute />}>
          <Route path="/*" element={<Home />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
