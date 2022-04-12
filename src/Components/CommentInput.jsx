import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function CommentInput({comments,setComments}){

   const [userInput,setUserInput] = useState("")

   const inputChanged = (event) => {
      setUserInput(event.target.value)
   }

   const buttonClicked = (event) => {
      event.preventDefault();
      if(userInput != ""){
         let comment= {id: uuidv4() , message: userInput}
         setComments(comments.concat(comment))
         setUserInput("")
      }
   }


    return (
      <form className="" onSubmit={buttonClicked}>
         <textarea value={userInput} onChange={inputChanged} className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" placeholder="Type your comment"></textarea>
         <input type="submit" className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value="Post Comment"/>
      </form>
    )
}