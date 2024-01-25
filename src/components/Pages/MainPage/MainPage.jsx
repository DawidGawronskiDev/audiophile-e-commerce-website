import Header from "../../Header/Header";
import Hero from "../../Hero/Hero";
import { ButtonBlack, ButtonTransparent } from "../../shared/Buttons";
import Categories from "../../shared/Categories/Categories";
import Footer from "../../shared/Footer/Footer";
import Testimonial from "../../shared/Testimonial/Testimonial";

const Showcase = () => {
  return (
    <div>
      <div className="container-center text-center grid gap-6 tablet:grid-cols-2">
        <div className="relative bg-orange-900 p-8 tablet:p-16 rounded-lg grid gap-4 tablet:gap-16 justify-items-center overflow-hidden tablet:col-span-2 desktop:h-[560px] desktop:grid-cols-2">
          <picture className="grid justify-items-center z-10 relative max-w-[350px] desktop:max-w-full">
            <source
              src="/assets/home/mobile/image-speaker-zx9.png"
              media="(max-width: 375px)"
            />
            <source
              src="/assets/home/tablet/image-speaker-zx9.png"
              media="(max-width: 768px)"
            />
            <source
              src="/assets/home/desktop/image-speaker-zx9.png"
              media="(max-width: 1440px)"
            />
            <img
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt=""
              className="w-1/2 z-10 desktop:w-[410px] translate-y-4"
            />
            <img
              src="/assets/home/desktop/pattern-circles.svg"
              alt=""
              className="absolute z-0 top-1/2 -translate-y-1/2 desktop:scale-[2.5]"
            />
          </picture>
          <div className="max-w-[350px] z-30 grid gap-6 desktop:self-center desktop:justify-self-start desktop:text-left desktop:justify-items-start">
            <h4 className="text-white-900">ZX9 SPEAKER</h4>
            <span className="body text-white-900/50">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </span>
            <ButtonBlack
              text={"See product"}
              link={"/category/speakers/product/zx9-speaker"}
            />
          </div>
        </div>

        <div className="relative tablet:col-span-2">
          <picture className="grid justify-items-center z-10">
            <source
              srcSet="/assets/home/mobile/image-speaker-zx7.jpg"
              media="(max-width: 375px)"
            />
            <source
              srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
              media="(max-width: 768px)"
            />
            <source
              srcSet="/assets/home/desktop/image-speaker-zx7.jpg"
              media="(max-width: 1440px)"
            />
            <img
              src="/assets/home/desktop/image-speaker-zx7.jpg"
              alt=""
              className="rounded-lg overflow-hidden w-full"
            />
          </picture>
          <div className="absolute z-10 top-1/2 -translate-y-1/2 left-6 grid gap-4 desktop:p-24 desktop:justify-items-start">
            <h4>ZX7 SPEAKER</h4>
            <ButtonTransparent
              text={"See product"}
              link={"/category/speakers/product/zx7-speaker"}
            />
          </div>
        </div>

        <div className="aspect-video rounded-lg overflow-hidden grid content-center">
          <picture className="grid justify-items-center z-10">
            <source
              srcSet="/assets/home/mobile/image-earphones-yx1.jpg"
              media="(max-width: 375px)"
            />
            <source
              srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
              media="(max-width: 768px)"
            />
            <source
              srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
              media="(max-width: 1440px)"
            />
            <img
              src="/assets/home/desktop/image-earphones-yx1.jpg"
              alt=""
              className="object-cover w-full"
            />
          </picture>
        </div>

        <div className="aspect-video bg-grey-900 rounded-lg grid items-center text-left p-6 desktop:p-24">
          <div className="w-max grid gap-4 desktop:justify-items-start">
            <h4>YX1 EARPHONES</h4>
            <ButtonTransparent
              text={"See product"}
              link={"/category/earphones/product/yx1-earphones"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="grid gap-24">
        <Hero />
        <Categories />
        <Showcase />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
