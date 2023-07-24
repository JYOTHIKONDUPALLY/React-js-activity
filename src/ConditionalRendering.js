import { useState } from "react";

export default function ConditionalRender(props) {
  const [value, setValue] = useState(0);
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  let type;
  if (value % 2 === 0) {
    type = "even";
  } else {
    type = "odd";
  }
  return (
    <div>
      <input type="number" value={value} onChange={handleValue} />
      <h1>{type}</h1>
    </div>
  );
}
