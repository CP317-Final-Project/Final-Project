import React from 'react';
import { useLocation } from 'react-router-dom';
import './PurchasePage.css';

const PurchasePage = () => {
  const location = useLocation();
  const { selectedCar, days, totalCost, username } = location.state;

  return (
    <div className="purchase-container">
      <h1>Purchase Confirmation</h1>
      <p>Hi {username},</p>
      <p>Car: {selectedCar.name}</p>
      <p>Days: {days}</p>
      <p>Total Cost: ${totalCost}</p>
      <p>Purchase successful!</p>
    </div>
  );
};

export default PurchasePage;
