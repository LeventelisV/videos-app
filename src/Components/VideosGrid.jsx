import { NavLink as Link } from "react-router-dom"
import SignOut from "./SignOut"


export default function VideosGrid({ auth, myVideos }) {
    
    return (
        <section className="mx-6">
            <div className="text-right">
                <SignOut auth={auth} />
            </div>

            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {myVideos.map((video) => (
                    <Link to={ '/' + video.category + '/'+ video.title } key={video.id}><li className="relative click-pointer">
                        <div className="group block w-full aspect-w-10 aspect-h-7  focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                            <iframe src={video.link} alt="" width="100%" />
                        </div>
                        <p className="mt-2 block text-sm font-medium text-gray-900  pointer-events-none ">{video.title}</p>
                    </li>
                    </Link>
                ))}
            </ul>

        </section>
    )
}