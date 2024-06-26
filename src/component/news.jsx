import React from "react";
import News from "./newsCard";
const MyNews =({myNews,removeNews})=>{
       console.log("I am Mynews function  myNews : ",myNews," Remove : ", removeNews);
        return (
            <section>
                <div className="bg-cyan-300 w-[98%] my-[3rem] flex justify-around">
                    <h2>Abhishek Top News</h2>
                    <div><a href="">Github</a></div>
                    <div><a href="">Portfolio</a></div>
                </div>
                <div className="flex flex-row flex-wrap bg-slate-300 justify-center">
                    {
                        myNews.map((news)=>{
                            console.log("I indicate Single News : ", news);
                            return <News key ={news.id} news ={news} removeNews={removeNews} />;
                        })
                    }
                </div>
            </section>
        )
}
export default MyNews;