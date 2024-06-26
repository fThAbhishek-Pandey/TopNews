import React,{ useState,useEffect } from 'react'
import Loading from './component/loading.jsx';
import MyNews from './component/news';
import './App.css'
const url = 'https://api.worldnewsapi.com/top-news?source-country=in&language=en&date=2024-05-29';
const apiKey = '8be2b508432146c690ab808e21357a56';

const  App =  ()=>  {
  console.log(" I am in my main App ; ",MyNews);
  const [loading,setLoading] = useState(true);
  const [myNews,setMyNews] = useState([]);
  const removeNews = (id)=>{
       const newNews=myNews.filter(()=> myNews.id !==id)
       setMyNews(newNews);
  }
const fetchAPI = async ()=>{
           setLoading(true);
           try{
            const responce = await fetch(url, {
              method: 'GET',
              headers: {
                  'x-api-key': apiKey
              }
           });
           console.log("responce : ",responce);
           const news = await responce.json();
           console.log("news : ",news);
           console.log("topNews : ",news.top_news[0].news);
           setLoading(false);
           setMyNews(news.top_news[0].news.slice(0,20));

           }
           catch (error){
                setLoading(false);
                console.log(error);
           }
}

//  useEffect using
useEffect (()=>{
  fetchAPI();
},[]);
if(loading){
  <main>
     <Loading />
  </main>
}
if(myNews.length ===0){
  return (
    <main>
      <div>
        <h2>No News Left</h2>
        <button onClick={()=> fetchAPI()}>Refresh</button>
      </div>
    </main>
  )
}
  return (
    <>
       <main>
         <MyNews myNews ={myNews}  removeNews={removeNews}/>
       </main>
    </>
  )
}

export default App;
