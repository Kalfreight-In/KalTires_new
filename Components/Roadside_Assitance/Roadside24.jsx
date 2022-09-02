import Image from 'next/image';
// import { IoIosCheckmark } from 'react-icons/io';
import { MdLocalPhone } from 'react-icons/md';
// import { BiMessageDetail } from 'react-icons/bi';
import servicetruck from '../../Assets/Images/Roadside_Assistance/servicetruck.png';

const Roadside = () => (
  <div id="roadmain">
    <div id="roadmaininner">
      <div className="bg-bg-white-1">
        <div className="lg:grid lg:grid-cols-2">
          <div className="lg:hidden  flex justify-center z-10 relative">
            <h2 className="text-3xl tracking-tight  text-black font-poppins font-semibold ">
              <span className="block ">
                <span className="text-kaltire-red font-poppins">24 / 7</span>{' '}
                ROADSIDE ASSITANCE
              </span>
            </h2>
          </div>
          <div className="relative lg:my-12 lg:pl-12 z-0">
            <Image
              className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
              src={servicetruck}
              alt="servicetruck"
            />
          </div>
          <div className="flex items-center  xl:pt-32 2xl:pt-2 ">
            <div className="md:px-10 px-6 lg:px-0 max-w-4xl lg:max-w-md mx-12   pt-0">
              <h2 className="text-3xl tracking-tight  text-black font-poppins font-semibold hidden lg:block">
                <span className="block font-poppins">
                  <span className="text-kaltire-red font-poppins">24 / 7</span>
                  ROADSIDE ASSITANCE
                </span>
              </h2>
              <p className="text-black mt-5 font-poppins">
                We understand how much you depend on your vehicle. So, if you
                ever encounter a sudden blowout, get in touch with us for quick
                roadside assistance. We provide 24-hour breakdown services to
                everyone in need. With strategically located service facilities,
                we can effectively service most, if not all, of your emergency
                needs throughout North America. So next time, instead of
                searching for ‘roadside assistance near me’, call our 24/7/365
                service center at 800-808-0025. Our trained & knowledgeable
                staff are always ready to answer your service calls. Dial
                800-808-0025
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
              <div className="block pt-4" id="PhoneEmailRoad" />
              <div id="InnerphoneEmailRoad" className="flex">
                <div id="Hotline" className="flex items-center">
                  <div id="Hotline-first" className="md:mx-4 mx-2">
                    <MdLocalPhone className="h-6 w-6 text-kaltire-red" />
                  </div>
                  <div id="Hotline-second">
                    <h1 className="font-bold font-poppins">Hot Line</h1>
                    <p className="font-poppins">800-808-0025</p>
                  </div>
                </div>
                {/* <div id="LiveChat" className="md:ml-6 ml-10 flex items-center">
                  <div id="LivechatFirst" className="md:mx-4 mx-2">
                    <BiMessageDetail className="h-6 w-6 text-kaltire-red" />
                  </div>
                  <div id="LivechatSecond">
                    <h1 className="font-bold">Live Chat </h1>
                    <p>Chat with experts</p>
                  </div>
                </div> */}
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
