import { useState } from "react";
import NovelEntry from "./NovelEntry";

export default function CategoryListing() {
  const [count, setCount] = useState<number>(0);
  const arr :number[] =  [0, 0, 0, 0, 0];
  return (
    <div style={{maxWidth: '80vw',}}>
      <h1> Category Title</h1>

      <div style={{display: 'flex'}}>
        {arr.length > 0 && arr.map((_, index) => (
          <div key={index} style={{flex: 1}}>
          <NovelEntry />
          </div>
          ))}
      </div>
    </div>

  )
}