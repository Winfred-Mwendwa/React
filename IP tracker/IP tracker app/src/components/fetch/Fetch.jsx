import { useState, useEffect } from "react";


function Fetch() {
  

    

    fetch('https://ipapi.co/8.8.8.8/json/')
.then(function(response) {
  response.json().then(jsonData => {
    console.log(jsonData);
  });
})
.catch(function(error) {
  console.log(error)
});
     



  
  
     return (
        <div className="wrapper">
        <ul className="card-grid">
          {jsonData.map((item, index) => (
            <li key={index}>
              <p>
              {item.country}
              </p>
                    
                
            </li>
    
          ))}
        </ul>
      </div>
       

     );
  }
 

export default Fetch;