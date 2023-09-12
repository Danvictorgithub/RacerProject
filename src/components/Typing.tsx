import { useEffect, useRef } from "react";
import '../styles/typingAnimation.css'

import React from 'react'

    //TODO: separate function that returns pre written paragraph, separate function that returns random paragraph
    const paragraph : string = "vission A globally-engaged University excelling in science, engineering and the arts. MISSION Caraga State University endeavors to produce globally-competitive and socially responsible human capital towards the sustainable and inclusive development of Caraga Region and beyond."
   
//THIS IS ONLY FOR TYPING LOGIC to watch for keypress
export default function Typing( ) {
    //watch the index of the correct letter
    const [correctLetterCounter, setCorrectLetterCounter] = React.useState(0)

    //array of refs for each letter
    let spanRefArray : React.RefObject<HTMLSpanElement>[] = [] 

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {

        if(event.key === letters[correctLetterCounter]) {
            console.log(event.key)
            console.log('cor')
            spanRefArray[correctLetterCounter].current?.style.setProperty("color", "green")
            setCorrectLetterCounter(correctLetterCounter + 1)
        }
    }

    const letters : string[] = paragraph.split("")
    const words : string[] = paragraph.split(" ")

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
        {words.map((word, index) => {
            let spanRefsInWord: React.RefObject<HTMLSpanElement>[] = [];
            //each word, we break down its characters and push each character to the spanRefArray
            words[index].split("").map(() => {
                const spanRef = useRef(null);
                spanRefArray.push(spanRef); //whole character array
                spanRefsInWord.push(spanRef); //only characters for the certain current word
            })
            //ref for space character
            const spaceRef = useRef(null);
            spanRefArray.push(spaceRef); //add the space ref to the whole refs array

            // every word is a div, every letter is a span
            return (
                <div key={index} className="word text-2xl  whitespace-break-spaces block'">
                    {spanRefsInWord.map((spanRef, index) => {
                        return <span className="className='  " key={index} ref={spanRef}>{word[index]}</span>
                    })}

                    <span ref={spaceRef} key={index} className="wordSeparator">
                    {" "}
                    </span>
                </div>


            )
      
        })}
    </div>
       
</>
  )
}
