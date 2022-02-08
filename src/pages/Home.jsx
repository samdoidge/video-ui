import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CheckList from "../components/CheckList";
import Image from "../components/Image";
import ImageList from "../components/ImageList";
import Modal from "../components/Modal";
import { fetchNewImage } from "../consts/api";

const reader = new FileReader();

function Home({ images, features, handleAddFeature }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetchNewImage(reader);
  }, []);

  reader.onloadend = () => {
    const base64data = reader.result;
    setImageSrc(base64data);
  };

  const handleRealImage = () => {
    fetchNewImage(reader);
  };

  const handleOk = () => {
    images.push({ imageSrc, selectedFeatures });
    fetchNewImage(reader);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleNotRealImage = () => {
    setIsModalOpen(true);
  };

  const handleAddItem = () => {
    handleAddFeature(input)
  }

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setSelectedFeatures([
        ...selectedFeatures,
        features.filter((feature) => feature.value === event.target.value)[0],
      ]);
    } else {
      setSelectedFeatures(
        selectedFeatures.filter(
          (feature) => feature.value !== event.target.value
        )
      );
    }
  };

  return (
    <div className="App max-w-xl mx-auto">
      <Image alt="Random face photo" src={imageSrc} />

      <Button onClick={handleRealImage}>Real</Button>
      <Button onClick={handleNotRealImage}>Not Real</Button>
      <div className="report">
        <Link to="report"><Button>Generate report</Button></Link>
        <ImageList images={images} />
      </div>
      <Modal
        body={
          <div className=""><CheckList items={features} onChange={handleCheckboxChange} />
           <p>Other:</p>
            <input type="text" value={input} onInput={e => setInput(e.target.value)} className="border p-1 mr-2  rounded" placeholder="Enter yout own feature"></input>
            <Button onClick={handleAddItem}>Add item</Button>
          </div>
        }
        buttons={
          <>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleOk} isDisabled={!selectedFeatures.length}>
              Ok
            </Button>
          </>
        }
        closeModal={setIsModalOpen}
        isOpen={isModalOpen}
      />
    </div>
  );
}

export default Home;
