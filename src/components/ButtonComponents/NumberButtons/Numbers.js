import React, { useState } from "react";
import { useState } from "react";

import { numbers } from '../../../data';

//import any components needed
import NumberButton from './NumberButton';

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div>
      {numberState.map((value) => {
        return <NumberButton num={value} />;
      })}
    </div>
  );
};



export default Numbers;