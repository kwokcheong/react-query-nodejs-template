import "./styles/App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetRootData } from "./hooks/api/useGetRootData";

const queryClient = new QueryClient();

function Example() {
  const { isPending, error, data, isFetching } = useGetRootData();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <>Test</>
        <Example />
      </div>
    </QueryClientProvider>
  );
}

export default App;
