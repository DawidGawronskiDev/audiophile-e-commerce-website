import { useEffect, useState } from "react";

const changeImage = (width, cb, images) => {
  if (width < 768) {
    cb(images[0]);
  } else if (768 < width && width < 1024) {
    cb(images[1]);
  } else if (width > 1024) {
    cb(images[2]);
  }
};

const DynamicImage = ({ mobile, tablet, desktop }) => {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const handleResize = (e) => {
      const width = e.target.innerWidth;

      changeImage(width, setCurrentImage, [mobile, tablet, desktop]);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobile, tablet, desktop]);

  useEffect(() => {
    const width = window.innerWidth;

    changeImage(width, setCurrentImage, [mobile, tablet, desktop]);
  }, []);

  return <img src={currentImage} alt="" className="rounded-lg" />;
};

export default DynamicImage;
