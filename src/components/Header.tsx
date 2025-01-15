import { Link } from "react-router-dom";
import Plus from "../assets/plus.svg";
import Search from "../assets/search.svg";
import Menu from "../assets/menu.svg";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full gap-5 px-5 pt-3 pb-2 group bg-dark-bg">
        <p className="text-sm font-normal text-top-text">
          Enjoy complimentary shipping and a pack of red envelopes with every
          deliver-to-door orders over HKD 900 by entering NY25 at checkout.
        </p>
        <img src={Plus} alt="plus icon" className="size-3" />
      </div>
      <div className="border border-b px-[34px] underline-offset-custom flex items-center justify-between w-full py-2 md:py-5 bg-top-text boreder border-b-border-btm">
        <nav className="items-center hidden gap-4 text-sm font-bold md:flex text-text">
          <Link to="" className="hover:underline">
            New & Notable
          </Link>
          <Link to="" className="hover:underline">
            Skin Care
          </Link>
          <Link to="" className="hover:underline">
            Hand & Body
          </Link>
          <Link to="" className="hover:underline">
            Home
          </Link>
          <Link to="" className="hover:underline">
            Hair
          </Link>
          <Link to="" className="hover:underline">
            Fragrance
          </Link>
          <Link to="" className="hover:underline">
            Kits & Travel
          </Link>
          <Link to="" className="hover:underline">
            Gifts
          </Link>
          <Link to="" className="hover:underline">
            Read
          </Link>
          <Link to="" className="hover:underline">
            Stores
          </Link>
          <Link to="" className="hover:underline">
            Facial Appointments
          </Link>

          <img src={Search} alt="search logo" className="size-6" />
        </nav>

        <nav className="items-center hidden gap-4 text-sm font-bold md:flex text-text">
          <Link to="" className="hover:underline">
            Login
          </Link>
          <Link to="" className="hover:underline">
            Cabinet
          </Link>
          <Link to="" className="hover:underline">
            Cart
          </Link>
        </nav>

        {/* mobile */}
        <img
          src={Menu}
          alt="mobile menu"
          className="size-6 md:hidden lg:hidden"
        />
        <p className="text-lg font-semibold md:hidden lg:hidden">Aesop</p>
        <nav className="flex items-center gap-4 text-sm font-bold md:hidden lg:hidden text-text">
          <Link to="" className="hover:underline">
            Login
          </Link>
          <Link to="" className="hover:underline">
            Cart
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
