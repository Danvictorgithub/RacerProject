export default function Racer() {

    return (
        <>
            <div className="w-full h-[100vh] flex flex-col p-12">
                <div className="flex flex-col w-[335px] pb-16">
                        <h1 className="font-black text-3xl">CSU Warrior Keyboards</h1>
                        <p className="self-end text-xl font-medium">Typing Test</p>
                    </div>
                <div className="flex flex-col h-full items-center">
                        <div className="flex flex-col justify-center items-center pb-16">
                            <h2 className="text-2xl font-bold">WPM</h2>
                            <p className="text-6xl font-black">200</p>
                        </div>
                        <div className="flex justify-center align p-6 max-w-5xl">
                            <p className="text-2xl font-mono  font-semibold">VISION A globally-engaged University excelling in science, engineering and the arts. MISSION Caraga State University endeavors to produce globally-competitive and socially responsible human capital towards the sustainable and inclusive development of Caraga Region and beyond.</p>
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