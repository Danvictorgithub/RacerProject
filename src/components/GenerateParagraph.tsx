import React from 'react'

    //TODO: separate function that returns pre written paragraph, separate function that returns random paragraph
    const paragraph : string = "VISION A globally-engaged University excelling in science, engineering and the arts. MISSION Caraga State University endeavors to produce globally-competitive and socially responsible human capital towards the sustainable and inclusive development of Caraga Region and beyond."
   export const letters : string[] = paragraph.split("")

//spits out a readily baked paragraph ready for user typing inputs
export default function GenerateParagraph() {


  return (
    <>
        <div className='flex flex-wrap  p-6  max-w-screen-xl'>
            {letters.map((letter, index) => {
                    return (
                        <span id={index+""} className='  text-2xl  whitespace-break-spaces block' key={index}>{letter}</span>
                    
                    )
            })}
        </div>
           
    </>
  )
}






