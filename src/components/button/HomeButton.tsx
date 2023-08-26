import Clickable from "./Clickable"

type Props = {
    buttonClass: string
    text: string
    path?: string
}
export default function HomeButton(props: Props) {
    const config = { styleClass: props.buttonClass }
    return (
        <Clickable
            config={{
                ...config,
                path: props.path || "/",
            }}
        >
            {props.text}
        </Clickable>
    )
}
