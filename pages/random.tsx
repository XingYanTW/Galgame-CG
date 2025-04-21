import { useEffect, useState } from "react";

const RandomImagePage = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const images = [
      "/images/image1.jpg",
      "/images/image2.jpg",
      "/images/image3.jpg",
      // Add more images as needed
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImageSrc(randomImage);
  }, []);

  return (
    <div>
      <h1>Random Image</h1>
      {imageSrc && <img src={imageSrc} alt="Random" />}
    </div>
  );
};

export default RandomImagePage;