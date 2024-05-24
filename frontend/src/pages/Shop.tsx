import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useParams, Link } from "react-router-dom";
import Product from "./Product";

interface Product {
  id: number;
  name: string;
  href: string;
  price: string;
  description: string;
  options: string;
  imageSrc: string;
  imageAlt: string;
  sizes?: string[];
  colors?: string[];
  style?: string[];
}

interface CategoryData {
  id: number;
  category: string;
  items: Product[];
  filters: {
    name: string;
    id: string;
    options: { value: string; label: string }[];
  }[];
}

const products: CategoryData[] = [
  {
    id: 1,
    category: "Shirts",
    filters: [
      {
        id: "color",
        name: "Color",
        options: [
          { value: "white", label: "White" },
          { value: "beige", label: "Beige" },
          { value: "blue", label: "Blue" },
          { value: "brown", label: "Brown" },
          { value: "green", label: "Green" },
          { value: "purple", label: "Purple" },
        ],
      },
      {
        id: "sizes",
        name: "Sizes",
        options: [
          { value: "xs", label: "XS" },
          { value: "s", label: "S" },
          { value: "m", label: "M" },
          { value: "l", label: "L" },
          { value: "xl", label: "XL" },
          { value: "2xl", label: "2XL" },
        ],
      },
    ],
    items: [
      {
        id: 1,
        name: "Basic Tee 8-Pack",
        href: "Basic",
        price: "$256",
        description:
          "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
        options: "8 colors",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
        imageAlt:
          "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
        sizes: ["xl", "sm"],
        colors: ["purple", "beige"],
      },
      {
        id: 2,
        name: "Basic Tee",
        href: "#",
        price: "$32",
        description:
          "Look like a visionary CEO and wear the same black t-shirt every day.",
        options: "Black",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
        imageAlt: "Front of plain black t-shirt.",
        sizes: ["xl"],
        colors: ["purple"],
      },
    ],
  },
  {
    id: 2,
    category: "Trousers",
    filters: [
      {
        id: "color",
        name: "Color",
        options: [
          { value: "white", label: "White" },
          { value: "beige", label: "Beige" },
          { value: "blue", label: "Blue" },
          { value: "brown", label: "Brown" },
          { value: "green", label: "Green" },
          { value: "purple", label: "Purple" },
        ],
      },
      {
        id: "sizes",
        name: "Sizes",
        options: [
          { value: "28", label: "28" },
          { value: "30", label: "30" },
          { value: "32", label: "32" },
          { value: "34", label: "34" },
          { value: "36", label: "36" },
          { value: "38", label: "38" },
        ],
      },
    ],
    items: [
      {
        id: 1,
        name: "TestTrousers",
        href: "#",
        price: "$32",
        description:
          "Look like a visionary CEO and wear the same black t-shirt every day.",
        options: "Black",
        imageSrc:
          "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Front of plain black t-shirt.",
        sizes: ["34"],
        colors: ["Purple"],
      },
    ],
  },
  {
    id: 3,
    category: "Accessories",
    filters: [
      {
        id: "color",
        name: "Color",
        options: [
          { value: "white", label: "White" },
          { value: "beige", label: "Beige" },
          { value: "blue", label: "Blue" },
          { value: "brown", label: "Brown" },
          { value: "green", label: "Green" },
          { value: "purple", label: "Purple" },
        ],
      },
      {
        id: "style",
        name: "Style",
        options: [
          { value: "watches", label: "Watches" },
          { value: "hats", label: "Hats" },
          { value: "belts", label: "Belts" },
          { value: "wallets", label: "Wallets" },
        ],
      },
    ],
    items: [
      {
        id: 3,
        name: "Watch",
        href: "#",
        price: "$32",
        description:
          "Look like a visionary CEO and wear the same black t-shirt every day.",
        options: "Black",
        imageSrc:
          "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Front of plain black t-shirt.",
        colors: ["purple"],
        style: ["watches"],
      },
    ],
  },
  {
    id: 4,
    category: "Shoes",
    filters: [
      {
        id: "color",
        name: "Color",
        options: [
          { value: "white", label: "White" },
          { value: "beige", label: "Beige" },
          { value: "blue", label: "Blue" },
          { value: "brown", label: "Brown" },
          { value: "green", label: "Green" },
          { value: "purple", label: "Purple" },
        ],
      },
      {
        id: "sizes",
        name: "Sizes",
        options: [
          { value: "3", label: "3" },
          { value: "4", label: "4" },
          { value: "5", label: "5" },
          { value: "6", label: "6" },
          { value: "7", label: "7" },
          { value: "8", label: "8" },
          { value: "9", label: "9" },
          { value: "10", label: "10" },
          { value: "11", label: "11" },
          { value: "12", label: "12" },
        ],
      },
    ],
    items: [
      {
        id: 1,
        name: "Test-Shoes",
        href: "#",
        price: "$32",
        description:
          "Look like a visionary CEO and wear the same black t-shirt every day.",
        options: "Black",
        imageSrc:
          "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Front of plain black t-shirt.",
        sizes: ["3", "4"],
        colors: ["Purple"],
      },
    ],
  },
];

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Shop() {
  const { category = "" } = useParams<{ category: string | undefined }>();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [Filters, setFilters] = useState<Set<string>>(new Set());

  const categoryData = products.find(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  function updateFilters(checked: boolean, filter: string) {
    setFilters((prev) => {
      const next = new Set(prev);
      if (checked) {
        next.add(filter);
      } else {
        next.delete(filter);
      }
      return next;
    });
  }

  const filteredProducts =
    categoryData?.items.filter((product) => {
      const matchesSizes =
        Filters.size === 0 ||
        (product.sizes && product.sizes.some((size) => Filters.has(size)));
      const matchesColors =
        Filters.size === 0 ||
        (product.colors && product.colors.some((color) => Filters.has(color)));
      const matchesStyle =
        Filters.size === 0 ||
        (product.style && product.style.some((style) => Filters.has(style)));

      return matchesSizes || matchesColors || matchesStyle;
    }) || [];

  return (
    <div className="bg-palette-1">
      <div className=" mt-20 md:mt-12">
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="relative -mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {categoryData?.filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pb-4 pt-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-5 w-5 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pb-2 pt-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      onChange={(e) =>
                                        updateFilters(
                                          e.target.checked,
                                          option.value
                                        )
                                      }
                                      className="h-4 w-4 rounded border-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {category}
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Checkout out the latest release of Basic Tees, new and improved
              with four openings!
            </p>
          </div>

          <div className="pb-12 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Filters
                </span>
                <PlusIcon
                  className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                  {categoryData?.filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? undefined : "pt-10"}
                    >
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">
                          {section.name}
                        </legend>
                        <div className="space-y-3 pt-6">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                onChange={(e) =>
                                  updateFilters(e.target.checked, option.value)
                                }
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
            >
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <div className="transition-all ease-in-out grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <Link to={product.name} state={{ product }} key={product.id}>
                    <div
                      key={product.id}
                      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                    >
                      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                        />
                      </div>
                      <div className="flex flex-1 flex-col space-y-2 p-4">
                        <h3 className="text-sm font-medium text-gray-900">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {product.description}
                        </p>
                        <div className="flex flex-1 flex-col justify-end">
                          <p className="text-sm italic text-gray-500">
                            {product.options}
                          </p>
                          <p className="text-base font-medium text-gray-900">
                            {product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
