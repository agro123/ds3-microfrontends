import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


import './app.module.css'

function InitialView() {
   const navigate = useNavigate();
   useEffect(() => {
        setTimeout(() => {
            navigate('/signin');
        }, 2000);
   }, [])
   
  return (
    <div>Starting...</div>
  )
}

export default InitialView