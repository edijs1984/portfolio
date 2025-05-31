import "@/styles/global.scss";
import { TopBar } from "./components/TopBar/TopBar";

import { CardSwitcher } from "./components/CardSwitcher";
import { NavigationProvider } from "./context/NavigationContext";

export function App() {
  return (
    <NavigationProvider>
      <div className="app">
        <TopBar />
        <div style={{ height: "40px" }} />
        <main>
          <CardSwitcher />
        </main>
      </div>
    </NavigationProvider>
  );
}
