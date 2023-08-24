
function Message(){
    const name = "Gopesh Sharma";
    if (name) {
        return <><h1>{sayHello()} {name}</h1></>
    } else {
        return (<><h2>Hello Beautiful World of React</h2></>); 
    }       
}

function sayHello() {
    return "Hi";
}

export default Message