import React from "react";

// needs to get date and year
//needs to return <footer><p>
function Footer(){
    const year = new Date().getFullYear();

    return <footer><p>Copyright {year}</p></footer>;
}

export default Footer;