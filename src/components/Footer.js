import React from 'react'


export default function footer() {
    const miestilo={
        color: "white",
        background: "rgb(0,0,0)",
        background: "linear-gradient(0deg, rgba(0,0,0,1) 92%, rgba(0,0,0,0.7292850378787878) 95%, rgba(0,0,0,0) 100%)",
        padding: "10px",
        fontFamily: "Arial",
        position: "fixed",
        width: "100%",
        height: "300px",
        top: "96%",
        left: "0px"
      };
    
    return (
        <footer className="footer" style={miestilo}>
    </footer>
    )
}
