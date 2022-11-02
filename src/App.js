
import { Routes, Route} from "react-router-dom";
import PaymentScreen from "./Component/PaymentScreen/PaymentScreen";
import DoctorDescriptionScreen from './Component/DoctorDescription/DoctorDescription'

function App() {
  return (
    <div className="layout_wrapper">
      <Routes>
        <Route index element={<PaymentScreen />} />
        <Route path={'doctor'} element={<DoctorDescriptionScreen />} />
      </Routes>
    </div>
  );
}
export default App;
