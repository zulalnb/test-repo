import "./styles.css";
import axios from "axios";
import { useEffect } from "react";

export default function App() {
  const fetchData = async () => {
    const res = await axios.get("http://localhost:4000/product");
    console.log(res);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
