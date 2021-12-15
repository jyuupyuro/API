import { Switch, Route } from "react-router";

/**
 * Pages
 */
import SSOPanel from '../../../pages/SSOPanel'
import SSOLogin from '../../../pages/SSOLogin'

const SSORoutes = props => {

    console.log("SSO ROUTES",props.currentUser)
    console.log(props.currentUser && Object.keys(props.currentUser).length > 0)

    return (
        <Switch>
            <Route 
                path={"/"} 
                render={() => (
                    props.currentUser 
                    &&
                    Object.keys(props.currentUser).length > 0
                    ?
                        <SSOPanel currentUser={props.currentUser}/>
                    :
                    <SSOPanel currentUser={props.currentUser}/>
                )}
            />
        </Switch>
    )
}

export default SSORoutes;