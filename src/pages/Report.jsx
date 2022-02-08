import { Link } from "react-router-dom";
import Button from "../components/Button";
import ImageList from "../components/ImageList";

const imagesHasFeature = (image, feature) => image.selectedFeatures.some(f => f.value === feature)

function Report({ images, features }) {
  return (
    <div className="App max-w-2xl mx-auto">
      <div className="report">
        <h1 className="text-4xl">Report</h1>
        {features.map(feature => <div key={feature.value}><h3>{feature.label}</h3><ImageList images={images.filter(image => imagesHasFeature(image, feature.value))} /></div>
        )}
        <Link to="/"><Button>Add more</Button></Link>
      </div>
    </div>
  );
}

export default Report;
