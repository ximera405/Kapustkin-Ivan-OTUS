import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/main">Главная</Link>
        </li>
        <li>
          <Link to="/top">Избранное</Link>
        </li>
        <li>
          <Link to="/list">Все города</Link>
        </li>
      </ul>
    </div>
  );
};
