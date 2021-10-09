import React from "react";

function Note(){
    const currentYear = new Date().getFullYear();
    return (
        <div className = "note">
            <h1>This is the title</h1>
            <p>THis is the content</p>
        </div>
    );
}

export default Note;