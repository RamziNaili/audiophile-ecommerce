import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Numbers } from "./components/Numbers";

function App() {
  return (
    <div className="font-manrope">
      audiophile
      <Button>toto</Button>
      <Input placeholder="toto" label="toto" />
      <Numbers />
    </div>
  );
}

export default App;
