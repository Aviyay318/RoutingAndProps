import React from "react";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Login from "./Login";
import SignIn from "./SignIn";
import Users from "./Users";
import users from "./Users";
class Home extends React.Component{
   state={
       users:[{userName:"Daniel",password:"1234"},{userName:"avi",password:"234"}],
       signIn:false,
       userDetailsLogin: {
           userName: "",
           password: ""
       },
       userName:"",password:"",
       login:false,
       adminPassword:"5678",
       usersList:false,
       disabledLogin:"123"



   }
   addUser=()=>{
      const toAdd = this.validateSignInDetails()
       if (toAdd){
      const tempUser = this.state.users
      tempUser.push({userName:this.state.userDetailsLogin.userName,password:this.state.userDetailsLogin.password})
      console.log(this.state.users)
      this.setState({login:true})
       }

   }
   validateLogin=()=>{
      const index = this.state.users.findIndex((user)=>
      {return user.userName===this.state.userDetailsLogin.userName})
       index!==-1?
      this.state.users[index].password===this.state.userDetailsLogin.password?
          alert("hello " + this.state.userDetailsLogin.userName):
          alert("password wrong"):
           alert("user name wrong")
   }

   validateSignInDetails=()=>{
       let toAdd = false
     const isExist = this.state.users.filter((user)=>{
         return user.userName===this.state.userName
     })
       isExist.length>0? alert("user name is taken "):
           this.state.password.length>=4&&this.state.password.includes("$")?toAdd=true:
               alert("password need to be +4 and includes $")
       return toAdd
   }
    changeUserName = (event)=>{
       this.setState({userName:event.target.value})
    }
    changPassword=(event)=>{
        this.setState({password:event.target.value})
    }
    changeUserNameLogin = (event)=>{
       const name = event.target.value
        let tempUserDetailsLogin = this.state.userDetailsLogin
        tempUserDetailsLogin.userName = name;
        this.setState({userDetailsLogin:tempUserDetailsLogin})
    }
    changPasswordLogin=(event)=>{
        const password = event.target.value
        let tempUserDetailsLogin = this.state.userDetailsLogin
        tempUserDetailsLogin.password = password;
        this.setState({userDetailsLogin:tempUserDetailsLogin})
    }

    adminLogin=()=>{
       const  answer = window.prompt("Enter admin password")
        answer===this.state.adminPassword?this.setState({usersList:true}):
            alert("wrong password")
    }



  render() {
      return(

         <div style={{textAlign:"center"}}>
             <div>
                 {this.state.signIn===false&&
                 <div>
                 <button onClick={()=>this.setState({signIn:true})}>Sign in1</button>
                 <button disabled={this.state.disabledLogin.length<2}>Login</button>
                 </div>}
                 <button onClick={()=>{this.adminLogin()}}>Users</button>
             </div>

          <div style={{textAlign:"center"}}>
           <BrowserRouter>
               <Link to={"/login"}>go to login</Link>
               {this.state.signIn&&<Navigate to={"/signin"} />}
               {this.state.login&&<Navigate to={"/login"} />}
               {this.state.usersList&&<Navigate to={"/users"} />}
            <Routes>
                <Route path={"/login"} element={<Login
                    userDetailsLogin={this.state.userDetailsLogin}
                    changeUserName={this.changeUserNameLogin} changPassword={this.changPasswordLogin}
                    validateLogin={this.validateLogin}/>}></Route>
                <Route path={"/signin"} element={<SignIn  changeUserName={this.changeUserName}
                 userName={this.state.userName} password={this.state.password}  addUser={this.addUser}  changPassword={this.changPassword} />}></Route>
                <Route path={"/users"}  element={<Users users={this.state.users} />}></Route>
            </Routes>
           </BrowserRouter>
          </div>
         </div>
      )
  }
}
export default Home;
