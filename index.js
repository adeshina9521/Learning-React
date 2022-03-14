// function MainContent(){
//     return(
//         <h1>I'm Learning React!</h1>
//     )
// }
// ReactDOM.render(<div><MainContent/></div>, document.getElementById("root"))


// const h1 = document.createElement("h1");
// h1.textContent = "this is an imparative way to program";
// h1.className = "header";
// document.getElementById("root").append(h1)

const page = (<div>
                <h1>This is JSX</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim.</p>
            </div>
                )                
ReactDOM.render( page
                ,
                 document.getElementById("root"))