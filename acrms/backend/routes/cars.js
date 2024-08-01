const express = require('express');
const router = express.Router();

const cars = [
  { id: 1, name: 'Toyota Camry', price: '50/day' },
  { id: 2, name: 'Honda Accord', price: '55/day' },
  { id: 3, name: 'Ford Mustang', price: '70/day' },
  { id: 4, name: 'Tesla Model 3', price: '80/day' },
  { id: 5, name: 'Chevrolet Malibu', price: '45/day' },
  { id: 6, name: 'Nissan Altima', price: '50/day' },
  { id: 7, name: 'Hyundai Sonata', price: '55/day' },
  { id: 8, name: 'Kia Optima', price: '60/day' },
  { id: 9, name: 'Subaru Legacy', price: '65/day' },
  { id: 10, name: 'Mazda 6', price: '55/day' },
  { id: 11, name: 'BMW 3 Series', price: '90/day' },
  { id: 12, name: 'Audi A4', price: '95/day' },
  { id: 13, name: 'Mercedes-Benz C-Class', price: '100/day' },
  { id: 14, name: 'Lexus ES', price: '85/day' },
  { id: 15, name: 'Cadillac CT5', price: '95/day' },
  { id: 16, name: 'Jaguar XE', price: '110/day' },
  { id: 17, name: 'Volvo S60', price: '100/day' },
  { id: 18, name: 'Alfa Romeo Giulia', price: '105/day' },
  { id: 19, name: 'Genesis G70', price: '85/day' },
  { id: 20, name: 'Infiniti Q50', price: '90/day' },
  { id: 21, name: 'Acura TLX', price: '75/day' },
  { id: 22, name: 'Lincoln MKZ', price: '80/day' },
  { id: 23, name: 'Chrysler 300', price: '70/day' },
  { id: 24, name: 'Buick Regal', price: '65/day' },
  { id: 25, name: 'Volkswagen Passat', price: '60/day' },
  { id: 26, name: 'Toyota Avalon', price: '75/day' },
  { id: 27, name: 'Honda Civic', price: '50/day' },
  { id: 28, name: 'Ford Fusion', price: '55/day' },
  { id: 29, name: 'Chevrolet Impala', price: '60/day' },
  { id: 30, name: 'Nissan Maxima', price: '70/day' }
];

router.get('/', (req, res) => {
  res.json(cars);
});

module.exports = router;
