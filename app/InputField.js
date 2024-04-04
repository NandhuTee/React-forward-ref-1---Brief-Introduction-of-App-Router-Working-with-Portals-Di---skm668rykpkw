import React, { forwardRef } from 'react';

const InputField = forwardRef((props, ref) => {
  return (
    <div>
      <input id="input" type="text" ref={ref} />
    </div>
  );
});

export default InputField;
