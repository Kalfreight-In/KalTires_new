import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SafetyOtrFeatures = ({ data }) => {
  return (
    <div>
      <motion.div>
        <div className="lg:grid mx-4   lg:grid-cols-2 grid-cols-1 lg:place-content-center lg:place-items-center justify-center w-screen ">
          {data.map((el, id) => (
            <motion.div
              whileInView={{ x: [-200, 0], opacity: [0, 0.2, 0.5, 1] }}
            >
              <div
                className="lg:w-1/2 my-6 flex lg:justify-center items-center flex-row "
                key={id}
              >
                <div className="lg:mr-8 mr-2 h-full">
                  <Image src={el.Icon} className=""></Image>
                </div>
                <div className="flex justify-center  flex-col">
                  <div className="text-black font-bold">{el.Heading}</div>
                  <div className={`horizontal-line-red  my-2  lg:w-1/2`}></div>
                  <div className="text-black">{el.Description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SafetyOtrFeatures;
