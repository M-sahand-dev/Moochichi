import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="py-10 px-12">
      <Outlet />
    </div>
  );
}

export default App;
