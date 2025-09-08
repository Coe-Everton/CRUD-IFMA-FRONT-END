import type React from "react";

interface PropsInput {
  filter:string
  setFilter:React.Dispatch<React.SetStateAction<string>>
}

export default function InputFilter({filter, setFilter}: PropsInput) {
  return(
    <input 
      type="text"
      className="border-2 border-white w-1/6 rounded-lg self-center mb-6 px-1 py-1.5"
      value={filter}
      placeholder="Search..."
      onChange={(e) => setFilter(e.target.value)}
    />
  )
}