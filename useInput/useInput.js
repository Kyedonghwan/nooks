import { useState } from "react";

const useInput = (a, validator) => {
  const [value, setValue] = useState(a);

  const onChange = (e) => {
    const {
      target: { value }
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    } else {
      setValue("10글자 초과하였음");
    }
  };

  return { value, onChange };
};

export default useInput;

