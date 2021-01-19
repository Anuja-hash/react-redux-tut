import App from './App'
import {connect} from 'react-redux'
import {Login} from './services/action'
import {SignIn} from './services/action'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    loginHandler:data=>dispatch(Login(data)),
    signin:data=>dispatch(SignIn(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(App)
