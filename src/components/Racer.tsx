import { useEffect } from "react";
//import GenerateParagraph from "./GenerateParagraph";
//import { letters } from "./GenerateParagraph";
import Typing from "./Typing";

export default function Racer() {

  useEffect( () => {

    // Function to handle the click event
    function handleClick(event : any) {
        console.log("Mouse clicked at X:", event.clientX, "Y:", event.clientY);
    }
    
    // Add a click event listener to the entire document
    document.addEventListener("click", handleClick);
    
  }, [])

    return (
        <>
            <div className="w-full h-[100svh] flex flex-col p-12">
                <div className="flex items-center w-[650px] pb-16">
                       
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
                        <div key="what-the-f" className="flex justify-center relative align p-6 max-w-5xl">
                          
                            <Typing  />
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