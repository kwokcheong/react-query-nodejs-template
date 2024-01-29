import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();

function Example() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios.get("http://localhost:3001/test").then((res) => res.data),
  });

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
