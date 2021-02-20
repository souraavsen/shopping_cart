import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ total }) => {
  return (
    <div className='header'>
      <FaShoppingCart size='25px' />
      <p className='totalcart'>{total.length === 0 ? 0 : total.length}</p>
      <p>Items</p>
    </div>
  );
};

export default Header
