import React from 'react';
import Head from 'next/head';
import { Departments } from '../Components/Career/Departments';
import { PerkBenifits } from '../Components/Career/PerkBenifits';
import { Ykvl } from '../Components/Career/Ykvl';
import { SubResume } from '../Components/Career/SubResume';
import { CareerHeader } from '../Components/Career/CareerHeader';

const career = () => (
  <div>
    <Head>
      <title> Make Your Career with KVL Tires – Join Us Today</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="We are looking for self-motivated & enthusiastic individuals to help us achieve the best in the Heavy Vehicle industry. Email your resume at info@kvltires.com"
      />

      <meta
        property="og:title"
        content="Make Your Career with KVL Tires – Join Us Today"
      />
      <meta
        property="og:url"
        content="https://www.kvltires.com/24X7-roadside-assistance"
      />
      <meta property="og:image" content="https://www.kvltires.com/careers" />
      <meta property="og:type" content="page" />
      <meta
        property="og:description"
        content="We are looking for self-motivated &amp; enthusiastic individuals to help us achieve the best in the Heavy Vehicle industry. Email your resume at info@kvltires.com"
      />
      <meta property="og:locale" content="en" />
    </Head>
    <CareerHeader />
    <Ykvl />
    <Departments />
    <PerkBenifits />
    <SubResume />
  </div>
);

export default career;
