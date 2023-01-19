import Image from "next/image";
import CELANA from "../../public/CELANA.png";

const Checkoutfoto = () => {
  return (
    <>
    <div className="w-full md:w-64 lg:w-96 h-fit flex flex-col gap-4 ">
        <p className="text-hijau text-2xl font-semibold">Buy Now</p>
        <Image src={CELANA} className="w-full h-full rounded-xl overflow-hidden drop-shadow-xl"/>
    </div>

    <div className="">
        <p className="text-2xl font-bold pt-11 ">Men’s Long Pant Dark Blue </p>
        <p className="text-2xl font-bold">by SatFashion </p>
        <p className="text-sm ">324g </p>
        <div className="pt-10">
            <div className="bg-hijau text-white w-14 h-14 rounded-md justify-center items-center text-center flex text-lg ">M</div>
        </div>
        <div className="pt-10">
            <p className="font-bold text-2xl ">Rp.200.000</p>
        </div>
        <div className="pt-4 flex gap-4">
            <p className="text-hijau font-bold text-base">Additional Note</p>
            <div className="h-6 w-1  border-r-2"></div>
            <div className="w-40 h-6 border-2 border-svg rounded-md flex gap-14  justife-center items-center">
                <p className="pl-2">-</p>
                <p>1</p>
                <p className=" text-hijau font-bold ">+</p>
            </div>
        </div>
        <div className="pt-6 flex gap-8 ">
            <p className="font-bold text-xs">Warranty in case of damage</p>
            <div className="flex px-2">
                <p className="text-xs font-bold">Rp.10.000</p>
                <p className="text-xs text-svg pr-2">/item</p>
                <input type="checkbox" className="bg-hijau"></input>
            </div>
        </div>
    </div>
    </>
   
  );
};

export default Checkoutfoto;
