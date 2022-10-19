import { useSelector } from 'react-redux';
import './App.css';
import Router from './config/Router';
function App() {
   const fname =useSelector((state)=>state.loginReducer.firstName)
   console.log(fname)
   const lname =useSelector((state)=>state.loginReducer.lastName)
   console.log(lname)
   const email =useSelector((state)=>state.loginReducer.email)
   console.log(email)

  return  <Router/>

}

export default App;
  