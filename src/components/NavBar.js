import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

class NavBar extends PureComponent {

    state = {
      width: window.innerWidth
    }

    componentDidMount() {
       window.addEventListener('resize', this.handleWindowSizeChange);
     }

    componentWillUnmount() {
       window.removeEventListener('resize', this.handleWindowSizeChange);
     }

    handleWindowSizeChange = () => {
       this.setState({ width: window.innerWidth });
     }

   render(){

     let isMobile
     const width = this.state.width
     width <= 500 ? isMobile = true : isMobile = false

     let size
     isMobile? size = "tiny" : size = "big"



       return (

         <div className="navbar">
             <br/>
             <br/>
             <div className='navbar center'>
               <Link to='/' ><Button size={size} color='orange'>Home</Button></Link>
               <Link to='/search' ><Button size={size} color='brown'>Search</Button></Link>
               <Link to='/rovers' ><Button size={size} color='black'>Rovers</Button></Link>
               <Link to='/about' ><Button size={size} color='green'>About</Button></Link>
               <br/>
               <br/>
             </div>
         </div>
       )
   }


}

export default NavBar;
