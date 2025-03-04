import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import Section from "./Components/Section/Section";
function App() {
  return (
    <div className="w-100">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
