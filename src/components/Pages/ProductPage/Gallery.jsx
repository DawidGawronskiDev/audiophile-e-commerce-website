const Gallery = ({ product }) => {
  return (
    <div className="container-center grid gap-4 *:rounded-lg *:overflow-hidden mobile:grid-cols-2 tablet:h-[592px]">
      <picture>
        <source
          srcSet={product.gallery.first.desktop}
          media="(max-width: 1440px)"
        />
        <source
          srcSet={product.gallery.first.tablet}
          media="(max-width: 768px)"
        />
        <source
          srcSet={product.gallery.first.mobile}
          media="(max-width: 375px)"
        />
        <img
          src={product.gallery.first.desktop}
          alt=""
          className="w-full h-full object-cover"
        />
      </picture>
      <picture>
        <source
          srcSet={product.gallery.second.desktop}
          media="(max-width: 1440px)"
        />
        <source
          srcSet={product.gallery.second.tablet}
          media="(max-width: 768px)"
        />
        <source
          srcSet={product.gallery.second.mobile}
          media="(max-width: 375px)"
        />
        <img
          src={product.gallery.second.desktop}
          alt=""
          className="w-full h-full object-cover"
        />
      </picture>
      <picture className="mobile:col-start-2 mobile:col-end-3 mobile:row-start-1 mobile:row-end-3 object-cover">
        <source
          srcSet={product.gallery.third.desktop}
          media="(max-width: 1440px)"
        />
        <source
          srcSet={product.gallery.third.tablet}
          media="(max-width: 768px)"
        />
        <source
          srcSet={product.gallery.third.mobile}
          media="(max-width: 375px)"
        />
        <img
          src={product.gallery.third.desktop}
          alt=""
          className="w-full h-full object-cover"
        />
      </picture>
    </div>
  );
};

export default Gallery;
