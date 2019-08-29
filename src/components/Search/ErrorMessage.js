import React from 'react';


const ErrorMessage = () => {
  return (

    <div className="no-photos-found">
      <br/>
      <h2>
        No photos found.
        <br/>
        Not every camera takes photos every day.
        <br/>
      </h2>
      <h3>
        For better results:
        <br/>
        1. search by sol, confining your search to the range of sols listed on the map below
        <br/>
        2. select 'All Cameras' instead of one camera
        <br/>
        <br/>
        To try again, change at least one selection above.
        <br/>
      </h3>
      <br/>
    </div>

  )
}

export default ErrorMessage
