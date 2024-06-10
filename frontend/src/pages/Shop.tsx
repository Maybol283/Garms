import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useParams, Link } from "react-router-dom";
import Breadcrumbs from "../components/BreadCrumbs";
import { CategoryData, ProductData } from "../interface";
import { getCategory } from "../ApiCalls";
import { useTrail, useTransition, animated } from "@react-spring/web";
import Footer from "../components/Footer";

const products: CategoryData[] = [
  {
    id: 1,
    category: "Shirts",
    description: "This is the shirts section",
    filters: [
      {
        id: "color",
        name: "Color",
        options: [
          { value: "white", label: "White", inStock: true },
          { value: "beige", label: "Beige", inStock: true },
          { value: "blue", label: "Blue", inStock: true },
          { value: "brown", label: "Brown", inStock: true },
          { value: "green", label: "Green", inStock: true },
          { value: "purple", label: "Purple", inStock: true },
        ],
      },
      {
        id: "size",
        name: "Size",
        options: [
          { value: "xs", label: "XS", inStock: true },
          { value: "s", label: "S", inStock: true },
          { value: "m", label: "M", inStock: true },
          { value: "l", label: "L", inStock: true },
          { value: "xl", label: "XL", inStock: true },
          { value: "2xl", label: "2XL", inStock: true },
        ],
      },
    ],
    items: [],
  },
  {
    id: 2,
    category: "Trousers",
    description: "This is the Trousers section",
    filters: [
      {
        id: "color",
        name: "Color",
        options: [
          { value: "white", label: "White", inStock: true },
          { value: "beige", label: "Beige", inStock: true },
          { value: "blue", label: "Blue", inStock: true },
          { value: "brown", label: "Brown", inStock: true },
          { value: "green", label: "Green", inStock: true },
        ],
      },
      {
        id: "size",
        name: "Size",
        options: [
          { value: "28", label: "28", inStock: true },
          { value: "30", label: "30", inStock: true },
          { value: "32", label: "32", inStock: true },
          { value: "34", label: "34", inStock: true },
        ],
      },
    ],
    items: [],
  },
  {
    id: 3,
    category: "Accessories",
    description: "This is the Accessories section",
    filters: [
      {
        id: "color",
        name: "Color",
        options: [
          { value: "white", label: "White", inStock: true },
          { value: "beige", label: "Beige", inStock: true },
          { value: "blue", label: "Blue", inStock: true },
          { value: "brown", label: "Brown", inStock: true },
          { value: "green", label: "Green", inStock: true },
          { value: "purple", label: "Purple", inStock: true },
        ],
      },
      {
        id: "style",
        name: "Style",
        options: [
          { value: "watches", label: "Watches", inStock: true },
          { value: "hats", label: "Hats", inStock: true },
          { value: "belts", label: "Belts", inStock: true },
          { value: "wallets", label: "Wallets", inStock: true },
        ],
      },
    ],
    items: [],
  },
  {
    id: 4,
    category: "Shoes",
    description: "This is the Shoes section",
    filters: [
      {
        id: "color",
        name: "Color",
        options: [
          { value: "white", label: "White", inStock: true },
          { value: "beige", label: "Beige", inStock: true },
          { value: "blue", label: "Blue", inStock: true },
          { value: "brown", label: "Brown", inStock: true },
          { value: "green", label: "Green", inStock: true },
        ],
      },
      {
        id: "size",
        name: "Size",
        options: [
          { value: "6", label: "6", inStock: true },
          { value: "7", label: "7", inStock: true },
          { value: "8", label: "8", inStock: true },
          { value: "9", label: "9", inStock: true },
          { value: "10", label: "10", inStock: true },
        ],
      },
    ],
    items: [],
  },
];

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Shop() {
  const { category = "" } = useParams<{ category: string | undefined }>();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sizeFilters, setSizeFilters] = useState<Set<string>>(new Set());
  const [colorFilters, setColorFilters] = useState<Set<string>>(new Set());
  const [updatedProducts, setUpdatedProducts] = useState(products);
  const [loading, setLoading] = useState(true);
  const trails = useTrail(3, {
    from: { opacity: 0, y: 10 },
    to: { opacity: 1, y: 0 },
    loop: true,
    duration: 5000,
  });

  useEffect(() => {
    async function fetchData() {
      const response: ProductData[] = await getCategory(category);

      // Find and update the target category after fetching data
      const targetCategory = products.find(
        (prod) => prod.category === category
      );
      if (targetCategory) {
        targetCategory.items = response;
        setUpdatedProducts((prevProducts) =>
          prevProducts.map((prod) =>
            prod.category === category ? { ...prod, items: response } : prod
          )
        );
      }
    }

    fetchData().then(() => {
      setLoading(false);
    });
  }, [category]);

  const categoryData = updatedProducts.find(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  function updateFilters(checked: boolean, filter: string, type: string) {
    if (type === "Size") {
      setSizeFilters((prev) => {
        const next = new Set(prev);
        if (checked) {
          next.add(filter);
        } else {
          next.delete(filter);
        }
        return next;
      });
    } else if (type === "Color") {
      setColorFilters((prev) => {
        const next = new Set(prev);
        if (checked) {
          next.add(filter);
        } else {
          next.delete(filter);
        }
        return next;
      });
    }
  }

  function categoryDescription(category: string) {
    switch (category) {
      case "Shirts":
        return "This is the shirts section";
      case "Trousers":
        return "This is the trousers section";
      case "Accessories":
        return "This is the accessories section";
      default:
        return "This is the shoes section";
    }
  }

  const filteredProducts =
    categoryData?.items.filter((product) => {
      const matchesSizes =
        sizeFilters.size === 0 ||
        product.sizes?.some(
          (size) => sizeFilters.has(size.name) && size.inStock
        );

      const matchesColors =
        colorFilters.size === 0 ||
        product.colors?.some((color) => colorFilters.has(color.name));

      // If both filters are applied, the product must match both
      if (sizeFilters.size > 0 && colorFilters.size > 0) {
        return matchesSizes && matchesColors;
      }

      // If only one type of filter is applied, allow matching on that single filter
      if (sizeFilters.size > 0) {
        return matchesSizes;
      }

      if (colorFilters.size > 0) {
        return matchesColors;
      }

      // If no filters are applied, show all products
      return true;
    }) || [];

  const transitions = useTransition(filteredProducts, {
    keys: (product) => product.id,
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    trail: 200,
  });

  return (
    <>
      <div className="bg-palette-1">
        <div className="md:mt-12 bg-palette-1">
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
                                            option.value,
                                            section.name
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

          <Breadcrumbs margin={"-mb-12 pt-32"} />

          <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 ">
            <div className="pb-10 pt-28">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                {category}
              </h1>

              <p className="mt-4 text-base text-gray-500">
                {categoryDescription(category)}
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
                                    updateFilters(
                                      e.target.checked,
                                      option.label,
                                      section.name
                                    )
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

                {!loading ? (
                  <div className="transition-all ease-in-out grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                    {transitions((style, product) => (
                      <Link
                        to={product.name}
                        state={{ product }}
                        key={product.id}
                      >
                        <animated.div
                          style={style}
                          className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                        >
                          <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                            <img
                              src={product.images[0].imageSrc}
                              alt={product.images[0].imageSrc}
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
                              <p className="text-base font-medium text-gray-900">
                                {product.price}
                              </p>
                            </div>
                          </div>
                        </animated.div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2 pt-24">
                    {trails.map((props) => (
                      <animated.div
                        style={props}
                        className="w-8 h-8 bg-palette-3 rounded-full"
                      />
                    ))}
                  </div>
                )}
              </section>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
