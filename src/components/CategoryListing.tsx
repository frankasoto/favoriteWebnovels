import { useState } from "react";
import NovelEntry from "./NovelEntry";
import {novels} from './novels';

interface CatListInterface {
  nameOfNovel: string,
  id: number,
  image: string
}
//will be replaced with an api call later. fetch by category title
// const novelList= [{nameOfNovel: 'book1', id: 1, image: 'url'}, {nameOfNovel: 'book32', id:32, image: 'url'}];

export default function CategoryListing({categoryTitle} : {categoryTitle: string}) {
  const [count, setCount] = useState<number>(0);
  const [listOfNovels, setListOfNovels] = useState<CatListInterface[]>(novels);
  console.log('title of category', categoryTitle);
  console.log('list of novels',novels);
  const arr :number[] =  [0, 0, 0, 0, 0];
  return (
    <div style={{maxWidth: '80vw', margin: 'auto'}}>
      <h1> {categoryTitle}</h1>

      <div style={{display: 'flex'}}>
        {arr.length > 0 && arr.map((_, index) => (
          <div key={index} style={{flex: 1}}>
            <NovelEntry NovelEntryInter={listOfNovels[index]}/>
          </div>
          ))}
      </div>
    </div>

  )
}