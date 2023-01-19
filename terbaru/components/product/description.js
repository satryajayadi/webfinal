import { Rate } from "../svg";

const Description = () => {
  return (
    <div className="w-full md:w-2/4 h-fit">
      <p className="text-4xl font-bold">
        Men’s Long Pant Dark Blue by SatFashion
      </p>
      <div className="md:flex items-center gap-6 hidden">
        <Rate />
        <p className="text-xl font-bold pb-2">.</p>
        <p>4.9</p>
        <p className="text-xl font-bold pb-2">.</p>
        <p>2.3k+ Reviews</p>
        <p className="text-xl font-bold pb-2">.</p>
        <p>2.9k+ Sold</p>
      </div>
      <div className="pt-2 md:pt-24">
        <p>Choose size</p>
        <div className="flex gap-4">
          <div className="w-14 h-14 border rounded-md flex items-center justify-center font-bold">
            S
          </div>
          <div className="w-14 h-14 border rounded-md flex items-center justify-center font-bold bg-hijau text-white">
            M
          </div>
          <div className="w-14 h-14 border rounded-md flex items-center justify-center font-bold">
            L
          </div>
          <div className="w-14 h-14 border rounded-md flex items-center justify-center font-bold">
            XL
          </div>
        </div>
      </div>
      <div className="flex pt-10 gap-4 border-b">
        <p className="border-b pb-2 border-hijau text-hijau">About Item</p>
        <p className="border-b pb-2 border-transparent text-svg">Reviews</p>
      </div>
      <div className="flex flex-row gap-4 py-2">
        <div>
          <p>
            Brand: <span className="text-black font-bold">SatFashin</span>
          </p>
          <p>
            Category: <span className="text-black font-bold">Pants</span>
          </p>
          <p>
            Condition: <span className="text-black font-bold">New</span>
          </p>
        </div>
        <div>
          <p>
            Color <span className="text-black font-bold">Black</span>
          </p>
          <p>
            Material <span className="text-black font-bold">Cotton</span>
          </p>
          <p>
            Heavy <span className="text-black font-bold">324g</span>
          </p>
        </div>
      </div>
      <div>
        <p className="text-black font-bold">Description</p>
      </div>

      <p>· Long pants with very suitable for use anytime & anywhere</p>
      <p>· Chat us if there is anything you need to ask about the product :)</p>
      <p>· With good color of dark blue</p>
      <p>· Indonesian product With 100% quality</p>
      <button className="text-hijau py-4 font-bold">See less</button>

      <div>
        <p>Shipping Information:</p>
        <p>
          Arrive:{" "}
          <span className="font-bold">
            Estimated arrival on 18 - 20 Januari 2022
          </span>
        </p>
        <p>
          Delivery:{" "}
          <span className="font-bold">Shipping from Bandung, Indonesia</span>
        </p>
        <p>
          Shipping: <span className="font-bold">FREE Internation Shipping</span>
        </p>
      </div>
    </div>
  );
};

export default Description;
