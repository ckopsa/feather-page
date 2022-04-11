import * as React from "react"

const Greeting = (props: {name: string}) => {
    return (
        <p>Hi {props.name}!</p>
    )
}

export default Greeting
