function Login(props){
    return(
        <div>
            <h1>Login</h1>
            <label>Enter your user name</label><br/>
            <input value={props.userDetailsLogin.userName} onChange={(event)=>{props.changeUserName(event)}} type={"text"}/><br/>
            <label>enter your password</label><br/>
            <input value={props.userDetailsLogin.password} onChange={(event)=>{props.changPassword(event)}} type={"password"}/>
            <button onClick={()=>props.validateLogin()}>Login</button>
        </div>
    )
}
export default Login;