import React from "react"
import Layout from "./layouts/Layout"
import Content from "./Content"
export default function Season(props) {
    const cardStyle = {
        container: "w-72 m-2.5 rounded-lg shadow-lg overflow-hidden",
        textContainer: "px-2 py-4",
    }
    return (
        <Layout>
            <div className="flex flex-wrap justify-center items-stretch">
                {(props.places || []).map((place, index) => (
                    <Content data={place} key={index} style={cardStyle} />
                ))}
            </div>
        </Layout>
    )
}
