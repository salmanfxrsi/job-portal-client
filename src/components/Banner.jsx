import Lottie from "lottie-react";
import bannerAnimation from "../assets/lottie/banner.json";
const Banner = () => {
  return (
    <div className="hero py-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie animationData={bannerAnimation}></Lottie>
        <div>
          <h1 className="text-5xl font-bold">Set Your Career Here!</h1>
          <p className="py-6">
            We provide a best service by our amazing website where everyone get
            there desire Job and they able to fixed there career. Explore now to
            get your Job Now.
          </p>
          <button className="btn btn-info">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
