import "./styles/input.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetRootData } from "./hooks/api/useGetRootData";
import { Card } from "./components/Card";
import { NavBar } from "./components/NavBar";
import { Jumbotron } from "./components/Jumbotron";

const queryClient = new QueryClient();

// function Example() {
//   const { isPending, error, data, isFetching } = useGetRootData();

//   if (isPending) return "Loading...";

//   if (error) return "An error has occurred: " + error.message;

//   return (
//     <div>
//       <pre>{JSON.stringify(data)}</pre>
//       <div>{isFetching ? "Updating..." : ""}</div>
//     </div>
//   );
// }

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <div>
          <Jumbotron />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
