import "./App.css";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";
import Navbar from "./components/NavBar/navbar";
import StreamingAvailability from "./components/Streaming-availability/Streamingavailability";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
      {/* < StreamingAvailability type="movie" id="12345"/> */}
    </div>
  );
}

export default App;
