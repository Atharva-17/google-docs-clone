import { useState } from "react";
import EditorSection from "./components/EditorSection";
import Navbar from "./components/NavBar";
import "./styles/App.css";

function App() {
  const [toolbarOpen, setToolbarOpen] = useState(true);

  return (
    <div className="app">
      <Navbar toolbarOpen={toolbarOpen} />
      <EditorSection
        toolbarOpen={toolbarOpen}
        setToolbarOpen={setToolbarOpen}
      />
    </div>
  );
}

export default App;
