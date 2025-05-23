import * as React from 'react';
import InitialView from './initial-view';
import { Route, Routes } from 'react-router-dom';

const Signin = React.lazy(() => import('signin/Module'));
const Signup = React.lazy(() => import('signup/Module'));
const Ticketlist = React.lazy(() => import('ticketlist/Module'));
const Ticketcreate = React.lazy(() => import('ticketcreate/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/ticketlist">Ticketlist</Link>
        </li>
        <li>
          <Link to="/ticketcreate">Ticketcreate</Link>
        </li>
      </ul> */}
      <Routes>
        <Route path="/" element={<InitialView />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ticketlist" element={<Ticketlist />} />
        <Route path="/ticketcreate/"element={<Ticketcreate />} />
         <Route path="/ticketview/:id" element={<Ticketcreate />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
