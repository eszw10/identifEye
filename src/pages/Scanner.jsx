const Scanner = () => {
    return (
        <div className="relative flex flex-col items-center h-screen">
            <img src="/assets/images/music_note.svg" alt="" className="absolute left-24 top-52"/>
            <img src="/assets/images/lightbulb.svg" alt="" className="absolute right-24 top-52"/>
            <img src="/assets/images/arrow_upleft.svg" alt="" className="absolute left-24 bottom-16"/>
            <img src="/assets/images/arrow_upright.svg" alt="" className="absolute right-24 bottom-16"/>
            <div className="text-6xl container p-14">
                <p className=" text-light text-center font-bold mb-4">Scanning...</p>
                <p className="text-accent font-bold text-center text-4xl">Show your face to the camera</p>
            </div>
            <div className="h-96 w-96 rounded-full bg-black/50"></div>
        </div>
    );
}
 
export default Scanner