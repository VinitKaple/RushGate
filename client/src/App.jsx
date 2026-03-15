import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import DashboardLayout from "./components/layout/DashboardLayout";
import NotFound from "./pages/NotFound";
import DashboardPage from "./pages/DashboardPage";
import Engine from "./pages/Engine";
import Setting from "./pages/Setting";
import Subscription from "./pages/Subscription";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />


      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
              <Route path="engine" element={<Engine />} />
                      <Route path="setting" element={<Setting />} />
            


        {/* Catches broken links INSIDE dashboard (e.g. /dashboard/test) */}
     
      </Route>
             <Route path="/subscription" element={<Subscription />} />
   <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
