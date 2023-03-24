import "./App.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Home Page</h1>
      <Button
        variant="outline-success"
        style={{ width: "90%" }}
        onClick={() => navigate("create")}
      >
        REPORT A CRIME
      </Button>
    </div>
  );
}

export default App;
