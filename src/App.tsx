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

      <CategoryListing categoryTitle={'Top Rated Novels'} />
      <CategoryListing categoryTitle={'Fantasy'} />
      <CategoryListing categoryTitle={'Romance'} />
      <CategoryListing categoryTitle={'Comedy'} />
      <CategoryListing categoryTitle={'Historical'} />
      {/* <TopRated /> */}
    {/* </div> */}

    {/* <NovelPage /> */}

    </>
  )
}

export default App
