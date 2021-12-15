// import React from 'react'
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// const Route1 = () =>{

//     return(
//         <Router>
//           <div>
//             <Link to = "/clicked">Click me?</Link>
//           </div>
//           <div>
//             <Link to = "/lets">lets goo</Link>
//           </div>
//           <div>
//             <Link to = "/logout">Bye</Link>
//           </div>

//           <Switch>
//           <Route exact path="/clicked">
//             <Clicked />
//           </Route>
//           <Route path="/lets">
//             <Lets />
//           </Route>
//         </Switch>

//         </Router>
//     )
// }
// function Clicked() {
//     return (
//       <div>
//         <h><img src="https://c.tenor.com/KrWVp75o3XkAAAAC/bonkdog-bonk.gif"></img></h>
//       </div>
//     );
//   }

//   function Lets() {
//     return (
//       <div>
//         <h><img src="https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"></img></h>
//       </div>
//     );
//   }


//   export default Route1
import { Switch, Route } from "react-router";

/**
 * Pages
 */
import AddAccount from '../../pages/add_acc'
import LoliMonitoring from '../../pages/loli_moni'
import Update from '../../pages/update_page/updatepage/update'

const Routes = props => {

    return (
        <Switch>
            <Route 
                exact
                path={"/Add"} 
                render={(renderProps) => {
                  return <AddAccount {...props} {...renderProps}/>
                }}
            />
            <Route 
                exact
                path={"/"} 
                render={(renderProps) => {
                  return <LoliMonitoring {...props} {...renderProps}/>
                }}
            />
            <Route 
                exact
                path={"/update"} 
                render={(renderProps) => {
                  return <Update {...props} {...renderProps}/>
                }}
            />
        </Switch>
    )
}

export default Routes;