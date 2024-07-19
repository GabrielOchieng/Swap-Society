import chef from "../assets/images/chef.avif";
import decor from "../assets/images/decor.avif";
import girl from "../assets/images/girl.webp";
import necklace from "../assets/images/necklace.webp";
import portrait from "../assets/images/portrait.avif";
import vintage from "../assets/images/vintage.avif";

const Trends = () => {
  return (
    <div className="flex flex-col items-center p-8 gap-10 bg-gray-100">
      <div>
        <h4 className="font-bold text-gray-500 text-xl md:text-2xl">
          Check out the latest trends.
        </h4>
      </div>
      <div className="flex justify-between gap-4 flex-wrap">
        <div className="flex flex-col items-center gap-2">
          <img src={chef} alt="trending items" className="rounded-full" />
          <h6 className="font-semibold">Chef's Kiss</h6>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={vintage} alt="trending items" className="rounded-full" />
          <h6 className="font-semibold">Colourful Vintage Glassware</h6>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={portrait} alt="trending items" className="rounded-full" />
          <h6 className="font-semibold">Creative Couple's Portraits</h6>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={girl} alt="trending items" className="rounded-full" />
          <h6 className="font-semibold">Garden Girl</h6>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={necklace} alt="trending items" className="rounded-full" />
          <h6 className="font-semibold">Charm Necklaces</h6>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={decor} alt="trending items" className="rounded-full" />
          <h6 className="font-semibold">Chrome Decor</h6>
        </div>
      </div>
    </div>
  );
};

export default Trends;
