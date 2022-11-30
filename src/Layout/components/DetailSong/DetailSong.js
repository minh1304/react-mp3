function DetailSong() {
    return (
        <div className="col-span-1 p-3 ">
            <h2 className="text-white font-bold">Now playing </h2>
            <h2 className="text-neutral-400 text-2xl">Sing me to sleep</h2>
            <div className="w-[240px] m-auto mt-10">
                <img
                    className="w-full rounded-2xl"
                    src="https://seed-mix-image.spotifycdn.com/v6/img/artist/57g2v7gJZepcwsuwssIfZs/en/default"
                    alt="avatar"
                />
            </div>
            <div className="flex justify-evenly items-center  mt-10">
                <img
                    className="w-[70px] rounded-full"
                    src="https://i.scdn.co/image/ab67616d00004851824ac9ea17bde4ea1fd09f4f"
                    alt="avatar"
                />
                <span className="text-xl text-white ">Vũ</span>
            </div>
        </div>
    );
}

export default DetailSong;
