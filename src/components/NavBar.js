import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Search from "./Search";
import { useSelector } from "react-redux";

const NavBar = () => {
    const cart = useSelector((state) => state.cart.productsNumber);
    return (
        <header className="min-w-[1000px]">
            <div className="flex bg-amazonclone text-white h-[60px] border-b-2 max-lg:flex-wrap max-lg:h-auto">
                {/* Left */}
                <div className="flex items-center m-4 max-lg:w-full max-lg:m-1">
                    <Link to={"/"}>
                        <img
                            className="h-[35px] w-[100px] m-2 max-lg:h-[25px]"
                            src={"../images/amazon.png"}
                            alt="Amazon logo"
                        />
                    </Link>
                    <div className="pr-4 pl-4">
                        <div className="text-xs xl:text-sm">Deliver to</div>
                        <div className="text-sm xl:text-base font-bold">United Kingdom</div>
                    </div>
                </div>
                {/* Middle */}
                <div className="flex grow relative items-center max-lg:w-full max-lg:m-1">
                    <Search />
                </div>
                {/* Right */}
                <div className="flex items-center m-4 max-lg:w-full max-lg:m-1">
                    <div className="pr-4 pl-4">
                        <div className="text-xs xl:text-sm">Hello, sign in</div>
                        <div className="text-sm xl:text-base font-bold">
                            Accounts & Lists
                        </div>
                    </div>
                    <div className="pr-4 pl-4">
                        <div className="text-xs xl:text-sm">Returns</div>
                        <div className="text-sm xl:text-base font-bold">& Orders</div>
                    </div>
                    <Link to={"/checkout"}>
                        <div className="flex pr-3 pl-3">
                            <ShoppingCartIcon className="h-[48px] text-white"  />
                            <div className="relative">
                                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                                    {cart}
                                </div>
                            </div>
                            <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex bg-amazonclone text-white gap-5 text-xs xl:text-sm p-2 pl-6 max-sm:hidden">
                <div>Today's Deals</div>
                <div>Customer Service</div>
                <div>Registry</div>
                <div>Gift Cards</div>
                <div>Sell</div>
            </div>
        </header>
    )
}


export default NavBar;