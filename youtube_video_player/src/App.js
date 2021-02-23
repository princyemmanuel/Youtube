import "./App.css";
import Header from "./Components/Header";
import Video from "./Components/Video";
import ReactPlayer from "react-player";
import CardTitle from "./Components/CardTitle";
const data = [
  {
    id: 4,
    title: "ReRun the application",
    video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    image:"https://cdn.vox-cdn.com/thumbor/HIluJzxPz3qH66lFxxHKVl10UzQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/60211577/acastro_180403_1777_youtube_0001.0.jpg"
  },
  {
    id: 2,
    title: "ReRun the application",
    video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    id: 3,
    title: "ReRun the application",
    video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    id: 4,
    title: "ReRun the application",
    video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
   <CardTitle/>
       <Video data={data} />
    </div>
  );
}

export default App;
