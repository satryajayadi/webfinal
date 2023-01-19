import Navbar from "../components/navbar";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Checkoutfoto from "../components/product/checkoutfoto";
import Checkfoto2 from "../components/product/checkfoto2";

const Checkout = () => {
    return (
        <>
        
        <div className="bg-bg2">
        <div className="p-6 flex flex-col md:flex-col lg:flex-row w-full gap-14 px-44">
        <Checkoutfoto />
        </div>
        <div className="px-44 pt-16">
            <Checkfoto2/>
        </div>
        </div>
        
        </>
    )
    
}   


Checkout.layout = Layout;
export default Checkout;