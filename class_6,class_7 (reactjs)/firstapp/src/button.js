function Button(props) {


    return <button {...props}>{props.value}</button>
}

function LoginButton() {
    return <button style={{ color: 'white', fontSize: '10px', backgroundColor: 'blue' }}>Log in</button>
}
function Pera(props) {
    return (
        <>
            <p style={{ color: 'grey', fontSize: '1.2em' }}>
                {props.children}
            </p>
        </>
    )
}





export { Button, LoginButton, Pera }