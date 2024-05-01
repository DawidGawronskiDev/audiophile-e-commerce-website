import Body from "./UI/Body";
import ButtonBlack from "./UI/ButtonBlack";
import HeadingS from "./UI/HeadingS";
import HeadingXL from "./UI/HeadingXL";

const Showcase = () => {
  return (
    <div className="mx-6 grid gap-4">
      <div className="bg-orange-400 bg-circles bg-contain bg-top bg-no-repeat p-6 flex flex-col gap-8 items-center justify-center rounded-lg text-center">
        <img
          src="src/assets/home/mobile/image-speaker-zx9.png"
          alt=""
          className="w-1/2"
        />
        <HeadingXL>
          <span className="text-white">ZX9 SPEAKER</span>
        </HeadingXL>
        <Body color="white">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Body>
        <ButtonBlack>See product</ButtonBlack>
      </div>

      <div className="bg-showcase-speaker-mobile bg-cover bg-center p-6 rounded-lg flex flex-col items-start justify-center gap-4 h-96">
        <HeadingS>ZX7 SPEAKER</HeadingS>
        <ButtonBlack>See Product</ButtonBlack>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <img
          src="src/assets/home/mobile/image-earphones-yx1.jpg"
          alt=""
          className="rounded-lg"
        />
        <div className="bg-gray-200 p-6 rounded-lg flex flex-col items-start justify-center gap-4 w-full">
          <HeadingS>YX1 EARPHONES</HeadingS>
          <ButtonBlack>See Product</ButtonBlack>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
