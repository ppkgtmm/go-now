import React from "react"
import Layout from "../layouts/Layout"
import Content from "../Content"
import { Place } from "../../types"
type Props = {
    places: Place[]
    isHomePage: boolean
}
export default function Season(props: Props) {
    const cardStyle = {
        container:
            "w-64 md:w-72 rounded-md md:rounded-lg shadow-lg overflow-hidden md:hover:shadow-xl text-sm mb-4 mx-auto md:m-0 card",
        textContainer: "p-4",
    }
    return (
        <Layout isHomePage={props.isHomePage}>
            <div className="mt-20 mb-6">
                <div className="container mx-auto md:max-w-screen-sm lg:max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-items-center md:gap-x-2 md:gap-y-8 lg:gap-x-8">
                    {(props.places || []).map((place, index) => (
                        <Content data={place} key={index} style={cardStyle} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}
