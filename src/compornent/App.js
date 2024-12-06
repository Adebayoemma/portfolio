import React from "react";
import "./App.css";
import Topbar from "../compornent/top/topbar";
import Face from "./face/face";
import About from "./about/about";
import Services from "./services/services";
import Mywork from "./mywork/mywork";
import Contect from "./contect/contect";
import Footer from "./footer/footer";
function App() {
  return (
    <div>
      <Topbar />
      <Face />
      <About />
      <Services />
      <Mywork />
      <Contect />
      <Footer />
    </div>
  );
}

export default App;
