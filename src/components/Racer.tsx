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
    
    // Add a click event listener to the entire documents
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
                <h2 className="font-black text-3xl" style={{display: 'flex', justifyContent: 'center', margin: '20px'}}>Leaderboards</h2>
                {/* Task ni Lendel */}
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="font-black text">
                    {/*leaderboard header*/}
                    <div className="leaderBoard-entry">
                    <h3 style={{display: 'inline-block', border: '1px solid black', padding: '5px', margin: '0', width: '55px', textAlign:'center'}}>#</h3>
                    <h3 style={{display: 'inline-block', border: '1px solid black', padding: '5px', margin: '0', width: '450px' }}>Name</h3>
                    <h3 style={{display: 'inline-block', border: '1px solid black', padding: '5px', margin: '0', width: '120px'}}>Speed</h3>
                    <h3 style={{display: 'inline-block', border: '1px solid black', padding: '5px', margin: '0', width: '230px'}}>Time</h3>
                    </div>
                    {/*leaderboard entry*/}
                    <div className="leaderBoard-entry">
                    <h3 style={{display: 'inline-block', border: '1px solid black', padding: '5px', margin: '0', width: '55px', textAlign:'center'}}>1</h3>
                    <h3 style={{display: 'inline-block', border: '1px solid black', padding: '5px', margin: '0', width: '450px' }}>Dan</h3>
                    <h3 style={{display: 'inline-block', border: '1px solid black', padding: '5px', margin: '0', width: '120px'}}>190wpm</h3>
                    <h3 style={{display: 'inline-block', border: '1px solid black', padding: '5px', margin: '0', width: '230px'}}>53 minutes ago</h3>
                    </div>
                </div>
                </div>
                

            </div>
        </>
    );
}