import Image from 'next/image';
import { ImPhone } from 'react-icons/im';
import onsiteone from '../../Assets/Images/Onsite_Service/onsiteone.png';
import onsitetwo from '../../Assets/Images/Onsite_Service/onsitetwo.png';
import onsitethree from '../../Assets/Images/Onsite_Service/onsitethree.png';
import onsitefour from '../../Assets/Images/Onsite_Service/onsitefour.png';
import onsitefive from '../../Assets/Images/Onsite_Service/onsitefive.png';
import onsitesix from '../../Assets/Images/Onsite_Service/onsitesix.png';
import onsiteseven from '../../Assets/Images/Onsite_Service/onsiteseven.png';
import onsiteeight from '../../Assets/Images/Onsite_Service/onsiteeight.png';
import onsitenine from '../../Assets/Images/Onsite_Service/onsitenine.png';
import onsiteten from '../../Assets/Images/Onsite_Service/onsiteten.png';
import { Onsitecomponentdata } from '../../data/data';

// const data = Onsitecomponentdata.grids[0];
// console.log(data);

const Onsiteservice = () => (
  <div id="onsitemain">
    <div id="onsitemaininner">
      <div id="maingrid">
        <div
          id="grid"
          className="grid gap-x-4    bg-bg-white-1   grid-cols-onsiteTemplate pt-20 px-4"
        >
          <div className="bg-bg-white-1 text-center">
            <div className="flex justify-center">
              <div className="w-onsiteimage h-onsiteimage flex">
                <Image src={onsiteone} alt="service" />
              </div>
            </div>

            <h1 className="lg:text-xl text-lg font-bold font-poppins ">
              On Site Service
            </h1>
            <p className="pt-6 lg:text-sm font-normal px-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <div className="flex justify-center">
              <div className="w-onsiteimage h-onsiteimage">
                <Image src={onsitetwo} alt="service" />
              </div>
            </div>
            <h1 className="lg:text-xl text-lg font-bold font-poppins">
              Nationwide Presence
            </h1>
            <p className="pt-6 lg:text-sm font-normal px-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <div className="flex justify-center">
              <div className="w-onsiteimage h-onsiteimage">
                <Image src={onsitethree} alt="service" />
              </div>
            </div>
            <h1 className="lg:text-xl text-lg font-bold font-poppins">
              Tire Replacement
            </h1>
            <p className="pt-6 lg:text-sm font-normal px-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <div
              className=" flex justify-center
           "
            >
              <div className="w-onsiteimage h-onsiteimage">
                {' '}
                <Image src={onsitefour} alt="service" />
              </div>
            </div>
            <h1 className="lg:text-xl text-lg font-bold font-poppins">
              Light Mechanical Services
            </h1>
            <p className="pt-6 lg:text-sm font-normal px-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <div className="flex justify-center">
              <div className="w-onsiteimage h-onsiteimage">
                <Image src={onsitefive} alt="service" />
              </div>
            </div>
            <h1 className="lg:text-xl text-lg font-bold font-poppins">
              Wheel mounting
            </h1>
            <p className="pt-6 lg:text-sm font-normal px-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <div className="flex justify-center">
              <div className="w-onsiteimage h-onsiteimage">
                <Image src={onsitesix} alt="service" />
              </div>
            </div>
            <h1 className="lg:text-xl text-lg font-bold font-poppins">
              Commercial Oil Change
            </h1>
            <p className="pt-6 lg:text-sm font-normal px-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <div className="flex justify-center">
              <div className="w-onsiteimage h-onsiteimage">
                <Image src={onsiteseven} alt="service" />
              </div>
            </div>
            <h1 className="lg:text-xl text-lg font-bold font-poppins">
              Competitive Price
            </h1>
            <p className="pt-6 lg:text-sm font-normal px-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <div className="flex justify-center">
              <div className="w-onsiteimage h-onsiteimage">
                <Image src={onsiteeight} alt="service" />
              </div>
            </div>
            <h1 className="lg:text-xl text-lg font-bold font-poppins">
              Freindly & Experience <br /> Technicians
            </h1>
            <p className="pt-6 lg:text-sm font-normal px-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <div className="flex justify-center">
              <div className="w-onsiteimage h-onsiteimage">
                <Image src={onsitenine} alt="service" />
              </div>
            </div>
            <h1 className="lg:text-xl text-lg font-bold font-poppins">
              Tire Balancing
            </h1>
            <p className="pt-6 lg:text-sm font-normal px-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <div className="flex justify-center">
              <div className="w-onsiteimage h-onsiteimage">
                <Image src={onsiteten} alt="services" />
              </div>
            </div>
            <h1 className="lg:text-xl text-lg font-bold font-poppins">
              Flat Tire Repair
            </h1>
            <p className="pt-6 lg:text-sm font-normal px-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
        </div>
      </div>

      {Onsitecomponentdata.map((onsite) => (
        <div id="secondonsite" className="mt-12 mb-4" key={onsite.id}>
          <div id="innersecondonsite" className="text-center">
            <h1 className="md:text-2xl font-bold font-poppins">
              {onsite.heading}
            </h1>
            <p className="pt-2 md:text-xl text-onsite-text font-poppins lg:px-80 px-8">
              {onsite.desc}
            </p>
            <div className="flex justify-center mt-8">
              <button className="flex items-center bg-kaltire-red py-3 px-12 text-white lg:text-2xl lg:font-bold">
                <span>
                  <ImPhone className="text-2xl" />
                </span>
                &nbsp; {onsite.BTN}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* <div id="secondonsite" className="mt-12 mb-4">
        <div id="innersecondonsite" className="text-center">
          <h1 className="md:text-2xl font-bold font-poppins">
            Do you Need Roadside Assistance Now?
          </h1>
          <p className="pt-2 md:text-xl text-onsite-text font-poppins lg:px-80 px-8">
            Many new women Hosts have started hosting on Airbnb during the
            pandemic, and women with only one listing have collectively earned
            over a half billion{' '}
          </p>
          <div className="flex justify-center mt-8">
            <button className="flex items-center bg-kaltire-red py-3 px-12 text-white lg:text-2xl lg:font-bold">
              <span>
                <ImPhone className="text-2xl" />
              </span>
              &nbsp; 800-808-0025
            </button>
          </div>
        </div>
      </div> */}
    </div>
  </div>
);
export default Onsiteservice;
