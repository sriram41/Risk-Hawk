import React from 'react';
import './Sidebar.css';  // Import the CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img className='total-logo-1211' src="/assets/riskhawk-logo.png" alt="Risk Hawk" />
      </div>
      <ul className="sidebar-menu">
        <li>
         <img src='/assets/intern.png' alt='intern' />  Internal Audit
        </li>
        <li>
        <img src='/assets/uat.png' alt='uat' /> UAT Testing
        </li>
        <li>
        <img src='/assets/interact.png' alt='interact' /> Intract
        </li>
        <li className="active">
        <img src='/assets/user3.jpg' alt='user3' />  Queue
        </li>
        <li>
        <img src='/assets/flow.jpg' alt='flow' /> Workflow
        </li>
        <li>
        <img src='/assets/user2.jpg' alt='user2' /> Admin
        </li>
        <li>
        <img src='/assets/vector.png' alt='vector' /> Asset
        </li>
        <li>
        <img src='/assets/user3.jpg' alt='user3' /> Parent
        </li>
        <li>
        <img src='/assets/opt-one.jpg' alt='opt-one' /> Option One
        </li>
        <li>
        <img src='/assets/opt-two.jpg' alt='opt-two' /> Option Two
        </li>
        <li>
        <img src='/assets/set.png' alt='set' /> All Accessories
        </li>
        <li>
        <img src='/assets/audit.png' alt='audit' /> Internal Audit
        </li>
        <li>
        <img src='/assets/de.png' alt='de' /> Decorating
        </li>
        <li>
        <img src='/assets/pre.png' alt='pre' /> Presenting
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
