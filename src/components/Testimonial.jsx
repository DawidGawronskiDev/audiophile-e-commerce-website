import ImageMobile from "/src/assets/shared/mobile/image-best-gear.jpg";

const Testimonial = () => {
  return (
    <div className="mx-6 flex flex-col gap-10">
      <img src={ImageMobile} alt="" className="rounded-lg" />
      <h3 className="font-bold text-3xl uppercase text-center">
        Bringing you the <span className="text-orange-600">best</span> audio
        gear
      </h3>
      <p className="font-medium text-base leading text-center opacity-50">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );
};

export default Testimonial;
