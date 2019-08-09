import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const NavBar = () => {
  return (

    <div className="navbar">
        <br/>
        <br/>
        <div className='navbar center'>
          <Link to='/' ><Button size='big' color='grey'>Home</Button></Link>
          <Link to='/search' ><Button size='big' color='white'>Search</Button></Link>
          <br/>
          <br/>
        </div>
    </div>
  );
};

export default NavBar;
