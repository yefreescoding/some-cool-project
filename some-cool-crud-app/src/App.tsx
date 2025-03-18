import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Calendar } from "./components/Calendar";
import { TasksList } from "./components/TasksList";
import { TaskSummary } from "./components/TaskSummary";

function App() {
  return (
    <div className="min-h-screen bg-black p-2">
      <Nav />
      <Hero />
      <Calendar />
      <TaskSummary />
      <TasksList />
    </div>
  );
}

export default App;
