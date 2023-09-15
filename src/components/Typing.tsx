import { useEffect, useRef } from "react";
import '../styles/typingAnimation.css'

import React from 'react'

    //TODO: separate function that returns pre written paragraph, separate function that returns random paragraph
  //  const paragraph : string = "vission A globally-engaged University excelling in science, engineering and the arts. MISSION Caraga State University endeavors to produce globally-competitive and socially responsible human capital towards the sustainable and inclusive development of Caraga Region and beyond."
   // const paragraph : string = "abcd efg"
   const paragraph : string = "The quick brown fox jumps over the lazy dog."
//THIS IS ONLY FOR TYPING LOGIC to watch for keypress
export default function Typing( ) {
    //watch the index of the correct letter
    const [currentLetter, setCurrentLetter] = React.useState<number>(0)
    //array of refs for each letter
    let spanRefArray : React.RefObject<HTMLSpanElement>[] = [] 

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      const compare = event.key
      if(compare === "Shift") return;
      if(compare === "CapsLock") return;
      if(compare === "Tab") return;
      if(compare === "Enter") return;
      if(compare === "Control") return;
      if(compare === "Alt") return;
      if(compare === "Backspace" && currentLetter === 0) return;
      if(compare === "Backspace" && currentLetter > 0){
        //the current character is moved left, and then removed the class that styles
        spanRefArray[currentLetter - 1].current!.classList.remove("correct-style")
        spanRefArray[currentLetter - 1].current!.classList.remove("wrong-style")
        setCurrentLetter(currentLetter - 1)

      }
      else if(compare === letters[currentLetter]){
        //green color
        spanRefArray[currentLetter].current!.classList.add("correct-style")

        setCurrentLetter(currentLetter + 1)
      } else if (compare !== letters[currentLetter]){
        //red color
        spanRefArray[currentLetter].current!.classList.add("wrong-style")
        setCurrentLetter(currentLetter + 1)

      }

      //handle when everything is finished
      if(currentLetter === letters.length - 1){
        alert("finished, click enter and press f5 to restart")
      }
   
    }


    const letters : string[] = paragraph.split("")
    const words : string[] = paragraph.split(" ")
   // const cursorRef = useRef<HTMLSpanElement  | null>(null);

    //focus the paragraph div for keypress
    useEffect(() => {
        // console.log(`x: ${cursorRef.current?.getBoundingClientRect().x}, y: ${cursorRef.current?.getBoundingClientRect().y}`)
        // console.log(`top: ${cursorRef.current?.style.top}, left: ${cursorRef.current?.style.left}`)
        const paragraphElement = document.getElementById('raceInput');
        if (paragraphElement) {
          paragraphElement.focus();
        }
      }, []);

      //focus the input when clicking the typing div
      const FocusInput = () => {
        const paragraphElement = document.getElementById('raceInput');
        if (paragraphElement) {
          paragraphElement.focus();
        }
      }

  return (
    <div onClick={FocusInput} >
       
        <div  id="paragraph" onKeyDown={handleKeyDown} className=' m-0 bg-blue-300 flex flex-wrap  p-6  max-w-screen-xl'>
            <input  placeholder="Press here to start typing" id="raceInput" type="text" className=" opacity-0 absolute top-4 w-64" />
        
            {/* <span   className=" text-xl absolute"  ref={cursorRef}>|</span> */}
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
                <div onClick={FocusInput} key={`word-${index}`} className="word text-2xl  whitespace-break-spaces block">
                  {spanRefsInWord.map((spanRef, innerIndex) => {
                    return <span className="className" key={`${index}-${innerIndex}`} ref={spanRef}>{word[innerIndex]}</span>;
                  })}
                  <span ref={spaceRef} key={`space-${index}`} className="wordSeparator">
                    {" "}
                  </span>
                </div>
              );
      
        })}
    
      
        </div>
    </div>
   
        

  )
}
