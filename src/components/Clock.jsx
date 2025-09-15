import { useEffect, useState } from "react";

export default function Clock(){
const [time, setTime] = useState(new Date()); //Opstiller komponent til opdatering af tid, baseret på Datoen
const hours = time.getHours();
const minutes = String(time.getMinutes()).padStart(2, "0"); //sørger for det har to digits
const date = time.toLocaleDateString(undefined, {day: "2-digit", month: "short"});


useEffect(() => {
    const timer = setInterval(() => { //timer til opdatering
        setTime(new Date());
    }, 60000); // Opdaterer hvert 60000 milisekund (1m)
    return () => clearInterval(timer);
}, []);

return(
    <div className="Clock">
        <p>{date}</p>
        <p>{hours}:{minutes}</p>
    </div>
)

}