export interface Props {
    title: string
    color?: string
}

const Header = (props: Props) => {
    return (
        <div>
            <header>
                <h1 style={{color: props.color ? props.color: 'blue' }}>
                    {props.title}
                </h1>
            </header>
        </div>
    )
}

export default Header