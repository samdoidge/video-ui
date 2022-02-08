const imageUrl = "http://localhost:3000/api/v1/image";

export const fetchNewImage = async (reader) => {
  const response = await fetch(imageUrl);
  const imageBlob = await response.blob();
  reader.readAsDataURL(imageBlob);
};
