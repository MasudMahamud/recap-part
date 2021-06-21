import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [teachers, setTeachers] = useState([]);

useEffect( ()=>{
  fetch(`http://jsonplaceholder.typicode.com/users`)
  .then(res => res.json())
  .then(data => setTeachers(data))
},[])
//   const teachers = [
//     {name:'Mr Kamrul Hasan', job: 'Teacher'},
//     {name:'Mr Bellal Uddin', job: 'Businessman'},
//     {name:'Mr Tony', job: 'Hero'},
// ]
  return (
    <div className="App">
        <ClassCount></ClassCount>
     <h2>Dynamic : Information</h2>
        {
          teachers.map(nk => <Teacher name={nk.name} key={nk.id} email={nk.email} phone={nk.phone} website={nk.website}> </Teacher>)
        }
    </div>
  );
}

function ClassCount() {
const [count,setCount] = useState(15);
const handleAddClass = () => setCount(count+1);
const handleRemoveClass = () => setCount(count-1);
  return(
    <div>
      <button onClick={handleAddClass} > Add CLass </button>
      <button onClick={handleRemoveClass} > Remove CLass </button>
      <p>Total class : {count} </p>
      <ActiveClass classes={count}></ActiveClass>
      <ActiveClass classes={count-3 || 0}></ActiveClass>
      <ActiveClass classes={count-1 || 0}></ActiveClass>
    </div>
  )
}

function ActiveClass(props) {
  
  return(
    <h4>I have join : {props.classes} class </h4>
  )
}

function Teacher(props) {
  const teacherStyle = {
    border:'1px solid orange',
    width:'300px',
    margin:'16px',
    padding:'10px',
    backgroundColor:'#333',
    color:'#ddd',
   
    
  }
  return(
    <div style={teacherStyle}>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.website}</p>
    </div>
  )
}

export default App;
