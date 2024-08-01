import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './SelectCarPage.css';

const SelectCarPage = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [days, setDays] = useState(1);
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = location.state || { username: 'User' };

  useEffect(() => {
    axios.get('/api/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the cars!', error);
      });
  }, []);

  const extractNumericPrice = (priceString) => {
    if (!priceString) return 0;
    const numericPrice = parseFloat(priceString.match(/(\d+(\.\d+)?)/)[0]);
    return isNaN(numericPrice) ? 0 : numericPrice;
  };

  const handleCarSelect = (car) => {
    const numericPrice = extractNumericPrice(car.price);
    const selectedCarWithNumericPrice = { ...car, pricePerDay: numericPrice };
    setSelectedCar(selectedCarWithNumericPrice);
    const newTotalCost = numericPrice * days;
    setTotalCost(newTotalCost);
  };

  const handleDaysChange = (event) => {
    const newDays = parseInt(event.target.value, 10);
    setDays(newDays);
    if (selectedCar) {
      const newTotalCost = selectedCar.pricePerDay * newDays;
      setTotalCost(newTotalCost);
    }
  };

  const handlePurchase = () => {
    navigate('/purchase', { state: { selectedCar, days, totalCost, username } });
  };

  return (
    <div className="car-container">
      <h1>Select a Car!</h1>
      <p>Welcome, {username}</p>
      <div className="car-list">
        {cars.map(car => (
          <div className="car-item" key={car.id}>
            <h2>{car.name}</h2>
            <p>Price per day: ${extractNumericPrice(car.price)}</p>
            <button onClick={() => handleCarSelect(car)}>Select</button>
          </div>
        ))}
      </div>
      {selectedCar && (
        <div className="selected-car">
          <h2>Selected Car: {selectedCar.name}</h2>
          <p>Price per day: ${selectedCar.pricePerDay}</p>
          <label>
            Days:
            <input
              type="number"
              value={days}
              onChange={handleDaysChange}
              min="1"
            />
          </label>
          <p>Total Cost: ${totalCost}</p>
          <button onClick={handlePurchase}>Purchase</button>
        </div>
      )}
    </div>
  );
};

export default SelectCarPage;
