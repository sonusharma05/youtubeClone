import { VideoCard } from "./videocard"

const video=[{
    title:"how muscles are built how much regnerates",
    thumbnail:"hi.png",
    channel:"hi.png",  
    author:"sonu Kumar",
    views:"12m",
    timestamp:"2 days ago",
},
{
    title:"how muscles are built how much regnerates",
    thumbnail:"hi.png",
    channel:"hi.png",  
    author:"sonu Kumar",
    views:"12m",
    timestamp:"2 days ago",
},{
    title:"how muscles are built how much regnerates",
    thumbnail:"hi.png",
    channel:"hi.png",  
    author:"sonu Kumar",
    views:"12m",
    timestamp:"2 days ago",
},{
    title:"how muscles are built how much regnerates",
    thumbnail:"hi.png",
    channel:"hi.png",  
    author:"sonu Kumar",
    views:"12m",
    timestamp:"2 days ago",
}]
export const VideoGrid=()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {video.map(video=><div>
            <VideoCard
                title= {video.title}
                thumbnail={video.thumbnail}
                channel={video.channel}  
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
                ></VideoCard>
        </div>)}

    </div>

}