import Arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-[1800px] mx-auto px-[20px] md:px-[30px] lg:px-[60px]">
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-[40px] md:gap-[30px] lg:gap-[40px] mb-[80px] md:mb-[100px]">
          <div className="col-span-1 sm:col-span-2 md:col-span-5">
            <h3 className="text-[14px] md:text-[15px] lg:text-[16px] mb-[25px] md:mb-[30px] pb-4 border-b border-white">
              Subscribe to Aesop communications
            </h3>
            <div className="relative mb-[25px] md:mb-[30px]">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border border-white px-[15px] md:px-[20px] py-[12px] md:py-[16px] text-[13px] md:text-[14px] text-white placeholder-white"
              />
              <button className="absolute right-[15px] md:right-[20px] top-1/2 -translate-y-1/2 text-[20px] md:text-[24px]">
                →
              </button>
            </div>
            <div className="flex items-start gap-4 mb-[25px] md:mb-[30px]">
              <input
                type="checkbox"
                className="w-5 h-4 mt-1 bg-transparent border border-white appearance-none cursor-pointer checked:bg-white checked:border-white"
              />
              <p className="text-[12px] md:text-[13px] lg:text-[14px]">
                Subscribe to receive communications from Aesop. By subscribing,
                you confirm you have read and understood our
                <Link
                  to="/privacy"
                  className="ml-1 text-white underline transition-colors hover:text-gray-300"
                >
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-1 md:col-span-3">
            <h3 className="text-[14px] md:text-[15px] lg:text-[16px] mb-[25px] md:mb-[30px] pb-4 border-b border-white">
              Orders and support
            </h3>
            <ul className="space-y-[15px] md:space-y-[20px]">
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  Contact us <img src={Arrow} alt="arrow" className="size-4" />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  FAQs <img src={Arrow} alt="arrow" className="size-4" />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  Shipping <img src={Arrow} alt="arrow" className="size-4" />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  Returns <img src={Arrow} alt="arrow" className="size-4" />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors"
                >
                  Order history
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors"
                >
                  Terms and conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-1 md:col-span-2">
            <h3 className="text-[14px] md:text-[15px] lg:text-[16px] mb-[25px] md:mb-[30px] pb-4 border-b border-white">
              Services
            </h3>
            <ul className="space-y-[15px] md:space-y-[20px]">
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors"
                >
                  Live assistance
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors"
                >
                  Corporate gifts
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors"
                >
                  Facial Appointments
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors"
                >
                  Click and Collect
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors"
                >
                  Video consultation
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-1 md:col-span-2">
            <h3 className="text-[14px] md:text-[15px] lg:text-[16px] mb-[25px] md:mb-[30px] pb-4 border-b border-white">
              Location preferences
            </h3>
            <div className="space-y-[25px] md:space-y-[30px]">
              <div>
                <p className="text-[12px] md:text-[13px] mb-2">Shipping:</p>
                <Link
                  to=""
                  className="underline underline-offset-4 text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  Hong Kong, SAR
                </Link>
              </div>
              <div>
                <p className="text-[12px] md:text-[13px] mb-2">Language:</p>
                <div className="space-y-2">
                  <Link
                    to=""
                    className="underline underline-offset-4 text-[13px] md:text-[14px] text-white block hover:text-gray-300 transition-colors"
                  >
                    English
                  </Link>
                  <Link
                    to=""
                    className="text-[13px] md:text-[14px] text-white block hover:text-gray-300 transition-colors"
                  >
                    繁體中文
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-[40px] md:gap-[30px] lg:gap-[40px]">
          <div className="col-span-1 sm:col-span-2 md:col-span-5">
            <h3 className="text-[14px] md:text-[15px] lg:text-[16px] mb-[25px] md:mb-[30px] pb-4 border-b border-white">
              Sustainability
            </h3>
            <p className="text-[12px] md:text-[13px] lg:text-[14px] mb-[15px] md:mb-[20px]">
              All Aesop products are vegan, and we do not test our formulations
              or ingredients on animals. We are Leaping Bunny approved and a
              Certified B Corporation.
            </p>
            <Link
              to=""
              className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors flex items-center gap-1"
            >
              Learn more
            </Link>
          </div>

          <div className="col-span-1 sm:col-span-1 md:col-span-2">
            <h3 className="text-[14px] md:text-[15px] lg:text-[16px] mb-[25px] md:mb-[30px] pb-4 border-b border-white">
              About
            </h3>
            <ul className="space-y-[15px] md:space-y-[20px]">
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  Our story <img src={Arrow} alt="arrow" className="size-4" />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  Foundation <img src={Arrow} alt="arrow" className="size-4" />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  Careers <img src={Arrow} alt="arrow" className="size-4" />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-1 md:col-span-2">
            <h3 className="text-[14px] md:text-[15px] lg:text-[16px] mb-[25px] md:mb-[30px] pb-4 border-b border-white">
              Social media
            </h3>
            <ul className="space-y-[15px] md:space-y-[20px]">
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  Instagram <img src={Arrow} alt="arrow" className="size-4" />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  Twitter <img src={Arrow} alt="arrow" className="size-4" />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  LinkedIn <img src={Arrow} alt="arrow" className="size-4" />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  YouTube <img src={Arrow} alt="arrow" className="size-4" />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  Facebook <img src={Arrow} alt="arrow" className="size-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
