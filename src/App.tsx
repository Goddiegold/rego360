import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import '@mantine/core/styles.css';
// import "@mantine/notifications/styles.css";

const App = () => {
  return (
    <MantineProvider
      withCssVariables
      withGlobalClasses
      withStaticClasses
    >
      {/* <Notifications position="top-right" zIndex={2077} /> */}
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;