function Header() {
    return (
        <div className="grid grid-cols-3 h-16  justify-center bg-color_player_music text-white text-center leading-[6rem] text-3xl border-b border-hover_color">
            <div className="col-span-2"></div>
            <div className="col-span-1 h-[63px] relative">
                <div className="ml-[300px] flex">
                    {/* <div>
                        <button className="h-9 border font-bold text-sm p-2 absolute top-[15px] rounded-3xl hover:">
                            Upgrade
                        </button>
                    </div>
                    <div>
                        <button
                            className="ml-[110px] h-9 border border-red font-bold text-sm p-2 absolute top-[15px] rounded-3xl"
                            
                        >
                            Info
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Header;
