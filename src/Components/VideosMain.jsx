import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import VideosGrid from "./VideosGrid"
import VideoItem from "./VideoItem"
const myVideos = [
    {
        id: 1,
        title: "HIGHLIGHTS: Manchester City 2-2 Liverpool | JOTA & MANE LEVEL IT TWICE!",
        link: "https://www.youtube.com/embed/g8L19Y5z-YE",
        category: "sports"
    },
    {
        id: 2,
        title: "HIGHLIGHTS: Benfica 1-3 Liverpool | KONATE, MANE & LUIS DIAZ ON TARGET!",
        link: "https://www.youtube.com/embed/X-cJJCxdDTY",
        category: "sports"
    },
    {
        id: 3,
        title: "Chelsea 1-3 Real Madrid | Champions League Highlights",
        link: "https://www.youtube.com/embed/AIiR4YjJ5p0",
        category: "sports"
    },
    {
        id: 4,
        title: "War in Ukraine: Where are Russia's body bags? • FRANCE 24 English",
        link: "https://www.youtube.com/embed/Eb9r3-W7IBw",
        category: "news"
    },
    {
        id: 5,
        title: "Ex-CIA director predicts Putin's next moves in Ukraine",
        link: "https://www.youtube.com/embed/x56SxmqIwWo",
        category: "news"
    },
    {
        id: 6,
        title: "Analyst says Putin has a dark reason for keeping his daughters a secret",
        link: "https://www.youtube.com/embed/u24kxNbqb-A",
        category: "news"
    },
    {
        id: 7,
        title: "30 Minute Yoga For Beginners | Yoga With Adriene",
        link: "https://www.youtube.com/embed/AB3Y-4a3ZrU",
        category: "yoga"
    },
    {
        id: 8,
        title: "Feel Good Flow | 20-Minute Yoga for Abs | Yoga With Adriene",
        link: "https://www.youtube.com/embed/6uVSkvWO7As",
        category: "yoga"
    },
    {
        id: 9,
        title: "Wake Up Yoga - 11 Minute Morning Yoga Practice - Yoga With Adriene",
        link: "https://www.youtube.com/embed/UEEsdXn8oG8",
        category: "yoga"
    },
]

export default function VideosMain({auth,user}) {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<VideosGrid auth={auth} myVideos={myVideos}/>} />
                <Route path="/:vcategory/:vname" element={<VideoItem myVideos={myVideos} user={user}/>}/>
            </Routes>
        </Router>
    )
}