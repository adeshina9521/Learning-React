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


function Header(){
    return(
        <div>
            <header>
                <nav className="nav">
                    <img className="nav-logo" src="./react-logo.png" alt="React Image" />
                    <ul className="nav-items">
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

function MainContent(){
    return(
            <div>
                <h1>Reasons I'm Exited to learn React</h1>
                <ol>
                    <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                    <li>I'm more likely to get a job as a developer if I know React</li>
                    <li>Has well over 100K starts on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprises apps, including mobile apps</li>
                </ol>   
            </div>
    )
}
function Footer(){
    return(
        <div>
            <footer>
                "© 2022 Abdullateef development. All rights reserved."
            </footer>
        </div>
    )
}
function Page(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>

    )
}
ReactDOM.render(<Page/>, document.getElementById("root"))
