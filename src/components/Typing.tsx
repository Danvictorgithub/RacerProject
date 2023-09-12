import { useEffect, useRef } from "react";
import '../styles/typingAnimation.css'

import React from 'react'

    //TODO: separate function that returns pre written paragraph, separate function that returns random paragraph
    const paragraph : string = "vission A globally-engaged University excelling in science, engineering and the arts. MISSION Caraga State University endeavors to produce globally-competitive and socially responsible human capital towards the sustainable and inclusive development of Caraga Region and beyond."
   export const letters : string[] = paragraph.split("")

//THIS IS ONLY FOR TYPING LOGIC to watch for keypress
export default function Typing( ) {
    //watch the index of the correct letter
    const [correctLetterCounter, setCorrectLetterCounter] = React.useState(0)

   
    let spanRefArray : React.RefObject<HTMLSpanElement>[] = [] 

  
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if(event.key === letters[correctLetterCounter]) {
            spanRefArray[correctLetterCounter].current?.style.setProperty("color", "green")
            setCorrectLetterCounter(correctLetterCounter + 1)
        }
    }

    //focus the paragraph div for keypress
    useEffect(() => {
        const paragraphElement = document.getElementById('raceInput');
        if (paragraphElement) {
          paragraphElement.focus();
        }
      }, []);

  return (
    <>
    <div id="paragraph" onKeyDown={handleKeyDown} className='flex flex-wrap  p-6  max-w-screen-xl'>
        <input id="raceInput" type="text" className=" absolute top-4 w-64" />
        {letters.map((letter, index) => {
                const spanRef = useRef(null); // Create a ref for each span
                spanRefArray.push(spanRef); // Push the ref to the spanRefs array
                return (
                    <span ref={spanRef} id={index+""} className='  text-2xl  whitespace-break-spaces block' key={index}>{letter}</span>
                )
        })}
    </div>
       
</>
  )
}
