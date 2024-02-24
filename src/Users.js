function Users(props){
    let users = props.users;
    return(
        <div>
          <h1>Users</h1>
            {
               users.map((user)=>{
                   return(
                       <div>
                         <p style={{color:user.userName.length>=5?"red":"blue"}}>Name: {user.userName} </p>
                         <p>Password: {user.password}
                         {user.password.includes("1")?<label>cool</label>:<label>not cool</label>}
                         </p>
                       </div>
                   )
               })
            }
        </div>
    )
}
export default Users;