import "./App.css";
import { Body } from "./components/Body";
import { SideNav } from "./components/sideNav/SideNav";

function App() {
  return (
    <div className="page_wrapper">
      <SideNav />
      <Body />
    </div>
  );
}

export default App;
