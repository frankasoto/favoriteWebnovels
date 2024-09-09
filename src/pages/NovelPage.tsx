import { useParams } from "react-router-dom";
import ReviewEntry from "./ReviewEntry";
import { useState } from "react";

interface NovelInterface {
  title: string,
  author: string,
  paragraphs: number,
  publicationStatus: number, //may switch to boolean if decide to ignore hiatus status, otherwise 1 = ongoing,
  //2 = hiatus and 3 = completed
  readAt: string, //link where user can read it at
  rating: number,
  summary: string
}

//will pass in the id of the novel?
export default function NovelPage() {
  //grab id path variable to request data from server
  const { id } = useParams();
  const [novelInfo, setNovelInfo] = useState<NovelInterface>({
    title: '',
    author: '',
    paragraphs: 0,
    publicationStatus: 1,
    readAt: '',
    rating: 1,
    summary: ''
  });
  const fetchNovelInfo = async() => {
    const response = await fetch(`novel/${id}`);
    const result = await response.json();
  }
  return (
    <div style={{maxWidth: '80vw', width: '80vw', backgroundColor: 'red', margin: 'auto'}}>
      <div className="novel info" style={{display: 'flex'}}>
        <div className='novel-image' style={{backgroundColor: 'blue', width: '40vw'}}>
        <img src='duck.png' width='40%'/>

        </div>
        <div className='info'>
          <h1>Title</h1>
          <h1>author:</h1>
          <h1>number of chapters</h1>
          <h1>publication status: ongoing/completed/hiatus</h1>
          <h1>Where to read? </h1>
          <h1>Avg rating (out of 5 or 10?)</h1>
          <h1>Summary</h1>

        </div>
      </div>
      <div className='message-board' style={{height: '100vh', backgroundColor: 'green'}}>
        <h1>Reviews</h1>
        <ReviewEntry />
      </div>
    </div>
  )
}