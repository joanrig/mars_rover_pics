import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const NavBar = () => {
  return (

    <div>
        <br/>
        <div className='navbar center'>
          <Link to='/' ><Button size='massive' color='purple'>Home</Button></Link>
          <Link to='/search' ><Button size='massive' color='pink'>Search</Button></Link>
          <br/>
          <br/>
        </div>
    </div>
  );
};

export default NavBar;
