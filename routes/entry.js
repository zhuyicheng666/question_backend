import login from './login'
import register from './register'
const entry = function(app) {
    app.use('/login', login)
    app.use('/register', register)
}
export default entry