const Hero = () => {
  return (
    <div className="h-[729px] flex items-center justify-center bg-black/90 text-white bg-hero-mobile bg-center bg-contain bg-no-repeat relative">
      <div className="w-full h-full bg-black/60 z-10 absolute"></div>
      <div className="text-center flex flex-col items-center justify-center gap-10 z-20">
        <div className="grid gap-6 w-96">
          <p className="uppercase font-normal text-sm tracking-widest opacity-50">
            New product
          </p>
          <h1 className="uppercase font-bold text-6xl">
            XX99 Mark II Headphones
          </h1>
          <p className="font-normal text-base leading-6 opacity-50">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
        <button className="bg-orange-600 px-8 py-4 uppercase text-sm font-bold">
          See product
        </button>
      </div>
    </div>
  );
};

export default Hero;
