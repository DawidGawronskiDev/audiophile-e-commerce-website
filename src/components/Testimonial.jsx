import Body from "./UI/Body";
import HeadingL from "./UI/HeadingL";
import ImageMobile from "/src/assets/shared/mobile/image-best-gear.jpg";

const Testimonial = () => {
  return (
    <div className="mx-6 flex flex-col gap-10 text-center">
      <img src={ImageMobile} alt="" className="rounded-lg" />
      <HeadingL>
        Bringing you the <span className="text-orange-600">best</span> audio
        gear
      </HeadingL>
      <Body>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </Body>
    </div>
  );
};

export default Testimonial;
