import React from "react"
import Layout from "./components/layouts/Layout"
import Content from "./Content"
export default function Season(props) {
    return (
        <Layout>
            <div className="flex flex-wrap justify-center items-stretch">
                {(props.places || []).map((place, index) => (
                    <Content data={place} key={index} />
                ))}
            </div>
        </Layout>
    )
}
