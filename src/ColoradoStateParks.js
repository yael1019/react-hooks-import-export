import React from "react";
import aDifferentName from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from './parks/RockyMountain';

export default function ColoradoStateParks() {
  aDifferentName(); // => "42 parks!"
  console.log(RMFunctions.trees);
  RMFunctions.wildlife();
  return(
    <React.Fragment>
      <h1>Colorado State Parks!</h1>;
      <div>
        <MesaVerde />
      </div>
    </React.Fragment>
  )
}
