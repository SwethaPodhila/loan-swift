import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Pratice from "./pages/pratice";
import AdminLogin from "./pages/AdminLogin";
//import AdminSignup from "./pages/AdminSignup";
import AdminDashboard from "./pages/AdminDashboard";
import CreateSubAdmin from "./pages/CreateSubAdmin";
import PrivacyPolicy from "./pages/Privacy";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pratice" element={<Pratice />} />
          <Route oute path="/admin/login" element={<AdminLogin />} />
          {/* <Route path="/admin/signup" element={<AdminSignup />} /> */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/create-sub-admin" element={<CreateSubAdmin />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Custom routes here */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;