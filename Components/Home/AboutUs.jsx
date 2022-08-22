import React from 'react';
import Image from 'next/image';
import { MdLocalPhone } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import AboutUsTire from '../../Assets/Images/Home/AboutUsTire.png';
import TireIcon from '../../Assets/Images/Home/Tire_Icon.png';

import useMediaQuery from '../../Hooks/CustomMediaQuery';

export const AboutUs = () => {
  const isDesktop = useMediaQuery('(min-width:1148px)');
  return (
    <div id="specialmain">
      <div
        id="specialmaininner"
        style={{
          backgroundImage:
            // eslint-disable-next-line operator-linebreak
            'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Home/AboutUs_background.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="">
          <div className="lg:grid lg:grid-cols-12 items-center ">
            <div className="lg:hidden block">
              <h2 className="text-3xl tracking-tight pb-4 text-black font-poppins font-semibold lg:block text-center">
                <span className="block">About us</span>
              </h2>
            </div>
            <div className="lg:hidden block">
              <div className="lg:relative lg:mt-4 self-start ">
                <Image
                  className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
                  src={AboutUsTire}
                  alt="tires"
                />
              </div>
            </div>
            <div />
            <div
              //   className="py-12 md:px-10 px-6 lg:px-0 max-w-3xl lg:max-w-md mx-auto col-span-2 "
              className="lg:py-12 md:px-10 px-6 lg:px-0  col-span-4 max-w-5xl  mx-auto  text-center lg:text-left "
            >
              <h2 className="text-3xl tracking-tight  text-black font-poppins font-semibold lg:block hidden">
                <span className="block">About us</span>
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
                <br />
                <br />
                cum animi, totam assumenda. Commodi quaerat consequuntur maxime,
                rem quis, enim, velit provident asperiores voluptatem voluptate
                esse reiciendis vitae ipsa hic. Dolor excepturi et veniam!
                Quaerat omnis optio reiciendis asperiores soluta dolorem?
              </p>

              {/* <div className="inline-block py-3">

              {/* The Phone and Email icons start  */}
              <div className="flex flex-row ">
                <div className="flex flex-col bg-zinc-50 p-8 mr -4">
                  <Image src={TireIcon} />
                  <div className="text-center">
                    Commercial <br />
                    Tires
                  </div>
                </div>
                <div className="flex flex-col bg-zinc-50 p-8 mx-4">
                  <Image src={TireIcon} />
                  <div className="text-center">
                    Agricultural <br />
                  </div>
                </div>
                <div className="flex flex-col bg-zinc-50 p-8 mx-4">
                  <Image src={TireIcon} />
                  <div className="text-center">
                    Agricultural <br />
                    Tires
                  </div>
                </div>
              </div>

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
                </div>
              </div>
            </div>
            <div />
            <div className="lg:block hidden col-span-6  mr-20">
              <div className="  ">
                <Image className="  " src={AboutUsTire} alt="tires" />
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
