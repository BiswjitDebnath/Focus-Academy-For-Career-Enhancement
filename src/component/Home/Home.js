import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteScroll from 'react-infinite-scroller';
import Card from './Card'

// console.log(localStorage.getItem('token'));
const Home = () => {
  const [data, setData] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    getuser()
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, [])

  const getuser = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10')
    const data = await response.json()
    setData(data.results)
  }
  const fetchMoreData = async () => {
    console.log("called");
    const response = await fetch('https://randomuser.me/api/?results=10')
    const newData = await response.json()
    setTimeout(() => {
      
      setData(data.concat(newData.results));
    }, 1000);
  }

  // console.log(data);
  return (
    <>
      {(localStorage.getItem('token') && data.length)&&
        <div style={{ padding: '5px' }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={fetchMoreData}
            hasMore={true}
            loader={<h4 className='loading'>Loading...</h4>}
          >
            {console.log(data.length)}

          {data.map((item, index) => {
            return <Card first={item.name.first} last={item.name.last} photo={item.picture.medium} key={index} />
          })}

          </InfiniteScroll> 

        </div>
      }
    </>
  )
}

export default Home