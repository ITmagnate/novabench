import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "15px",
          height: "100%",
          paddingBottom: "3%",
        }}
      >
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
