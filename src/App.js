import React, { useEffect , useState} from "react";
import axios from 'axios';

const App = () => {

 const [users , setUsers] = useState([]);

  useEffect(() => {
    loadData()
  },[users])

  const loadData = () => {
    axios.get('http://localhost:3001/api/users')
    .then(res =>{
      setUsers(res.data.users)
    })
    .catch(err => console.log(err.message))
  }

  return(
    <div>
        <ul>
          {
            users.map(user => <li><b>{user.name} </b> | {user.name}</li>)
          }
        </ul>
    </div>
  )
}

export default App;