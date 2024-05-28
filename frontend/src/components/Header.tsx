import { useEffect, useState, Fragment, useContext } from "react";
import { Dialog, Transition, Popover } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import GarmsLogo from "../assets/Garms-Logo.tsx";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider.tsx";

const navigation = [
  { name: "Shirts", href: "Shop/Shirts" },
  { name: "Trousers", href: "Shop/Trousers" },
  { name: "Accessories", href: "Shop/Accessories" },
  { name: "Mission", href: "Mission" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const cart = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setHeaderVisible(
        scrollPosition > currentScrollPosition || currentScrollPosition < 10
      );
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-10 transition-transform duration-300 ${
        headerVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header className="w-100 bg-palette-1 text-gray-600">
        <div
          className="text-center  bg-palette-3 py-2 text-white"
          role="region"
          aria-label="Announcement"
        >
          <div className="page-width">
            <p className="announcement-bar__message center h5">
              Enjoy FREE UK Wide Shipping On Orders Over £59
            </p>
          </div>
        </div>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between"
          aria-label="Global"
        >
          <Link to="/">
            <GarmsLogo className="size-32 -m-4 hover:text-palette-3" />
          </Link>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-grey-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-20 ">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-lg font-semibold align-bottom hover:text-palette-3"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Popover className="flow-root text-sm lg:relative  pr-4 md:pr-12">
            <Popover.Button className="group -m-2 flex items-center p-2">
              <ShoppingBagIcon
                className="size-10 flex-shrink-0 text-gray-400 group-hover:text-palette-3"
                aria-hidden="true"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                {cart?.cartItems.length}
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel className="absolute inset-x-0 top-16  bg-palette-3 pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5 m-0 -mt-1">
                <h2 className="sr-only">Shopping Cart</h2>

                <form className="mx-auto max-w-2xl px-4">
                  <ul role="list" className="divide-y divide-palette-1">
                    {cart?.cartItems.length === 0 ? (
                      <li className="py-6 text-center">
                        <p className="text-palette-1">No Products selected</p>
                      </li>
                    ) : (
                      cart?.cartItems.map((product) => (
                        <li key={product.id} className="flex items-center py-6">
                          <img
                            src={product.images[0].imageSrc}
                            alt={product.images[0].imageAlt}
                            className="h-16 w-16 flex-none rounded-md border border-gray-200"
                          />
                          <div className="ml-4 flex-auto">
                            <h3 className="font-medium text-palette-1">
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="text-white">{product.color}</p>
                          </div>
                        </li>
                      ))
                    )}
                  </ul>

                  <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-palette-1 px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:text-palette-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Checkout
                  </button>

                  <p className="mt-6 text-center">
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-300 hover:text-palette-1"
                    >
                      View Shopping Bag
                    </a>
                  </p>
                </form>
              </Popover.Panel>
            </Transition>
          </Popover>
        </nav>
        <Transition
          show={mobileMenuOpen}
          as={Dialog}
          className="lg:hidden "
          onClose={() => setMobileMenuOpen(false)}
        >
          {" "}
          <Transition.Child
            as={Fragment}
            enter="duration-300 transition ease-in-out duration-500 transform"
            enterFrom="opacity-0 translate-x-2/3"
            enterTo="opacity-100 translate-x-0"
            leave="duration-200 transition ease-in-out duration-500 transform"
            leaveFrom="opacity-100  translate-x-0"
            leaveTo="opacity-0 translate-x-2/3"
          >
            <div className="fixed inset-0 z-10">
              <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-hidden bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link to="/" className="-m-1.5 p-1.5">
                    <GarmsLogo className="size-32 -m-4 hover:text-palette-3" />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="my-20 flow-root">
                  <div className="my-6 divide-y divide-gray-500/10">
                    <div className="space-y-10 py-6 text-center align-middle">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-mx-3 block rounded-lg px-3 py-10 subtitle-text font-semibold leading-7 text-black-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Transition>
      </header>
    </div>
  );
}
