import { Fragment } from "react"
import TopCat from "./TopCat"
import Header from "./header"
export default function HomeScreen(){
    return(
        <Fragment>
            <Header />
            <TopCat/>
       </Fragment>
    )
}