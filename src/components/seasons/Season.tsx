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
            "w-64 md:w-72 rounded-md md:rounded-lg shadow-lg overflow-hidden md:hover:shadow-xl text-sm my-4 md:my-0",
        textContainer: "p-4",
    }
    return (
        <Layout upper={0} isRandomPage={false}>
            <div className="mt-4 mb-6">
                <div className="flex flex-wrap items-stretch justify-center mx-auto max-w-screen-xl gap-4">
                    {(props.places || []).map((place, index) => (
                        <Content data={place} key={index} style={cardStyle} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}
