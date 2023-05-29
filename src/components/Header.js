import React from "react";
import { Avatar } from "@mui/material";
import "./header.css";
export function Header() {
    return (
        <header>
            <nav>
                <h1>Webcode2</h1>

                <div className="avtar">
                    <Avatar style={{ background: "blue" }}>H</Avatar>
                </div>
            </nav>
        </header>
    )
}
