import {
  SvgMobile,
  SvgLocation,
  SvgSearch,
  SvgBasket,
  SvgAccount,
  SvgNotification,
  SvgArrowProfile,
} from "./svg";
import Image from "next/image";
import Logo from "../public/logobener.png";

const Navbar = () => {
  return (
    <>
      <div className="bg-satrya w-full h-10 px-44 flex items-center justify-between">
        <div className=" flex gap-2 items-center ">
          <SvgMobile />
          <p className="text-svg text-xs ">Download SatFashion app now</p>
        </div>
        <div className="text-svg text-xs flex gap-3 item-">
          <p>Promo</p>
          <p>Help & Center</p>
          <p>SatFashion Store</p>
          <p>Language</p>
        </div>
      </div>
      {/**Navbar 1 */}
      <div className="bg-satrya2 w-full h-24 flex items-center px-44 gap-4 ">
        <Image width={150} height={90} src={Logo} />
        <div className="w-full">
          <div className="flex text-svg text-xs gap-1 ">
            <SvgLocation />
            <p>Deliver to</p>
          </div>
          <div>
            <p className="text-white font-semibold">Denpasar, Indonesia</p>
          </div>
        </div>
        <div className="relative flex items-center">
          <select className="bg-white h-[40px] rounded-l-md bg-[#6C6C6C] text-xs text-svg pl-1">
            <option>All Category</option>
            <option>T-shirt</option>
            <option>Shirt</option>
            <option>Bag</option>
            <option>Pants</option>
            <option>Best Product</option>
            <option>Special Product</option>
            <option>Cap</option>
          </select>
          <input className="bg-white w-80 p-2 rounded-r-md" />
          <div className="absolute top-0 right-0 bg-hijau  rounded-r-md p-[9.5px]  ">
            <SvgSearch />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <SvgBasket />
          <div className="w-1 h-7 bg-svg"></div>
          <SvgNotification />
          <SvgAccount />
          <SvgArrowProfile />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;
