import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { defaultFeatures } from "./consts/features";
import Home from "./pages/Home";
import Report from "./pages/Report";

const images = [];

function App() {
  const [features, setFeatures] = useState(defaultFeatures)

  const handleAddFeature  = (feature) => {
    setFeatures([...features, {value:feature.toLowerCase(), label:feature}])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home images={images} features={features} handleAddFeature={handleAddFeature} />}></Route>
        <Route path="/report" element={<Report images={images} features={features}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
