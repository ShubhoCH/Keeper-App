import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note";
import notes from "../notes";

//////////////WITHOUT SIMPLIFICATION:
// function createNotes(noteItem){
//     return <Note
//         key = {noteItem.key}
//         title = {noteItem.title}
//         content = {noteItem.content}
//     />
// }

// function App(){
//     return <div>
//         <Header />
//         {notes.map(createNotes)};
//         <Footer />
//     </div>
// }

/////////////WITH SIMPLIFICATION:

function App(){
    return <div>
        <Header />
        {notes.map(noteItem => (
        <Note
            key = {noteItem.key}
            title = {noteItem.title}
            content = {noteItem.content}
        />
        ))};
        <Footer />
    </div>
}

export default App;