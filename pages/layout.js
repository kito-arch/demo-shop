import React from "react";
import Nav from "../containers/nav/nav";

export default function Layout({children}){
    return(
        <div>
            <Nav/>
            <main>{children}</main>
        </div>
    )
}