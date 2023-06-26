function Main(props){
    
    return(
        <main className="Main">
            <button onClick={props.handleClick}> IncrementCounter </button>
            <button onClick={props.handleClick2}> DecrementCounter </button>
            <h1>{props.count}</h1>
        </main>
    )
}
export default Main;