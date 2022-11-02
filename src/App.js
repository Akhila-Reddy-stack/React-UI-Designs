
import { Routes, Route} from "react-router-dom";
import PaymentScreen from "./Component/PaymentScreen/PaymentScreen";

function App() {
  
  return (
    <div className="layout_wrapper">
      <Routes>
        <Route index element={<PaymentScreen />} />
      </Routes>
      
    </div>
  );
}
export default App;
