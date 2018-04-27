 import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <img src="https://047f018102c8c8f717a6-1efb167bc857a9871c34d9fa1ea1cbde.ssl.cf1.rackcdn.com/myevive_black.png" />
      <h1>React Training</h1>
      <h2>Get Started</h2>
      <Link to="/my-project">My Project</Link>
    </div>
  );
};

export default HomePage;
