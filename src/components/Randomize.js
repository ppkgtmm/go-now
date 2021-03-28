import React from "react"
import { useSelector } from "react-redux"
import { connect } from "react-redux"
import Layout from "./layouts/Layout"
import Content from "./Content"

const selectRandom = (state) => state.randomize

const mapStateToProps = (state) => {
    return {
        randomize: state.randomize,
    }
}
const Randomize = (props) => {
    const places = props.places
    const randomNumber = useSelector(selectRandom)
    const cardStyle = {
        container: "random-content h-auto relative mt-4",
        texrContainer: "data w-8/12 m-auto",
    }
    return (
        <Layout upper={props.upper} isRandomPage={true}>
            <Content data={places[randomNumber]} style={cardStyle} />
        </Layout>
    )
}
connect(mapStateToProps)(Randomize)

export default Randomize
