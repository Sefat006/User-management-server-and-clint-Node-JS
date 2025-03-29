import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])


  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user);
  // 2. client side sent data via post
  // 3. set fetch method inside the fetch options (second parameter)
  // 4. options will have three things : method
  // 5. option will have header: 'content-type' : 'application/json'
  // 6. don't forget to sent data stringify
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // ager new user dhukbe, then newData dhukbe
      const newUsers = [...users, data]
      setUsers(newUsers);
      form.reset();
    });
  }


  return (
    <div>
      <h1>Users Management System</h1>
      <h3>Number of Users : {users.length}</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id='' />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="Submit" value="Add User" />
      </form>
      <div>
        {
          users.map( user => <p key={user.id}>{user.id} : {user.name} : {user.email}</p>)
        }
      </div>
    </div>
  )
}

export default App
