import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Input } from '../components/Input';

export const Checkout: FC = () => {
  const navigate = useNavigate();
  const [isEMoney, setIsEMoney] = useState(true);

  return (
    <main className="bg-[#fafafa]">
      <div className="flex items-center justify-center bg-black">
        <div className="w-full sm:w-5/6 lg:w-3/4">
          <Header />
        </div>
      </div>
      <section className="mt-4 flex justify-center">
        <div className="w-5/6 sm:w-4/5 2xl:w-[1500px]">
          <p
            className="font-medium text-black/[.5] text-[15px] mb-6"
            onClick={() => navigate(-1)}
          >
            Go Back
          </p>

          <div className="bg-white rounded-[8px] p-6">
            <h1 className="font-bold text-[28px] tracking-[1px] mb-8">
              checkout
            </h1>
            <p className="uppercae text-primary font-bold text-[13px] leading-[25px] tracking-[0.93px] mb-4">
              billing details
            </p>
            <Input label="Name" placeholder="Alexei Ward" className="mb-6" />
            <Input
              label="Email Address"
              placeholder="alexei@mail.com"
              className="mb-6"
            />
            <Input
              label="Phone Number"
              placeholder="+1 202-555-0136"
              className="mb-8"
            />
            <p className="uppercae text-primary font-bold text-[13px] leading-[25px] tracking-[0.93px] mb-4">
              shipping info
            </p>
            <Input
              label="Your Address"
              placeholder="1137 Williams Avenue"
              className="mb-6"
            />
            <Input label="ZIP Code" placeholder="10001" className="mb-6" />
            <Input label="City" placeholder="New York" className="mb-6" />
            <Input
              label="Country"
              placeholder="United States"
              className="mb-6"
            />
            <p className="uppercae text-primary font-bold text-[13px] leading-[25px] tracking-[0.93px] mb-4">
              payment details
            </p>
            <div className="flex flex-col">
              <p className="mb-4 font-bold text-[12px] tracking-[-0.21px]">
                payment method
              </p>
              <div className="border border-[#CFCFCF] px-4 py-5 rounded-[8px] mb-4">
                <input
                  type="radio"
                  name="payment-method"
                  id="e-money"
                  onChange={() => setIsEMoney(true)}
                  checked={isEMoney}
                />
                <label className="pl-4" htmlFor="e-money">
                  e-Money
                </label>
              </div>

              <div className="border border-[#CFCFCF] px-4 py-5 rounded-[8px]">
                <input
                  type="radio"
                  name="payment-method"
                  id="cash"
                  onChange={() => setIsEMoney(false)}
                  checked={!isEMoney}
                />
                <label className="pl-4" htmlFor="cash">
                  Cash on Delivery
                </label>
              </div>
            </div>
            {isEMoney ? (
              <div className="mt-8">
                <Input
                  label="e-Money Number"
                  placeholder="238521993"
                  className="mb-6"
                />
                <Input label="e-Money PIN" placeholder="6891" />
              </div>
            ) : (
              <div className="mt-8">
                <img
                  src="src/assets/checkout/icon-cash-on-delivery.svg"
                  className="mb-5"
                />
                <p className="font-medium text-[15px] leading-[25px] text-black/[.5]">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
          <div className="mt-8 bg-white rounded-[8px] px-6 py-8">
            <p className="uppercase font-bold text-[18px] tracking-[1.29px] mb-8">
              summary
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
