import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { DataMusics } from '~/App';

function ListSong() {
    const { Data, handleSetSong, song } = useContext(DataMusics);
    const [idSong, setIdSong] = useState(0);
    const handlePlaySong = (idSong) => {
        setIdSong(idSong);
        handleSetSong(idSong);
    };
    useEffect(()=> {
        setIdSong(song.id)
    }, [song])
    return (
        <div className="col-span-2 p-11 overflow-y-scroll">
            <table className="table-auto w-full">
                <thead className="text-white h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%]">Author</th>
                    </tr>
                </thead>
                <tbody className="text-slate-200">
                    {Data.map((song, index) => (
                        <tr
                            key={index}
                            className={`bg-color_header h-12 text-neutral-400 duration-300 ease-in-out hover:hover ${
                                idSong === song.id &&
                                'bg-white hover:noneHover text-black '
                            }`}
                            onClick={() => handlePlaySong(song.id)}
                        >
                            <td className="text-center">{index + 1}</td>
                            <td>{song.name}</td>
                            <td className="text-center">{song.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListSong;
