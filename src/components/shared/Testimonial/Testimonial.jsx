const Testimonial = () => {
  return (
    <section>
      <div className="container-center desktop:h-[540px] flex flex-col desktop:flex-row-reverse gap-8">
        <picture className="flex-1">
          <source
            srcSet="public\assets\shared\tablet\image-best-gear.jpg"
            media="(max-width: 1440px)"
          />
          <source
            srcSet="public\assets\shared\mobile\image-best-gear.jpg"
            media="(max-width: 768px)"
          />
          <img
            src="public\assets\shared\desktop\image-best-gear.jpg"
            alt=""
            className="desktop:h-full desktop:w-full object-cover rounded-lg"
          />
        </picture>
        <div className="flex-1 flex flex-col justify-center gap-6 bg-red-300 h-[100%] text-center desktop:text-left">
          <h2>
            Bringing you the <span className="text-orange-900">best</span> audio
            gear
          </h2>
          <p className="body opacity-50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
