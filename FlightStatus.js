import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlightStatus = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const response = await axios.get('/api/flights');
      setFlights(response.data);
    };
    fetchFlights();
  }, []);

  return (
    <div>
      <h1>Flight Status</h1>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.number} - {flight.status} - {flight.gate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightStatus;
