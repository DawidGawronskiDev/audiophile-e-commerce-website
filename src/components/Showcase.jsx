import Body from "./UI/Body";
import ButtonBlack from "./UI/ButtonBlack";
import HeadingS from "./UI/HeadingS";
import HeadingXL from "./UI/HeadingXL";
import DynamicImage from "./UI/DynamicImage";

import FirstMobile from "/src/assets/home/desktop/image-speaker-zx9.png";
import FirstTablet from "/src/assets/home/tablet/image-speaker-zx9.png";
import FirstDesktop from "/src/assets/home/desktop/image-speaker-zx9.png";

import ThirdMobile from "/src/assets/home/mobile/image-earphones-yx1.jpg";
import ThirdTablet from "/src/assets/home/tablet/image-earphones-yx1.jpg";
import ThirdDesktop from "/src/assets/home/desktop/image-earphones-yx1.jpg";

const Showcase = () => {
  return (
    <div className="mx-6 grid gap-4">
      <div className="bg-orange-400 bg-circles bg-contain bg-top bg-no-repeat p-6 flex flex-col gap-8 items-center justify-center rounded-lg text-center">
        <DynamicImage
          mobile={FirstMobile}
          tablet={FirstTablet}
          desktop={FirstDesktop}
        />
        <div className="grid justify-items-center gap-6 sm:max-w-80">
          <HeadingXL>
            <span className="text-white">ZX9 SPEAKER</span>
          </HeadingXL>
          <Body color="white">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Body>
          <ButtonBlack>See product</ButtonBlack>
        </div>
      </div>

      <div className="bg-showcase-speaker-mobile bg-cover bg-center p-6 rounded-lg flex flex-col items-start justify-center gap-4 h-96 sm:bg-cover">
        <HeadingS>ZX7 SPEAKER</HeadingS>
        <ButtonBlack>See Product</ButtonBlack>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <div>
          <DynamicImage
            mobile={ThirdMobile}
            tablet={ThirdTablet}
            desktop={ThirdDesktop}
          />
        </div>
        <div className="bg-gray-200 p-6 rounded-lg flex flex-col items-start justify-center gap-4 w-full sm:h-full">
          <HeadingS>YX1 EARPHONES</HeadingS>
          <ButtonBlack>See Product</ButtonBlack>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
