export default function Racer() {

    return (
        <>
            <div className="w-full h-[100svh] flex flex-col p-12">
                <div className="flex items-center w-[650px] pb-16">
                        {/* <img className="w-36 h-auto rounded-full" src="/logo1.png" alt="" /> */}
                        <div className="flex flex-col">
                            <h1 className="font-black text-3xl">CSU Keyboard Warriors</h1>
                            <p className="self-end text-xl font-bold text-green-500">Typing Test</p>
                        </div>
                    </div>
                <div className="flex flex-col h-full items-center">
                        <div className="flex flex-col justify-center items-center pb-16">
                            <h2 className="text-2xl font-medium">WPM</h2>
                            <p className="text-6xl font-black">200</p>
                        </div>
                        <div className="flex flex-col justify-center items-center align p-6 max-w-5xl">
                            <p className="text-2xl font-mono  font-semibold">VISION A globally-engaged University excelling in science, engineering and the arts. MISSION Caraga State University endeavors to produce globally-competitive and socially responsible human capital towards the sustainable and inclusive development of Caraga Region and beyond.</p>
                            <input type="text" className="w-full text-center" placeholder="Will be invisible after the implementation" />
                            <button className="m-4 p-4 border-2 w-[400px] rounded-3xl font-black">Start</button>
                        </div>
                </div>
            </div>
            <div className="p-12">
                <h2 className="font-black text-3xl">Leaderboads</h2>
                {/* Task ni Lendel */}
            </div>
        </>
    );
}