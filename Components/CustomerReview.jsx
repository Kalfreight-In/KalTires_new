import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/Ai';

const data = [{
    stars: 4,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    Name: "RandomUser"

},
{
    stars: 4,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    Name: "RandomUser"

}{
    stars: 5,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    Name: "RandomUser"

}{
    stars: 3,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    Name: "RandomUser"

}]

const CustomerReview = () => {
  return (
    <div className="flx flex-col justify-center">
      <div className="text-black">Testimonial's</div>
    {data.map((d)=>{
        <div>
            <div><AiFillHeart/><AiFillHeart/><AiFillHeart/><AiFillHeart/></div>
            <div>{d.description}</div>
        </div>
    })}
    </div>
  );
};

export default CustomerReview;
