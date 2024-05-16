import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Toaster } from "react-hot-toast";
import Loader from "./utils/Loader";

function App() {
  return (
    <main>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.component}
              index={route.index}
            />
          );
        })}
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
    </main>
  );
}

export default App;
