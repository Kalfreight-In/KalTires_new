import React, { useEffect } from 'react';
import Head from 'next/head';
import HeroSection from '../Components/Home/HeroSection';

const data = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Home/HomePageSlider-1.png',
    Heading: 'TRANSFORMING TRUCKING DYNAMICS',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique arcu a nisi, semper. Ut cras odio ac sem ac.',

    CTA1: { heading: 'Inventory', link: 'contactus' },
    CTA12: { heading: 'Inventory', link: 'contactus' },
  },
];

const Credit = () => {
  useEffect(() => {
    let r;
    const d = document;
    const gt = d.getElementById;
    const cr = d.createElement;
    const tg = d.getElementsByTagName;
    const id = 'aidaform-embed';
    if (!gt.call(d, id)) {
      r = cr.call(d, 'script');
      r.id = id;
      r.src = 'https://embed.aidaform.com/embed.js';
      (d.head || tg.call(d, 'head')[0]).appendChild(r);
    }
  }, []);
  return (
    <>
      <Head>
        <script />
      </Head>
      <HeroSection data={data[0]} />
      <div className="text-center 2xl:text-5xl text-black py-12">
        Credit Application
      </div>
      <div
        data-aidaform-widget="form-2019-12"
        data-url="https://shantanu.aidaform.com/credit-aplication"
        data-width="100%"
        data-height="500px"
        data-do-resize
      />
    </>
  );
};

export default Credit;
