import React from 'react';
import Image from 'next/image';
import { MdLocalPhone } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import blacktire from '../../Assets/Images/Whatweoffer/speciality/blacktire.png';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

export const Speciality = () => {
  const isDesktop = useMediaQuery('(min-width:1148px)');
  return (
    <div id="specialmain">
      <div
        id="specialmaininner"
        style={{
          backgroundImage:
            // eslint-disable-next-line operator-linebreak
            'url(' +
            'https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/speciality/cooperbackg.png' +
            ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="bg-speciality-background">
          <div className="lg:grid lg:grid-cols-3 items-center">
            <div className="lg:hidden block">
              <h2 className="text-3xl tracking-tight pb-4 text-black font-poppins font-semibold lg:block text-center">
                <span className="block">Speciality</span>
              </h2>
            </div>
            <div className="lg:hidden block">
              <div className="lg:relative lg:mt-4 self-start ">
                <Image
                  className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
                  src={blacktire}
                  alt="tires"
                />
              </div>
            </div>
            <div
              //   className="py-12 md:px-10 px-6 lg:px-0 max-w-3xl lg:max-w-md mx-auto col-span-2 "
              className="lg:py-12 md:px-10 px-6 lg:px-0 max-w-5xl  mx-auto col-span-2  text-center lg:text-left"
            >
              <h2 className="text-3xl tracking-tight  text-black font-poppins font-semibold lg:block hidden">
                <span className="block">Speciality</span>
              </h2>
              <p className="text-black mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus architecto facere corporis vitae, voluptatem optio
                molestiae neque omnis doloribus inventore nulla aliquid. Ipsum
                velit excepturi corporis esse autem blanditiis veritatis! Veniam
                officia, autem ducimus vitae ex ea. Possimus, magnam, autem
                repellat inventore voluptate sit tempore soluta cupiditate
                explicabo quod quos similique debitis temporibus. Maiores
                officia vitae culpa eum porro fugit cupiditate aliquam,
                dignissimos adipisci minima voluptate eos enim{' '}
                {isDesktop ? (
                  <>
                    <br />
                    <br />
                  </>
                ) : null}
                cum animi, totam assumenda. Commodi quaerat consequuntur maxime,
                rem quis, enim, velit provident asperiores voluptatem voluptate
                esse reiciendis vitae ipsa hic. Dolor excepturi et veniam!
                Quaerat omnis optio reiciendis asperiores soluta dolorem?
              </p>
              {/* <div className="inline-block py-3">
              <p className="pt-2">
                <div className="flex items-center ">
                  <span>
                    <IoIosCheckmark className="h-12 w-12 text-kaltire-red" />
                  </span>
                  <span>Lorem ipsum dolor sit.</span>
                </div>
              </p>
              <p className="pt-2">
                <div className="flex items-center ">
                  <span>
                    <IoIosCheckmark className="h-12 w-12 text-kaltire-red" />
                  </span>
                  <span>Lorem ipsum dolor sit.</span>
                </div>
              </p>
              <p className="pt-2">
                <div className="flex items-center ">
                  <span>
                    <IoIosCheckmark className="h-12 w-12 text-kaltire-red" />
                  </span>
                  <span>Lorem ipsum dolor sit.</span>
                </div>
              </p>
              <p className="pt-2">
                <div className="flex items-center ">
                  <span>
                    <IoIosCheckmark className="h-12 w-12 text-kaltire-red" />
                  </span>
                  <span>Lorem ipsum dolor sit.</span>
                </div>
              </p>
            </div> */}
              {/* The Phone and Email icons start  */}
              <div className="block pt-4 " id="PhoneEmailRoad" />
              <div
                id="InnerphoneEmailRoad"
                className="md:flex hidden mt-8 justify-center lg:justify-start"
              >
                <div className="flex lg:justify-center lg:pb-0 pb-4 ">
                  <div
                    id="Hotline"
                    className="flex items-center lg:pr-0 md:pr-4 pr-0"
                  >
                    <div id="Hotline-first" className="md:mx-4 mx-2 ">
                      <MdLocalPhone className="h-6 w-6 text-kaltire-red" />
                    </div>
                    <div id="Hotline-second">
                      <h1 className="font-bold">Hot Line</h1>
                      <p>800-808-0025</p>
                    </div>
                  </div>
                  <div
                    id="LiveChat"
                    className="md:ml-6 ml-10 flex items-center lg:pr-0 pr-4 "
                  >
                    <div id="LivechatFirst" className="md:mx-4 mx-2">
                      <BiMessageDetail className="h-6 w-6 text-kaltire-red" />
                    </div>
                    <div id="LivechatSecond">
                      <h1 className="font-bold">Live Chat </h1>
                      <p>Chat with experts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:block hidden">
              <div className="lg:relative lg:mt-4 self-start ">
                <Image
                  className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
                  src={blacktire}
                  alt="tires"
                />
              </div>
            </div>
            <div
              id="InnerphoneEmailRoad"
              className="md:hidden flex mt-8 justify-center lg:justify-start"
            >
              <div className="flex lg:justify-center lg:pb-0 pb-4 ">
                <div
                  id="Hotline"
                  className="flex items-center lg:pr-0 md:pr-4 pr-0"
                >
                  <div id="Hotline-first" className="md:mx-4 mx-2 ">
                    <MdLocalPhone className="h-6 w-6 text-kaltire-red" />
                  </div>
                  <div id="Hotline-second">
                    <h1 className="font-bold">Hot Line</h1>
                    <p>800-808-0025</p>
                  </div>
                </div>
                <div
                  id="LiveChat"
                  className="md:ml-6 ml-10 flex items-center lg:pr-0 pr-4 "
                >
                  <div id="LivechatFirst" className="md:mx-4 mx-2">
                    <BiMessageDetail className="h-6 w-6 text-kaltire-red" />
                  </div>
                  <div id="LivechatSecond">
                    <h1 className="font-bold">Live Chat </h1>
                    <p>Chat with experts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Phone and Email icons end */}
          </div>
        </div>
      </div>
    </div>
  );
};
