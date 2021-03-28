import React from "react"
import "./style/index.css"
import RandomContent from "./RandomContent"
import { useSelector } from "react-redux"
import { connect } from "react-redux"
import Layout from "./components/layouts/Layout"

const selectRandom = (state) => state.randomize

const mapStateToProps = (state) => {
    return {
        randomize: state.randomize,
    }
}
const Randomize = (props) => {
    const places = props.places
    const randomNumber = useSelector(selectRandom)
    return (
        <Layout upper={props.upper} isRandomPage={true}>
            <RandomContent data={places[randomNumber]} />
        </Layout>
    )
}
connect(mapStateToProps)(Randomize)

export default Randomize
