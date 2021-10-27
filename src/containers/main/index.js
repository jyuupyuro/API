import
    React
from 'react';
import {
    useSelector
} from 'react-redux'

/**
 * Services
 */
import SSORoutes from './services/navigation/route'

const App = (props) => {

    const user = useSelector(state => state.containers.main.user)

    return <SSORoutes currentUser={props.currentUser || user} />
}
<body>Yuven carry me</body>
export default App
