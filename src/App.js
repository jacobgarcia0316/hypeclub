import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
// import { Navbar } from "./components/Navbar";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { ToTop } from "./components/topBtn";
import './scss/css/app.css'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <ToTop />
    <div className="App">
      <Main />
      <Page2 />
      <Page3 />

      <Footer />
    </div>
    </>
  );
}

export default App;
