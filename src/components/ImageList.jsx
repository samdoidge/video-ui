import Image from "./Image";

const ImageList = ({ images }) => (
  <div className="grid grid-cols-4 gap-4">
   {images.map((image, i) => <div key={i}><Image src={image.imageSrc}/></div>)}
  </div>
);
export default ImageList;
