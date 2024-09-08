import { useState } from 'react'
import Navbar from './components/Navbar';
import MainBanner from './components/MainBanner';
import NovelEntry from './components/NovelEntry';
import './App.css'
import CategoryListing from './components/CategoryListing';
import NovelPage from './pages/NovelPage';
import TopRated from './components/TopRated';

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
    <Navbar />
    <MainBanner />
    {/* <div style={{display: 'flex', width: '100b'}}> */}

      <CategoryListing />
      <TopRated />
    {/* </div> */}

    {/* <NovelPage /> */}
      {/* <div className="duck">
        <h1>${count}</h1>
        <img src="duck.png" width="50%" onClick={incrementMoney}/>
      </div> */}
    </>
  )
}

export default App
