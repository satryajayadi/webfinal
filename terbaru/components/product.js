import Image from "next/image";
import PENDEK from "../public/PENDEK.png";
import CELANA from "../public/CELANA.png";
import HOODIE from "../public/HOODIE.png";
import SEPATU from "../public/SEPATU.png";
import KEMEJA from "../public/KEMEJA.png";
import Link from "next/link";

const Product = () => {
  return (
    <div className="border border-gray-300 rounded-xl p-4">
      <div className="flex flex-row items-center gap-x-4 justify-between">
        <div className="flex flex-row items-center gap-x-4">
          <p className="text-xs md:text-xl font-bold">
            Special Product for you
          </p>
          <div className="flex flex-row items-center gap-x-2">
            <p className="text-sm text-svg">Ends in</p>
            <div className="p-2 bg-pink-500 w-8 h-8 flex items-center justify-center rounded-md text-white">
              01
            </div>
            <p>:</p>
            <div className="p-2 bg-pink-500 w-8 h-8 flex items-center justify-center rounded-md text-white">
              01
            </div>
            <p>:</p>
            <div className="p-2 bg-pink-500 w-8 h-8 flex items-center justify-center rounded-md text-white">
              01
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-4">
          <p className="text-xs md:text-md font-bold text-hijau">See more</p>
        </div>
      </div>
      <div className="w-full overflow-x-scroll my-10 flex flex-row gap-x-4">
        <div className="w-52 h-80 border rounded-md overflow-hidden flex-none">
          <div className="w-52 h-fit">
            <Image src={SEPATU} />
          </div>
          <Link href={"/product"}>
            <div className="p-2">
              <p>Sneakers Low Type Black by SatFashionas</p>
            </div>
          </Link>
        </div>
        <div className="w-52 h-80 border rounded-md overflow-hidden flex-none">
          <div className="w-52 h-fit">
            <Image src={HOODIE} />
          </div>
          <div className="p-2">
            <p>Sneakers Low Type Black by SatFashionas</p>
          </div>
        </div>
        <div className="w-52 h-80 border rounded-md overflow-hidden flex-none">
          <div className="w-52 h-fit">
            <Image src={KEMEJA} />
          </div>
          <div className="p-2">
            <p>Sneakers Low Type Black by SatFashionas</p>
          </div>
        </div>
        <div className="w-52 h-80 border rounded-md overflow-hidden flex-none">
          <div className="w-52 h-fit">
            <Image src={PENDEK} />
          </div>
          <div className="p-2">
            <p>Sneakers Low Type Black by SatFashionas</p>
          </div>
        </div>
        <div className="w-52 h-80 border rounded-md overflow-hidden flex-none">
          <div className="w-52 h-fit">
            <Image src={CELANA} />
          </div>
          <div className="p-2">
            <p>Sneakers Low Type Black by SatFashionas</p>
          </div>
        </div>
        <div className="w-52 h-80 border rounded-md overflow-hidden flex-none">
          <div className="w-52 h-fit">
            <Image src={SEPATU} />
          </div>
          <div className="p-2">
            <p>Sneakers Low Type Black by SatFashionas</p>
          </div>
        </div>
        <div className="w-52 h-80 border rounded-md overflow-hidden flex-none">
          <div className="w-52 h-fit">
            <Image src={SEPATU} />
          </div>
          <div className="p-2">
            <p>Sneakers Low Type Black by SatFashionas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
