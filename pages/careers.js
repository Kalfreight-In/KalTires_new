import React from 'react';
import { Departments } from '../Components/Career/Departments';
import { PerkBenifits } from '../Components/Career/PerkBenifits';
import { Ykvl } from '../Components/Career/Ykvl';
import { SubResume } from '../Components/Career/SubResume';
import { careerHeader } from '../Components/Career/careerHeader';

const career = () => (
  <div>
    <careerHeader />
    <Ykvl />
    <Departments />
    <PerkBenifits />
    <SubResume />
  </div>
);

export default career;
