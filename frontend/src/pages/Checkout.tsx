import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";
import { Link } from "react-router-dom";

const discount = { code: "CHEAPSKATE", amount: 24 };

const shipping = 22;

export default function Checkout() {
  let cart = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const taxes = (subTotal - discount.amount) / 10;

  useEffect(() => {
    if (cart?.cartItems) {
      const newTotal = cart.getCartTotal();
      setSubTotal(newTotal);
    }

    if (cart?.cartItems) {
      const newTotal = subTotal - taxes - shipping + discount.amount;
      let stringTotal = newTotal.toFixed(2);
      setTotal(Number(stringTotal));
    }
  }, [cart?.cartItems, total]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(
      `this is a test submission, you have ordered: ${cart?.cartItems.map(
        (item) => {
          return [
            "item: " + `${item.name} `,
            "color: " + item.color,
            "size: " + item.size,
            "quantity: " + item.quantity,
          ];
        }
      )} The total price is: ${total}`
    );
  };

  return (
    <>
      <main className="pt-32 pr-0.5 lg:flex lg:min-h-full lg:flex-row-reverse ">
        <h1 className="sr-only">Checkout</h1>

        {/* Mobile order summary */}
        <section
          aria-labelledby="order-heading"
          className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden"
        >
          <Disclosure as="div" className="mx-auto max-w-lg">
            {({ open }) => (
              <>
                <div className="flex items-center justify-between">
                  <h2
                    id="order-heading"
                    className="text-lg font-medium text-gray-900"
                  >
                    Your Order
                  </h2>
                  <DisclosureButton className="font-medium text-indigo-600 hover:text-indigo-500">
                    {open ? (
                      <span>Hide full summary</span>
                    ) : (
                      <span>Show full summary</span>
                    )}
                  </DisclosureButton>
                </div>

                <DisclosurePanel>
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 border-b border-gray-200"
                  >
                    {cart?.cartItems.map((product) => (
                      <li key={product.id} className="flex space-x-6 py-6">
                        <img
                          src={product.image.imageSrc}
                          alt={product.image.imageAlt}
                          className="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"
                        />
                        <div className="flex flex-col justify-between space-y-4">
                          <div className="space-y-1 text-sm font-medium">
                            <h3 className="text-gray-900">{product.name}</h3>
                            <p className="text-gray-900">{product.price}</p>
                            <p className="text-gray-500">{product.color}</p>
                            <p className="text-gray-500">{product.size}</p>
                          </div>
                          <div className="flex space-x-4">
                            <Link
                              to={`../Shop/${product.category}/${product.name}`}
                            >
                              <button
                                type="button"
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Edit
                              </button>
                            </Link>
                            <div className="flex border-l border-gray-300 pl-4">
                              <button
                                type="button"
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={() => {
                                  cart.removeAllFromCart(product);
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <form className="mt-10">
                    <label
                      htmlFor="discount-code-mobile"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Discount code
                    </label>
                    <div className="mt-1 flex space-x-4">
                      <input
                        type="text"
                        id="discount-code-mobile"
                        name="discount-code-mobile"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <button
                        type="submit"
                        className="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                      >
                        Apply
                      </button>
                    </div>
                  </form>

                  <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd className="text-gray-900">{subTotal}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="flex">
                        Discount
                        <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">
                          {discount.code}
                        </span>
                      </dt>
                      <dd className="text-gray-900">£{discount.amount}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Taxes</dt>
                      <dd className="text-gray-900">£{taxes}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Shipping</dt>
                      <dd className="text-gray-900">£{shipping}</dd>
                    </div>
                  </dl>
                </DisclosurePanel>

                <p className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
                  <span className="text-base">Total</span>
                  <span className="text-base">{total}</span>
                </p>
              </>
            )}
          </Disclosure>
        </section>

        {/* Order summary */}
        <section
          aria-labelledby="summary-heading"
          className="hidden w-full max-w-md flex-col lg:flex overflow-hidden pt-10 xl:mr-10"
        >
          <h2 id="summary-heading" className="sr-only">
            Order summary
          </h2>

          <ul
            role="list"
            className="flex-row divide-y divide-gray-200 overflow-y-auto px-6 max-h-96"
          >
            {cart?.cartItems.map((product) => (
              <li key={product.id} className="flex space-x-6 py-6">
                <img
                  src={product.image.imageSrc}
                  alt={product.image.imageAlt}
                  className="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"
                />
                <div className="flex flex-col justify-between space-y-4">
                  <div className="space-y-1 text-sm font-medium">
                    <h3 className="text-gray-900">{product.name}</h3>
                    <p className="text-gray-900">{product.price}</p>
                    <p className="text-gray-500">{product.color}</p>
                    <p className="text-gray-500">{product.size}</p>
                  </div>
                  <div className="flex space-x-4">
                    <Link to={`../Shop/${product.category}/${product.name}`}>
                      <button
                        type="button"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Edit
                      </button>
                    </Link>
                    <div className="flex border-l border-gray-300 pl-4">
                      <button
                        type="button"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => {
                          cart.removeAllFromCart(product);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">
            <form>
              <label
                htmlFor="discount-code"
                className="block text-sm font-medium text-gray-700"
              >
                Discount code
              </label>
              <div className="mt-1 flex space-x-4">
                <input
                  type="text"
                  id="discount-code"
                  name="discount-code"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <button
                  type="submit"
                  className="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Apply
                </button>
              </div>
            </form>

            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">£{subTotal}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="flex">
                  Discount
                  <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">
                    {discount.code}
                  </span>
                </dt>
                <dd className="text-gray-900">
                  -£{discount.amount.toFixed(2)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd className="text-gray-900">£{taxes.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="text-gray-900">£{shipping.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                <dt className="text-base">Total</dt>
                <dd className="text-base">£{total}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Checkout form */}
        <section
          aria-labelledby="payment-heading"
          className="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0 overflow-x-hidden"
        >
          <div className="mx-auto max-w-lg pt-24">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-black py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              <span className="sr-only">Pay with Apple Pay</span>
              <svg
                className="h-5 w-auto"
                fill="currentColor"
                viewBox="0 0 50 20"
              >
                <path d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />
              </svg>
            </button>

            <div className="relative mt-8">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
            </div>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-12 gap-x-4 gap-y-6">
                <div className="col-span-full">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700 pt-10"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="name-on-card"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name on card
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name-on-card"
                      name="name-on-card"
                      autoComplete="cc-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="card-number"
                      name="card-number"
                      autoComplete="cc-number"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-8 sm:col-span-9">
                  <label
                    htmlFor="expiration-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiration date (MM/YY)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="expiration-date"
                      id="expiration-date"
                      autoComplete="cc-exp"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-4 sm:col-span-3">
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVC
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      autoComplete="csc"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-4">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-4">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="region"
                      name="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-4">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postal code
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="postal-code"
                      name="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-2">
                <div className="flex h-5 items-center">
                  <input
                    id="same-as-shipping"
                    name="same-as-shipping"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <label
                  htmlFor="same-as-shipping"
                  className="text-sm font-medium text-gray-900"
                >
                  Billing address is the same as shipping address
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-md border border-transparent bg-palette-3 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-palette-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Pay £{total}
              </button>

              <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
                <LockClosedIcon
                  className="mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Payment details stored in plain text
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
