import Body from "./UI/Body";
import ButtonOrange from "./UI/ButtonOrange";
import HeadingXL from "./UI/HeadingXL";
import Overline from "./UI/Overline";

const Hero = () => {
  return (
    <div className="h-[729px] flex items-center justify-center bg-black/90 text-white bg-hero-mobile bg-center bg-contain bg-no-repeat relative">
      <div className="w-full h-full bg-black/60 z-10 absolute"></div>
      <div className="text-center flex flex-col items-center justify-center gap-10 z-20">
        <div className="grid gap-6 w-96">
          <Overline>New product</Overline>

          <HeadingXL>XX99 Mark II Headphones</HeadingXL>
          <Body color="white">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Body>
        </div>
        <ButtonOrange link="product/xx99-mark-two-headphones">
          See product
        </ButtonOrange>
      </div>
    </div>
  );
};

export default Hero;
