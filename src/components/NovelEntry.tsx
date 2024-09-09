import { Link, useNavigate } from "react-router-dom";


interface NovelEntryInter {
  nameOfNovel: string,
  id: number,
  image: string
}
export default function NovelEntry({NovelEntryInter}) {
  const navigate = useNavigate();
  const handleNovelPage = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    navigate('/novel/2');
  }
  // console.log('novel entry', NovelEntryInter.nameOfNovel);
  return (
    <div style={{backgroundColor: 'green', maxWidth: '10rem', height: '13.7rem', margin:'10px'}}>
      <a href='' onClick={(e) => handleNovelPage(e)} style={{width: '100%', height: '100%'}}>
          <img src={NovelEntryInter.image} style={{height: '100%'}} onClick={() => console.log('clicked on ' + NovelEntryInter.nameOfNovel)}/>
      </a>

    </div>
  )
}