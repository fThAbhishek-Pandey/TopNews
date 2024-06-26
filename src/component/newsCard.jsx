
import React ,{useState} from "react";
const News = ({news,removeNews}) =>{
    console.log("I am in News card : ", news, "removeNews : ",removeNews);
    const { id,image,author,text,title,publish_date,url} = news;
    console.log("id : ",id," image : ",image, " aurther : ",author ," summary : ",text," title : ",title," publish date : ",publish_date," url : ",url);
    console.log("id123 : ",news.id," image : ",news.image, " aurther : ",news.author ," summary : ",news.summary," title : ",news.title," publish date : ",news.publish_date," url : ",news.url);

    const [readmore, setReadmore] = useState (false);
    return (
        <article className="flex flex-col justify-center place-content-center w-[24rem] h-[48rem] border-6 border-spacing-2 border-cyan-400 bg-slate-700 m-2 text-cyan-50" >
            <a href={url} className="text-slate-50 text-xl overflow-hidden font-semibold">{title}</a>
            <img className="w-96 h-96 place-self-center " src={image} alt={title} />
            <footer>
                <div className="flex flex-col justify-between ">
                           <h4>{title}</h4>
                           <h4>{publish_date}</h4>
                           <h4>{author}</h4>
                </div>
                <p className="overflow-scroll w-96 h-32 bg-slate-100 text-slate-500">
                    {readmore ? text: `${text.substring(0,200)}...`}
                   <button onClick={()=>setReadmore(!readmore)} className="bg-transparent text-slate-700 m-4">
                    {readmore ? 'show less': 'read more'}
                   </button>
                </p>
                <button className="delete-btn w-42 h-10 text-slate-950 m-4" onClick={ ()=>removeNews(id)}>
                    Not interested
                </button>
            </footer>
        </article>
    )
}
export default News;