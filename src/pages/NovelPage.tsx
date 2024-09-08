import ReviewEntry from "./ReviewEntry";

//will pass in the id of the novel?
export default function NovelPage() {
  console.log("page");
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