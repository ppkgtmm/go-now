import React from "react"
import Layout from "../layouts/Layout"
import Content from "../Content"
import { Place } from "../../types"
import { mapRandomNumberToProps, selectRandom } from "../../functions"
import { connect, useSelector } from "react-redux"

type Props = {
    upper: number
    places: Place[]
}
const Randomize = (props: Props) => {
    const places = props.places
    const randomNumber = useSelector(selectRandom)
    const cardStyle = {
        container: "px-2 mt-5 md:mt-6 lg:mt-20 flex flex-col lg:flex-row lg:mx-32 gap-x-10",
        textContainer: "px-2 md:px-10 mx-auto lg:mx-0 lg:px-0 text-center lg:text-left",
    }
    return (
        <Layout isRandomPage={true} upper={places.length}>
            <Content data={places[randomNumber]} style={cardStyle} />
        </Layout>
    )
}

connect(mapRandomNumberToProps)(Randomize)
export default Randomize
