
export default function ReviewEntry() {
  return (
    <div style={{width: '100%', backgroundColor: 'orange', display: 'flex', }}>
      <div className='user-info' style={{width: '10rem', border:'1px solid black', textAlign: 'center'}}>
        <h5>Username</h5>
        <h5>rating</h5>
        <h5>profile link?</h5>
      </div>
      <div className='review' style={{display: 'block', flex: 1, textAlign: 'center'}}>
        <h3>Review title</h3>
        <h5>Text of review goes here</h5>


      </div>

    </div>
  )
}