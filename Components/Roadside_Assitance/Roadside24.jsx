import Image from 'next/image';
import { IoIosCheckmark } from 'react-icons/io';
import { MdLocalPhone } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import servicetruck from '../../Assets/Images/Roadside_Assistance/servicetruck.png';

const Roadside = () => (
  <div id="roadmain">
    <div id="roadmaininner">
      <div className="bg-bg-white-1">
        <div className="lg:grid lg:grid-cols-2">
          <div className="lg:hidden  flex justify-center">
            <h2 className="text-3xl tracking-tight  text-black font-poppins font-semibold">
              <span className="block">
                <span className="text-kaltire-red">24 / 7</span> ROADSIDE
                ASSITANCE
              </span>
            </h2>
          </div>
          <div className="lg:relative lg:mt-32">
            <Image
              className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
              src={servicetruck}
              alt="servicetruck"
            />
          </div>

          <div className="py-12 md:px-10 px-6 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
            <h2 className="text-3xl tracking-tight  text-black font-poppins font-semibold hidden lg:block">
              <span className="block">
                <span className="text-kaltire-red">24 / 7</span> ROADSIDE
                ASSITANCE
              </span>
            </h2>
            <p className="text-black mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <div className="inline-block py-3">
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
            </div>
            {/* The Phone and Email icons start  */}
            <div className="block pt-4" id="PhoneEmailRoad" />
            <div id="InnerphoneEmailRoad" className="flex">
              <div id="Hotline" className="flex items-center">
                <div id="Hotline-first" className="md:mx-4 mx-2">
                  <MdLocalPhone className="h-6 w-6 text-kaltire-red" />
                </div>
                <div id="Hotline-second">
                  <h1 className="font-bold">Hot Line</h1>
                  <p>800-808-0025</p>
                </div>
              </div>
              <div id="LiveChat" className="md:ml-6 ml-10 flex items-center">
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
export default Roadside;
