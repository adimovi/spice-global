import React from "react";


export function Locations() {
  return (
   <>
    <div className="container">
      <section>
        <div className="row my-5 d-flex justify-content-center">
          <div className="col-lg-4 col-12 align-self-center">
            <p>
            To find out which locations we want to find quality event management partners in, click on this spreadsheet link, and note that the USA locations are in the second sheet:
            </p>
            <a href="https://docs.google.com/spreadsheets/d/1anNNiXgtjCrMODzqB9gKfnePPEaCBJXgqJlCYXYwRRM/edit#gid=1501700629">Sheet Here</a>
          </div>
          <div className="col-lg-5 col-12">
            <img src="imgs/globe.jpg" style={{width:"100%"}} alt="" />
          </div>
        </div>
      </section>
    </div>
   </>
   );
  
}

export default Locations;