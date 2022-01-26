import React from 'react';
import './LifestyleImg.css';

const LifestyleImg = () => {
  return (
    <div className='container'>
      <div className="row lifestyle_img_wrapper">
        <div className="col-lg-3">
          <img className='img-fluid w-100' src="https://demos.jeweltheme.com/alpena/images/featured/3.jpg" alt="" />
          <div className="life_style_text">
            <small className='ubuntu_fonts'>Life style </small>
            <h4>Perfect Weekend Day</h4>
          </div>
        </div>
        <div className="col-lg-3">
        <img className='img-fluid w-100' src="https://demos.jeweltheme.com/alpena/images/featured/4.jpg" alt="" />
        <div className="life_style_text">
            <small className='ubuntu_fonts'>Life style </small>
            <h4>Saturday Trip</h4>
          </div>
        </div>
        
        <div className="col-lg-3">
          <img className='img-fluid w-100' src="https://demos.jeweltheme.com/alpena/images/featured/2.jpg" alt="" />
           <div className="life_style_text">
            <small className='ubuntu_fonts'>Life style </small>
            <h4>Brunch Autumn Party </h4>
          </div>
        </div>
        <div className="col-lg-3">
          <img className='img-fluid w-100' src="https://demos.jeweltheme.com/alpena/images/featured/1.jpg" alt="" />
           <div className="life_style_text">
            <small className='ubuntu_fonts'>Life style </small>
            <h4>Best From Notting Hill</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifestyleImg;