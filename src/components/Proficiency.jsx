import { useState, useEffect } from "react";

export default function GetProficiency(proficiencyName, proficiencyIcon, proficiencyLevel) {
    const iconPath = `${process.env.PUBLIC_URL}/${proficiencyIcon}`
    console.log(iconPath);
    return(
        <div className = "proficiency">
            <img src= {require=(iconPath)}/>
            <h1>{proficiencyName}</h1>
            <h2>{proficiencyLevel}</h2>
        </div>
    )
}
