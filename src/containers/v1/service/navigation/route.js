import { Switch, Route } from "react-router";
import AddAccount from '../../pages/add_acc'
import LoliMonitoring from '../../pages/loli_moni'
import Update from '../../pages/update_page/updatepage/update'
import Create from '../../pages/loli_moni/create_acc/create'
import Back from '../../pages/loli_moni/menubar/menubar'

const Routes = props => {

  return (
    <Switch>
      <Route
        exact
        path={"/Add"}
        render={(renderProps) => {
          return <AddAccount {...props} {...renderProps} />
        }}
      />
      <Route
        exact
        path={"/"}
        render={(renderProps) => {
          return <LoliMonitoring {...props} {...renderProps} />
        }}
      />
      <Route
        exact
        path={"/update"}
        render={(renderProps) => {
          return <Update {...props} {...renderProps} />
        }}
      />
      <Route
        exact
        path={"/create"}
        render={(renderProps) => {
          return <Create {...props} {...renderProps} />
        }}
      />
      <Route
        exact
        path={"/home"}
        render={(renderProps) => {
          return <Back {...props} {...renderProps} />
        }}
      />
    </Switch>
  )
}

export default Routes;