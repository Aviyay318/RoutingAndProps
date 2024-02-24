function SignIn(props){
let users = props.users

  function validate() {

  }

    return(
        <div>
            <h1>Sign in</h1>
            <label>Enter user name</label>
            <input value={props.userName} onChange={(event)=>props.changeUserName(event)} type={"text"}/>
            <br/>
            <label>Enter user password</label>
            <input type={"password"} value={props.password} onChange={(event)=>props.changPassword(event)}/>
            <br/>
            <button onClick={()=>props.addUser()}>Sign in2</button>
        </div>
    )
}
export default SignIn;