import React, { useState } from 'react';
import axios from 'axios';

const NotificationSettings = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    await axios.post('/api/users/subscribe', { email });
    alert('Subscribed successfully');
  };

  return (
    <div>
      <h1>Notification Settings</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default NotificationSettings;
