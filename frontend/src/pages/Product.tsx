import { useState, useContext, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import Carousel from "../components/Carousel";
import Breadcrumbs from "../components/BreadCrumbs";
import { CartItem, ProductData } from "../interface";
import { CartContext } from "../context/CartProvider";
import { useParams } from "react-router";
import { getItem } from "../ApiCalls";

const policies = [
  {
    name: "International delivery",
    icon: GlobeAmericasIcon,
    description: "Get your order in 2 years",
  },
  {
    name: "Loyalty rewards",
    icon: CurrencyDollarIcon,
    description: "Don't look at other tees",
  },
];

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { category = "" } = useParams<{ category: string | undefined }>();
  const { item = "" } = useParams<{ item: string | undefined }>();
  const cart = useContext(CartContext);

  console.log(category);
  let imageSources = product?.images.map((image) => image.imageSrc);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await getItem(item);
        setProduct(response[0]);
        console.log(response[0]);
        setSelectedColor(response[0].colors[0]?.name);
        setSelectedSize(response[0].sizes[0]?.name);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching item:", error);
        setError("Failed to fetch product data.");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const productToAdd: CartItem = {
      id: product.id + " " + selectedColor + " ",
      category: category,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: {
        imageSrc: product.images[0].imageSrc,
        imageAlt: product.images[0].imageAlt,
      },
      color: selectedColor,
    };

    if (selectedSize) {
      productToAdd.size = selectedSize;
      productToAdd.id += selectedSize;
    }

    cart?.addToCart(productToAdd);
  };

  return (
    <div className="bg-palette-1">
      <div className="pb-16 pt-48">
        <Breadcrumbs />
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mx-auto lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                  {product.name}
                </h1>
                <p className="text-xl font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
              {/* Reviews */}
              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {product?.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product?.rating && product.rating > rating
                            ? "text-palette-3"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0 hover:text-palette-3"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    className="ml-4 text-sm text-gray-300"
                  >
                    ·
                  </div>
                  <div className="ml-4 flex">
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-600 hover:text-palette-3"
                    >
                      See all {product.reviewCount} reviews
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:mx-auto lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0 flex justify-center ">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 w-96 ">
                <Carousel items={imageSources} />
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form onSubmit={handleSubmit}>
                {/* Color picker */}
                {product.colors && product.colors.length > 0 ? (
                  <div>
                    <h2 className="text-sm font-medium text-gray-900">Color</h2>

                    <fieldset aria-label="Choose a color" className="mt-2">
                      <RadioGroup
                        value={selectedColor}
                        onChange={setSelectedColor}
                        className="flex items-center space-x-3"
                      >
                        {product.colors.map((color) => (
                          <Radio
                            key={color.name}
                            value={color.name}
                            aria-label={color.name}
                            className={({ focus, checked }) =>
                              classNames(
                                focus && checked ? "ring ring-offset-1" : "",
                                !focus && checked ? "ring-2" : "",
                                `ring-${color.sample} relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none`
                              )
                            }
                          >
                            <span
                              aria-hidden="true"
                              className={`bg-${color.sample} h-8 w-8 rounded-full border border-black border-opacity-10`}
                            />
                          </Radio>
                        ))}
                      </RadioGroup>
                    </fieldset>
                  </div>
                ) : null}

                {/* Size picker */}
                {product.sizes && product.sizes.length > 0 ? (
                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-medium text-gray-900">
                        Size
                      </h2>
                      <a
                        href="#"
                        className="text-sm font-medium text-gray-600 hover:text-palette-3"
                      >
                        See sizing chart
                      </a>
                    </div>

                    <fieldset aria-label="Choose a size" className="mt-2">
                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="grid grid-cols-3 gap-3 sm:grid-cols-6"
                      >
                        {product.sizes.map((size) => (
                          <Radio
                            key={size.name}
                            value={size.name}
                            className={({ focus, checked }) =>
                              classNames(
                                size.inStock
                                  ? "cursor-pointer focus:outline-none"
                                  : "cursor-not-allowed opacity-25",
                                focus
                                  ? "ring-2 ring-indigo-500 ring-offset-2"
                                  : "",
                                checked
                                  ? "border-transparent bg-palette-3 text-white hover:bg-palette-3"
                                  : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                                "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                              )
                            }
                            disabled={!size.inStock}
                          >
                            {size.name}
                          </Radio>
                        ))}
                      </RadioGroup>
                    </fieldset>
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-palette-3 px-8 py-3 text-base font-medium text-white hover:bg-palette-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div
                  className="prose prose-sm mt-4 text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-900">
                  Fabric &amp; Care
                </h2>

                <div className="prose prose-sm mt-4 text-gray-500">
                  <ul role="list">
                    {product.details &&
                      product.details.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>

              {/* Policies */}
              <section aria-labelledby="policies-heading" className="mt-10">
                <h2 id="policies-heading" className="sr-only">
                  Our Policies
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {policies.map((policy) => (
                    <div
                      key={policy.name}
                      className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                    >
                      <dt>
                        <policy.icon
                          className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="mt-4 text-sm font-medium text-gray-900">
                          {policy.name}
                        </span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">
                        {policy.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
