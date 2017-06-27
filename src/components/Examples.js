import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are most common searches</p>
      <ul>
        <li><Link to='/?city=Warsaw'>Warszawa</Link></li>
        <li><Link to='/?city=Krakow'>Kraków</Link></li>
      </ul>
    </div>
  );
}
