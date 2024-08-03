import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AnalyticsPage.css';

const AnalyticsPage = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    axios.get('/api/rentals/analytics')
      .then(response => {
        setRentals(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the rentals data!', error);
      });
  }, []);

  return (
    <div className="analytics-container">
      <h1>Car Rentals Analytics</h1>
      {rentals.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Car ID</th>
              <th>Days</th>
              <th>Rental Date</th>
            </tr>
          </thead>
          <tbody>
            {rentals.map((rental, index) => (
              <tr key={index}>
                <td>{rental.username}</td>
                <td>{rental.carId}</td>
                <td>{rental.days}</td>
                <td>{new Date(rental.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No rentals yet.</p>
      )}
    </div>
  );
};

export default AnalyticsPage;
