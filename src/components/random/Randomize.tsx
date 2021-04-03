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
        container: "h-auto relative mt-6 random-content",
        textContainer: "data w-8/12 m-auto",
    }
    return (
        <Layout isRandomPage={true} upper={places.length}>
            <Content data={places[randomNumber]} style={cardStyle} />
            <div className="mt-10 "></div>
        </Layout>
    )
}

connect(mapRandomNumberToProps)(Randomize)
export default Randomize
