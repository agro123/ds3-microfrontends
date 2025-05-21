import { useState } from 'react';
import '../styles.css';
import './ticketcreate.css'

import { MdArrowBack, MdCreate } from "react-icons/md";
import { STATES, USERS } from './helpers'
import Dropdown from '../components/dropdown/dropdown';


const TicketView = () => {
  const [formValues, setFormValues] = useState<any>({
    decription: 'Lorem ipsum',
    comments: '',
    assignedTo: 2,
    status: 2
  })


  const onChange = (key: string) => (value: any) => {
    setFormValues((curr: any) => ({
      ...curr,
      [key]: value
    }))
  }

  return (
    <div className="task-view">
      <div className="container">
        {/* Header */}
        <div className="header">
          <button className="back-button">
            <MdArrowBack className="icon"/>
          </button>
          <h1 className="page-title">Task View</h1>
          <button className="apply-button">Apply Changes</button>
        </div>

        <div className="content">
          <div className="main-content">
            {/* Task Title */}
            <div className="task-title-section">
              <h2 className="task-title">Task: Task title</h2>
            </div>

            {/* Description */}
            <div className="description-section">
              <div className="section-header">
                <h3 className="section-title">Description</h3>
                <button className="edit-button">
                  <MdCreate className="icon-small"/>
                </button>
              </div>
              <div className="input-container">
                <textarea
                  value={formValues.description}
                  onChange={(e) => onChange('description')(e.target.value)}
                  className="text-input description-input"
                />
              </div>
            </div>

            {/* Comments */}
            <div className="comments-section">
              <h3 className="section-title">Comments</h3>
              <div className="input-container">
                <textarea
                  value={formValues.comments}
                  onChange={(e) => onChange('comments')(e.target.value)}
                  placeholder="Add a comment..."
                  className="text-input comments-input"
                />
              </div>
            </div>
          </div>

          <div className="sidebar">
            {/* Assigned To */}
            <div className="assigned-section">
              <h3 className="section-title">Assigned to</h3>
              <Dropdown
                value={formValues.assignedTo}
                onChange={onChange('assignedTo')}
                options={USERS} 
                customItem={(opt) => <div className="member-item">
                    <img className="avatar" src={opt?.picture} alt="profile-picture" />
                    <span className="member-name">{opt.label}</span>
                  </div>} 
              />
            </div>

            {/* Status */}
            <div className="status-section">
              <h3 className="section-title">Status</h3>
              <Dropdown
                value={formValues.status}
                onChange={onChange('status')}
                options={STATES} 
                customItem={(opt) => <div className="status-display">
                    <div className="status-dot" />
                    <span className="member-name">{opt.label}</span>
                  </div>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketView;
