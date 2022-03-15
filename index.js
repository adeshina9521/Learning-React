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

// const Navbar = (<nav>
//                 <h1>A-CUBE</h1>
//                 <ul>
//                     <li>Pricing</li>
//                     <li>Pricing</li>
//                     <li>Pricing</li>
//                 </ul>
//             </nav>
//                 )                
// ReactDOM.render( Navbar
//                 ,
//                  document.getElementById("root"))

const page = (
    <div>
        <img src="./react-logo.png" alt="" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K starts on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprises apps, including mobile apps</li>
        </ul>   
    </div>
)

ReactDOM.render(page, document.getElementById("root"))
