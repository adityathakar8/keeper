import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
 const [noteArray, arrayAdder] = React.useState([]);
 function Add(params) {
   arrayAdder((prev) => {
     return [...prev, params];
   });
 }

 function deleteItems(key) {
   arrayAdder(() => {
     return noteArray.filter((note, index) => {
       return key !== index;
     });
   });
 }
 return (
   <div>
     <Header />
     <CreateArea addToArray={Add} />
     {noteArray.map((note, index) => {
       return (
         <Note
           delete={deleteItems}
           id={index}
           key={index}
           title={note[0]}
           content={note[1]}
         />
       );
     })}
     <Footer />
   </div>
 );
}

export default App;
