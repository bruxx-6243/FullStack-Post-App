import ListPost from "./components/ListPost";
import AddFrom from "./components/AddForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AddFrom />
        <ListPost />
      </QueryClientProvider>
    </div>
  );
}

export default App;
