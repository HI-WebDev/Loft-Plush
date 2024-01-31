import Layout from "./helpers/Layout/Layout"
import './App.css';
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const App = () => {
  return (
    <>
      <Layout />
    </>
  )
}

export default App
