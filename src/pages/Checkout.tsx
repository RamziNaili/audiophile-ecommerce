import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { useCartStore } from '../core/store/useCartStore';
import { Button } from '../components/Button';
import { Modal } from '../components/UI/Modal';
import { Thanks } from '../components/UI/Thanks';

import IconCashOnDelivery from '../assets/checkout/icon-cash-on-delivery.svg';

export const Checkout: FC = () => {
  const navigate = useNavigate();
  const [isEMoney, setIsEMoney] = useState(true);
  const { cartItems, totalPrice } = useCartStore((state) => state);
  const [isThanksOpen, setIsThanksOpen] = useState(false);

  const openModal = () => setIsThanksOpen(true);
  const closeModal = () => setIsThanksOpen(false);

  return (
    <main className="bg-[#fafafa] pb-28 sm:pb-24 md:pb-48">
      <div className="flex items-center justify-center bg-black">
        <div className="w-5/6 lg:w-3/4">
          <Header />
        </div>
      </div>
      <section className="mt-4 md:mt-12 xl:mt-20 flex justify-center">
        <div className="w-5/6 sm:w-4/5 2xl:w-[1500px]">
          <p
            className="font-medium text-black/[.5] text-[15px] mb-6 md:mb-10"
            onClick={() => navigate(-1)}
          >
            Go Back
          </p>
          <div className="xl:flex xl:justify-between gap-8">
            <div className="bg-white rounded-[8px] p-6 xl:w-[70%]">
              <h1 className="font-bold text-[28px] tracking-[1px] mb-8">
                checkout
              </h1>
              <p className="uppercae text-primary font-bold text-[13px] leading-[25px] tracking-[0.93px] mb-4">
                billing details
              </p>
              <div className="md:flex gap-4">
                <Input
                  label="Name"
                  placeholder="Alexei Ward"
                  className="mb-6 flex-1"
                />
                <Input
                  label="Email Address"
                  placeholder="alexei@mail.com"
                  className="mb-6 flex-1"
                />
              </div>
              <Input
                label="Phone Number"
                placeholder="+1 202-555-0136"
                className="mb-8"
                inputClassName="md:w-1/2"
              />
              <p className="uppercae text-primary font-bold text-[13px] leading-[25px] tracking-[0.93px] mb-4">
                shipping info
              </p>
              <Input
                label="Your Address"
                placeholder="1137 Williams Avenue"
                className="mb-6"
              />
              <div className="md:flex gap-4">
                <Input
                  label="ZIP Code"
                  placeholder="10001"
                  className="mb-6 flex-1"
                />
                <Input
                  label="City"
                  placeholder="New York"
                  className="mb-6 flex-1"
                />
              </div>
              <Input
                label="Country"
                placeholder="United States"
                className="mb-6"
                inputClassName="md:w-1/2"
              />
              <p className="uppercae text-primary font-bold text-[13px] leading-[25px] tracking-[0.93px] mb-4">
                payment details
              </p>
              <div className="flex flex-col">
                <div className="md:flex justify-between">
                  <p className="mb-4 font-bold text-[12px] tracking-[-0.21px]">
                    payment method
                  </p>
                  <div className="md:w-1/2">
                    <label
                      className="flex border border-[#CFCFCF] px-4 py-5 rounded-[8px] mb-4 cursor-pointer"
                      htmlFor="e-money"
                    >
                      <input
                        type="radio"
                        name="payment-method"
                        id="e-money"
                        onChange={() => setIsEMoney(true)}
                        checked={isEMoney}
                      />
                      <p className="pl-4">e-Money</p>
                    </label>

                    <label
                      className="flex border border-[#CFCFCF] px-4 py-5 rounded-[8px] mb-4 cursor-pointer"
                      htmlFor="cash"
                    >
                      <input
                        type="radio"
                        name="payment-method"
                        id="cash"
                        onChange={() => setIsEMoney(false)}
                        checked={!isEMoney}
                      />
                      <p className="pl-4">Cash on Delivery</p>
                    </label>
                  </div>
                </div>
              </div>
              {isEMoney ? (
                <div className="mt-8 md:flex gap-4">
                  <Input
                    label="e-Money Number"
                    placeholder="238521993"
                    className="mb-6 flex-1"
                  />
                  <Input
                    label="e-Money PIN"
                    placeholder="6891"
                    className="flex-1"
                  />
                </div>
              ) : (
                <div className="mt-8">
                  <img src={IconCashOnDelivery} className="mb-5" />
                  <p className="font-medium text-[15px] leading-[25px] text-black/[.5]">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>
            <div className="max-xl:mt-8 max-xl:mb-24 bg-white rounded-[8px] px-6 py-8 h-full flex-1">
              <p className="uppercase font-bold text-[18px] tracking-[1.29px] mb-8">
                summary
              </p>
              <div className="flex flex-col gap-4">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          'src/assets/cart/image-' + item.product.slug + '.jpg'
                        }
                        alt={item.product.name}
                        className="w-14 rounded-[8px]"
                      />
                      <div>
                        <p className="font-bold text-[15px] leading-[25px]">
                          {item.product.name.split(' ')[0]}
                        </p>
                        <p className="font-bold text-black/[.5] text-[14px] leading-[25px]">
                          $ {item.product.price}
                        </p>
                      </div>
                    </div>
                    <p className="font-bold text-[15px] leading-[25px]">x1</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-8">
                <p className="uppercase font-medium text-[15px] leading-[25px] text-black/[.5]">
                  total
                </p>
                <p className="font-bold text-[18px]">
                  ${' '}
                  {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="uppercase font-medium text-[15px] leading-[25px] text-black/[.5]">
                  shipping
                </p>
                <p className="font-bold text-[18px]">$ 50</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="uppercase font-medium text-[15px] leading-[25px] text-black/[.5]">
                  vat (included)
                </p>
                <p className="font-bold text-[18px]">
                  ${' '}
                  {Math.floor(totalPrice * 0.2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="uppercase font-medium text-[15px] leading-[25px] text-black/[.5]">
                  grand total
                </p>
                <p className="font-bold text-[18px] text-primary">
                  ${' '}
                  {(totalPrice + 50)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              </div>
              <Button className="w-full mt-8" onClick={openModal}>
                continue & pay
              </Button>
              {isThanksOpen && (
                <Modal isOpen={isThanksOpen} onClose={closeModal}>
                  <Thanks />
                </Modal>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
