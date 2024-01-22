import { ButtonOrange } from "../shared/Buttons";

const Hero = ({ title }) => {
  if (title) {
    return (
      <section className="bg-black-900 py-24">
        <div
          className={`container-center h-[100%] grid items-center justify-center`}
        >
          <h2 className="text-white-900">{title}</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black-900 h-[729px]">
      <div
        className={`container-center h-[100%] grid items-center justify-center desktop:justify-start bg-hero`}
      >
        <div className="max-w-[396px] grid gap-6 text-center desktop:text-left justify-items-center desktop:justify-items-start">
          <span className="text-overline text-white-900/50">New product</span>
          <h1 className="text-white-900">XX99 Mark II HeadphoneS</h1>
          <span className="body text-white-900/75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </span>
          <ButtonOrange text={"See Product"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
