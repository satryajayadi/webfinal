import { SvgAccount, SvgArrow} from "../svg"
import Image from "next/image"
import Bcafoto from "../../public/Bcafoto.png"

const Checkfoto2 = () => {
    return (
        <div className="flex-col gap-4 flex">
            <p className="font-extrabold text-2xl "> Delivery and Payment</p>
            <div className="w-1/2 h-72  rounded-md bg-white ">
                <div className="pl-12 py-7 flex  "><SvgAccount />
                    <p className="font-bold text-xs pt-1">Satrya Jayadi</p>
                </div>
                <div className="flex  pb-1">
                <p className="text-xs pl-12 flex items-center">Jl. Tukad Petanu, Kec. Denpasar Sel., Kota Denpasar, Bali, 80224 [SatFashion Note: Tempat batako]Denpasar Selatan,... </p>
                <div className="">
                    <SvgArrow/>
                </div>
                </div>

                <div className="flex w-full h-32 border border-r-0 border-l-0 flex gap-32 items-center pl-12">
                    <div className="flex-col gap-4 flex  ">
                        <p className="text-xl font-bold">Chose Delivery</p>
                            <select className="w-56 h-7 border rounded-md border border-hijau">
                                <option>Reguler</option>
                                <option>Express</option>
                                <option>Extra Express</option>
                            </select>
                  </div>
                    <div className="flex-col gap-4 flex flex-col ">
                        <p className="text-xl font-bold">Chose Courier</p>
                            <select className="w-56 h-7 border rounded-md">
                                <option>JNE Reg (Rp.12.000)</option>
                                <option>JNT Reg(Rp.12.500)</option>
                                <option>Ninja Express Reg(Rp.13.000)</option>
                            </select>
                    </div>
                 </div>
                            <div className="flex pl-12 pt-7 gap-3 items-center">
                                <Image src={Bcafoto}/>
                                <p className="font-bold text-xl ">BCA VirtuaL Account</p>
                                <div className="pl-96">
                                    <SvgArrow/>
                                </div>
                            </div>
                </div>
         </div>
          
        
    )
}

export default Checkfoto2