
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Index from './pages/produtos'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Index}/>
            </Switch>
        </BrowserRouter>
    )
}

