import React from "react"
import Layout from "../layouts/Layout"
import Content from "../Content"
import { Place } from "../../types"
type Props = {
    places: Place[]
}
export default function Season(props: Props) {
    const cardStyle = {
        container:
            "w-72 m-2.5 rounded-md md:rounded-lg shadow-lg overflow-hidden md:hover:shadow-xl",
        textContainer: "p-4",
    }
    return (
        <Layout upper={0} isRandomPage={false}>
            <div className="flex flex-wrap justify-center items-stretch">
                {(props.places || []).map((place, index) => (
                    <Content data={place} key={index} style={cardStyle} />
                ))}
            </div>
        </Layout>
    )
}
