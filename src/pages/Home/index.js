import DetailSong from "~/Layout/components/DetailSong";
import ListSong from "~/Layout/components/ListSong";

function Home() {
  
    return (
        <div className="grid md:grid-cols-3 bg-primary h-screen-navbar-player-mobile overflow-hidden md:h-screen-navbar-player">
            <DetailSong/>
            <ListSong/>
            <h2>ahihi</h2>
        </div>
    );
}

export default Home;
