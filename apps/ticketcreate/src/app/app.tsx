// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import TicketView from "./ticketView";
import TicketCreate from "./ticketCreate";

import '../styles.css';
import './ticketcreate.css'

import { useParams } from "react-router-dom";

export function App() {
  const { id } = useParams();

  if(id)
    return <TicketView id={id} /> 

  return (
    <TicketCreate />
  );
}

export default App;
