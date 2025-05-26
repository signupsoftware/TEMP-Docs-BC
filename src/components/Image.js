import React from 'react';

const Image = ({ name, size }) => {
  const baseUrl = 'https://docs.signupsoftware.com/img/BC/en'; // Replace with your actual base URL
  return <img src={`${baseUrl}/${name}`} alt={`${size}`} />;
};

export default Image;
