import { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { DataMusics } from '~/App';
function Playing() {
    const { song, handleSetSong  } = useContext(DataMusics);
    const handleNext = () => {
        handleSetSong(song.id +1)

    };
    const handlePrevious = () => {
        handleSetSong(song.id - 1)
    };
    const handelEnd = () => {
        handleSetSong(song.id +1)
    }

    return (
        <div className="border-t border-hover_color h-[100px] box-border">
            <AudioPlayer
                className="player-music"
                src={song.url}
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleNext}
                onClickPrevious={handlePrevious}
                onEnded={handelEnd}
            />
        </div>
    );
}

export default Playing;
