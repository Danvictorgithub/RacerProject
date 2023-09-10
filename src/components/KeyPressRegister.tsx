import  { useEffect, useState } from 'react';

export default function KeyPressRegister() {
    // first row is the header row, the rest are the data rows
        //DEV COMMENT: we could also just use raw data and no header row for cleaner data set, at the moment this is coveneient as there is error if initial state is empty
    const [gridData, setGridData] = useState<string[][]>([
            ["Key Pressed", "Time Stamp", "Time diff in between", "Elapsed Time since start"],

    ]) 

    //last key pressed time record
    const [lastPressTime, setLastPressTime] = useState(0)
    //capture the time at the press of first key
    const [startTime, setStartTime] = useState(0)

    const AddRow = (keyPressed: string) => {
        //Capture exact time 
        const currentTime : Date = new Date() // alert(currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds() + ":" + currentTime.getMilliseconds())
        const formattedTime : string = currentTime.getHours() % 12 + ": " + currentTime.getMinutes() + ": " + currentTime.getSeconds() + ": " + currentTime.getMilliseconds() + "ms"
    
        //Capture time difference since last keypress
        let timeDiffSinceLast : number
        let timeDiffSinceStart : number //first key press ever, for later use
        if(lastPressTime === 0) { //pressing the first key, so no time difference
            timeDiffSinceLast = 0
            //we also record this as the start time
            setStartTime(Date.now())
            timeDiffSinceStart = 0
        } else { //not the first keypress, so we can calculate the time difference
            //diff from previous keypress
            timeDiffSinceLast = currentTime.getTime() - lastPressTime
            //diff from start
            timeDiffSinceStart = currentTime.getTime() - startTime
        }
        setLastPressTime(currentTime.getTime())
        const formattedTimeDiff = `${Math.floor(timeDiffSinceLast / 1000)}s ${timeDiffSinceLast % 1000}ms`;

        //Capture time difference since start
        const formattedStartTimeDiff = `${Math.floor(timeDiffSinceStart / 1000)}s ${timeDiffSinceStart % 1000}ms`;
       
        // Create a new row with the key pressed and default values
            const newRow = [keyPressed, formattedTime, formattedTimeDiff, formattedStartTimeDiff];
      
        // Update the gridData state by appending the new row to the existing data
        setGridData((prevGridData) => [...prevGridData, newRow]);
        setLastPressTime(Date.now)
      };
      
    useEffect(() => {
      

        // Add an event listener for keydown when the component mounts
        const handleKeyDown = (event : KeyboardEvent) => {
          //alert(`Key pressed: ${event.key}`);
          AddRow(event.key)
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        // Remove the event listener when the component unmounts
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
        
      }, [lastPressTime]); //IMPORTANT TO ADD this reactive variable to the dependency array, otherwise it will only run once on mount and not upate the Date.now() value

  return (
    <>
        <div className="component-container flex justify-center border-4 border-red-400">
            {/* component portion that is not flexed, could be the outer div and just apply the flex when this component is called */}
            <div className="block">                 
                <div className="flex justify-center text-lg border-2 border-black m-2">
                    <div className=" block">KeyPressRegister</div>
                    {/* <button onClick={AddRow} className=" border-2 border-black"> Add row</button> */}
                </div>
                <div className={` grid grid-cols-4 gap-4`}>
                    {/* Raw data portion */}
                    {gridData.map( (row : any[], row_index: number) => {
                        return row.map( (cell : string, col_index : number) =>{
                            return <div key={`${row_index}-${col_index}`}>{cell}</div>
                        })
                    } )}
                </div>
            </div>
        </div>
        
    </>
    
  )
}
