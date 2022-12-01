import DetailSong from "~/Layout/components/DetailSong";
import ListSong from "~/Layout/components/ListSong";

function Home() {
  
    return (
        <div className="grid grid-cols-3 bg-primary h-screen-navbar-player overflow-hidden">
            <DetailSong/>
            <ListSong/>
        </div>
    );
}

export default Home;
