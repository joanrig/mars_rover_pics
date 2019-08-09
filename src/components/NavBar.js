import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const NavBar = () => {
  return (

    <div className="navbar">
        <br/>
        <br/>
        <div className='navbar center'>
          <Link to='/' ><Button size='big' color='orange'>Home</Button></Link>
          <Link to='/search' ><Button size='big' color='brown'>Search</Button></Link>
          <Link to='/rovers' ><Button size='big' color='black'>Rovers</Button></Link>
          <br/>
          <br/>
        </div>
    </div>
  )
}

export default NavBar;
