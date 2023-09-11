import { useEffect } from "react";
import '../styles/typingAnimation.css'

import React from 'react'

interface lettersArrayProps {
    letters : string[]
}

//THIS IS ONLY FOR TYPING LOGIC to watch for keypress
export default function Typing( {letters} : lettersArrayProps) {
    //watch the index of the correct letter
    const [correctLetterCounter, setCorrectLetterCounter] = React.useState(0)

    useEffect( () => {
        addEventListener("keydown", (event: KeyboardEvent) => {
            //handle if its correct key
            if(event.key === letters[correctLetterCounter]) {
                console.log("Correct key pressed: "+ event.key)
                //MANIPULATE THE CURSOR THINGY HERE
                    //get position of the correct letter using the unique key, uniqye key is determined by index
                    const spanElement = document.getElementById(correctLetterCounter+"")
                    spanElement?.classList.add("correct-style")
                setCorrectLetterCounter(correctLetterCounter + 1)   
            }
        })

    },[correctLetterCounter])
  return (
    <div></div>
  )
}
