import React from 'react';
import SmallDarkGreenButton from '../Buttons/SmallDarkGreen/SmallDarkGreenButton';
import MediumLightGreenButton from '../Buttons/MediumLightGreen/MediumLightGreenButton';
import SmallLightBlueButton from '../Buttons/SmallLightBlue/SmallLightBlueButton';
import LargeDarkGreenButton from '../Buttons/LargeDarkGreen/LargeDarkGreenButton';
import './choose-challenge-page.css';

const ChooseChallengePage = () => {
  return (
    <div>
      <div>
      <h2 className="quote">"A journey of a thousand miles starts with one step"</h2>
      <h1 className="page-title">Choose your Challenge</h1>
      <div className="filter-button">
      <MediumLightGreenButton className="filter">Filter</MediumLightGreenButton>
      </div>
      </div>
      <div className="grid-container">
        <div className="card">
        <h3 className="route-name">Prague-Paris</h3>
      <img alt= "Placeholder Image"></img>
      <h3>Level: Hard</h3>
      <h3>TotalDistance: 894km</h3>
      <h3>Description: </h3>
        </div>
        <div className="card">
        <h3 className="route-name">Route Name</h3>
      <img alt= "Placeholder Image"></img>
      <h3>Level: </h3>
      <h3>TotalDistance: _ km</h3>
      <h3>Description: </h3>
        </div>
        <div className="card">
        <h3 className="route-name">Route Name</h3>
        <img alt ="Placeholder Image"/>
      <h3>Level: </h3>
      <h3>TotalDistance: _ km</h3>
      <h3>Description: </h3>
        </div>
        <div className="card">
        <h3 className="route-name">Route Name</h3>
      <img alt= "Placeholder Image"></img>
      <h3>Level: </h3>
      <h3>TotalDistance: _ km</h3>
      <h3>Description: </h3>
        </div>
        <div className="card">
        <h3 className="route-name">Route Name</h3>
      <img alt= "Placeholder Image"></img>
      <h3>Level: </h3>
      <h3>TotalDistance: _ km</h3>
      <h3>Description: </h3>
        </div>
        <div className="card">
        <h3 className="route-name">Route Name</h3>
      <img alt= "Placeholder Image"></img>
      <h3>Level: </h3>
      <h3>TotalDistance: _ km</h3>
      <h3>Description: </h3>
        </div>
        <div className="card">
        <h3 className="route-name">Route Name</h3>
      <img alt= "Placeholder Image"></img>
      <h3>Level: </h3>
      <h3>TotalDistance: _ km</h3>
        </div>
        <div className="card">
        <h3 className="route-name">Route Name</h3>
      <img alt= "Placeholder Image"></img>
      <h3>Level: </h3>
      <h3>TotalDistance: _ km</h3>
      <h3>Description: </h3>
        </div>
        <div className="card">
        <h3 className="route-name">Route Name</h3>
      <img alt= "Placeholder Image"></img>
      <h3>Level: </h3>
      <h3>TotalDistance: _ km</h3>
      <h3>Description: </h3>
        </div>
        <div className="card">
        <h3 className="route-name">Route Name</h3>
        <img alt= "Placeholder Image"></img>
      <h3>Level: </h3>
      <h3>TotalDistance: _ km</h3>
      <h3>Description: </h3>
        </div>
        <div className="card">
        <h3 className="route-name">Route Name</h3>
        <img alt= "Placeholder Image"></img>
      <h3>Level: </h3>
      <h3>TotalDistance: _ km</h3>
      <h3>Description: </h3>
        </div>
        <div className="card">
        <h3 className="route-name">Route Name</h3>
        <img alt= "Placeholder Image"></img>
      <h3>Level: </h3>
      <h3>TotalDistance: _ km</h3>
      <h3>Description: </h3>
        </div>
      </div>
      <div className="button-container">
      <LargeDarkGreenButton className="large">Start Challenge!</LargeDarkGreenButton>
      <SmallLightBlueButton className="smallblue">Decide for me</SmallLightBlueButton>
      <SmallDarkGreenButton className="smallgreen">Back</SmallDarkGreenButton>
      </div>
      </div>
  );
};

export default ChooseChallengePage;
