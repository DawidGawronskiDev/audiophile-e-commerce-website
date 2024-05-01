import { useEffect, useState } from "react";

const DynamicImage = ({ mobile, tablet, desktop }) => {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const handleResize = (e) => {
      const width = e.target.innerWidth;

      if (width < 768) {
        setCurrentImage(mobile);
      } else if (768 < width && width < 1024) {
        setCurrentImage(tablet);
      } else if (width > 1024) {
        setCurrentImage(desktop);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobile, tablet, desktop]);

  return <img src={currentImage} alt="" />;
};

export default DynamicImage;
