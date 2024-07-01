import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

const Counter = observer(({ tasks }) => {
  useEffect(() => {
    console.log(tasks.length);
  });

  return (
    <div className="counter">
      <h2>Total tasks: {tasks.length} </h2>
    </div>
  );
});
export default Counter;
