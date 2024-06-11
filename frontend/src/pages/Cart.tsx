import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { CartContext } from "../context/CartProvider";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart?.cartItems) {
      const newTotal = cart.getCartTotal();
      setTotal(newTotal);
    }
    console.log(cart?.cartItems);
  }, [cart?.cartItems]);

  return (
    <>
      <div className="bg-palette-1 pt-24">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
          <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>

          <form className="mt-12">
            <section aria-labelledby="cart-heading">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              {cart?.cartItems.length === undefined ? (
                <ul
                  role="list"
                  className="divide-y divide-gray-200 border-b border-t border-gray-200"
                >
                  {cart?.cartItems.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className="flex-shrink-0">
                        <img
                          src={product.image.imageSrc}
                          alt={product.image.imageAlt}
                          className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                        <div>
                          <div className="flex justify-between">
                            <h4 className="text-sm">
                              <Link
                                to={`Shop/${product.category}/${product.name}`}
                                className="font-medium text-gray-700 hover:text-gray-800"
                              >
                                {product.name}
                              </Link>
                            </h4>

                            <p className="ml-4 text-sm font-medium text-gray-900 text-center">
                              £{product.price}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.size}
                          </p>
                        </div>

                        <div className="mt-4 flex flex-1 items-end justify-between">
                          <div className="ml-4">
                            <button
                              type="button"
                              className="text-sm font-medium text-palette-3 hover:text-palette-2"
                            >
                              <span
                                onClick={() => {
                                  cart.removeAllFromCart(product);
                                }}
                              >
                                Remove
                              </span>
                            </button>
                          </div>
                          <div className="flex flex-row gap-2">
                            <PlusCircleIcon
                              onClick={() => {
                                cart.addToCart(product);
                              }}
                              className="size-6 hover:text-palette-3"
                            />
                            <p>{product.quantity}</p>
                            <MinusCircleIcon
                              onClick={() => {
                                cart.removeFromCart(product);
                              }}
                              className="size-6 hover:text-palette-3 "
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center"> No Items In Cart</div>
              )}
            </section>

            {/* Order summary */}
            <section aria-labelledby="summary-heading" className="mt-10">
              <h2 id="summary-heading" className="sr-only">
                Order summary
              </h2>

              <div>
                <dl className="space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Subtotal
                    </dt>
                    <dd className="ml-4 text-base font-medium text-gray-900">
                      £{total}
                    </dd>
                  </div>
                </dl>
                <p className="mt-1 text-sm text-gray-500">
                  Shipping and taxes will be calculated at checkout.
                </p>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-palette-3  px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-palette-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Checkout
                </button>
              </div>

              <div className="mt-6 text-center text-sm">
                <p>
                  or{" "}
                  <Link
                    to="../Shop"
                    className="font-medium text-palette-3 hover:text-palette-2"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
              </div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}
