import React from 'react';
import { Departments } from '../Components/Careers/Departments';
import { PerkBenifits } from '../Components/Careers/PerkBenifits';
import { Ykvl } from '../Components/Careers/Ykvl';
import { SubResume } from '../Components/Careers/SubResume';
import { CareersHeader } from '../Components/Careers/CareersHeader';

const Careers = () => (
  <div>
    <CareersHeader />
    <Ykvl />
    <Departments />
    <PerkBenifits />
    <SubResume />
  </div>
);

export default Careers;
