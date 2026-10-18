
import {Route, Routes} from "react-router-dom"
import Auth from "./pages/Auth";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
// config for reactQuery.....
const queryClient = new QueryClient();



function App() {
  return (
  <QueryClientProvider  client={queryClient}>
    <Toaster/>
     <div className="container sm:max-w-screen-sm">
     <Routes>
      <Route path="/auth"  element={<Auth/>}/>
      <Route path="/complete-profile" element={<CompleteProfile/>}/>
    </Routes>
   </div>
  </QueryClientProvider>
  )
}

export default App;
