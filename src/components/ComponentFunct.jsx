import { useState } from "react"

function ComponentFunct() {
  const [value, setValue] = useState(0)

  return (
    <div>
      Component Functional
      <p>
        <button onClick={() => setValue(value - 1)}>-</button>
        {value}
        <button onClick={() => setValue(value + 1)}>+</button>
      </p>
    </div>
  )
}

export default ComponentFunct
