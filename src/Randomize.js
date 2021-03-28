import React from "react"
import "./style/index.css"
import RandomContent from "./RandomContent"
import { useSelector } from "react-redux"
import { connect } from "react-redux"
import Layout from "./layouts/Layout"

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
        <Layout upper={props.upper}>
            <RandomContent
                name={places[randomNumber].name}
                content={places[randomNumber].content}
                url={places[randomNumber].url}
            />
        </Layout>
    )
}
connect(mapStateToProps)(Randomize)

export default Randomize
