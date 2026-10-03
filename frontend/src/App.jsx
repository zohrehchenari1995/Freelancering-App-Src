
import {Route, Routes} from "react-router-dom"
import Auth from "./pages/Auth";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
// config for reactQuery.....
const queryClient = new QueryClient();



function App() {
  return (
  <QueryClientProvider  client={queryClient}>
    <Toaster/>
     <div className="container sm:max-w-screen-sm">
     <Routes>
      <Route path="/auth"  element={<Auth/>}/>
    </Routes>
   </div>
  </QueryClientProvider>
  )
}

export default App;
