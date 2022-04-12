import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CommentArea from "./CommentArea"

export default function VideoItem({ myVideos,user }) {
    const { vid, vcategory } = useParams()
    const [currentVideo, setCurrentVideo] = useState(null)
    const [relatedVideos, setRelatedVideos] = useState([])    

    useEffect(() => {
        let newRelatedVideos = []
        myVideos.map((video) => {
            if (vid == video.id) {
                setCurrentVideo(video)
            }
            else if (vcategory == video.category) {
                newRelatedVideos.push(video)
            }
        })
        setRelatedVideos(newRelatedVideos)

    }, [])

    return (
        <div className="my-6 mx-40">
            <div className="flex justify-around">
                <div className="w-1/3 lg:w-1/4">
                    <iframe  className="w-full" src={currentVideo?.link} alt="" />
                    <CommentArea user={user}/>
                </div>
                <div className="border-l-4  border-black">
                    <div className="ml-5">
                        <p className="">Related Videos</p>
                        <div className="space-y-5">
                            {relatedVideos.map((video) => {
                                return (
                                    <iframe className="" key={video.id} src={video.link} alt="" />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>           
            <Link to="/" className="text-blue-600 flex justify-end mr-20 mt-10">Back</Link>
        </div>
    )
}