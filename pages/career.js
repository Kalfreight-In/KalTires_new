import React from 'react';
import { Departments } from '../Components/Career/Departments';
import { PerkBenifits } from '../Components/Career/PerkBenifits';
import { Ykvl } from '../Components/Career/Ykvl';
import { SubResume } from '../Components/Career/SubResume';

const career = () => (
  <div>
    <Ykvl />
    <Departments />
    <PerkBenifits />
    <SubResume />
  </div>
);

export default career;
