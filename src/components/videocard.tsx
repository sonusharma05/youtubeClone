export function VideoCard(props:any) {
    return <div>
        <img title="hi" src={props.thumbnail} className="rounded-xl"></img>
        <div className="grid grid-cols-12">
            <div className="col-span-1">
                <img className="rounded-full w-20 h-20 pt-3" src={props.channel} title="yo"></img>
            </div>
                <div className="col-span-10 pl-5 pt-3" >
                    <div >
                        {props.title}
                    </div>
                    <div className="text-gray-600 text-base">
                        {props.author}
                    </div>
                    <div className="text-gray-600 text-base">
                        {props.views} | {props.timestamp}
                    </div>
                </div>

        </div>
    </div>
}