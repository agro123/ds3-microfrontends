import { useState } from 'react';

import { MdArrowBack } from "react-icons/md";
import { STATES, USERS } from './helpers'
import Dropdown from '../components/dropdown/dropdown';
import { useNavigate } from 'react-router-dom';


const TicketCreate = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<any>({
    decription: '',
    comments: '',
    assignedTo: null,
    status: null
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
          <button className="back-button" onClick={() => navigate('/ticketlist')}>
              <MdArrowBack className="icon"/>
          </button>
          <h1 className="page-title">Creating new Task</h1>
          <button className="apply-button" onClick={() => navigate('/ticketlist')}>Create</button>
        </div>

        <div className="content">
          <div className="main-content">
            {/*Title */}
            <div className="task-title-section">
              <div className="section-header">
                <h3 className="section-title">Title</h3>
              </div>
              <div className="input-container">
                <input
                  value={formValues.title}
                  onChange={(e) => onChange('title')(e.target.value)}
                  className="text-input"
                  placeholder="Add a title..."
                />
              </div>
            </div>

            {/* Link GitHub */}
            <div >
              <div className="section-header">
                <h3 className="section-title">Link Github</h3>
              </div>
              <div className="input-container">
                <input
                  value={formValues.linkgh}
                  onChange={(e) => onChange('linkgh')(e.target.value)}
                  className="text-input"
                  placeholder="Add link from github..."
                />
              </div>
            </div>
            <div className='content'>
                {/* description */}
              <div className='main-content'>
                <div className="section-header">
                  <h3 className="section-title">Description</h3>
                </div>
                <div className="input-container">
                  <textarea
                    value={formValues.description}
                    onChange={(e) => onChange('description')(e.target.value)}
                    className="text-input"
                    placeholder="Add a description..."
                  />
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
      </div>
    </div>
  );
};

export default TicketCreate;
