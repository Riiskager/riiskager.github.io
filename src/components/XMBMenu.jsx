import { Fragment } from "react"
import TopCat from "./TopCat"
import Header from "./header"
import VideoBg from "./background"

export default function HomeScreen(){
    return(
        <Fragment>
            <VideoBg />
            <Header />
            <TopCat/>
       </Fragment>
    )
}