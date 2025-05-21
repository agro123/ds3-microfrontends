import { useState } from 'react';
import '../styles.css';
import './ticketcreate.css'

import { MdArrowBack, MdCreate, MdArrowDropDown } from "react-icons/md";

import Dropdown from '../components/dropdown/dropdown';


const TicketView = () => {
  const [description, setDescription] = useState('L');
  const [comments, setComments] = useState('');
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="text-input description-input"
                />
              </div>
            </div>

            {/* Comments */}
            <div className="comments-section">
              <h3 className="section-title">Comments</h3>
              <div className="input-container">
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
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
              <div className="dropdown-container">
                <div className="dropdown-header">
                  <span>2 members</span>
                  <MdArrowDropDown className='icon' />
                </div>
                <div className="members-list">
                  <div className="member-item">
                    <div className="avatar"></div>
                    <span className="member-name">User name</span>
                  </div>
                  <div className="member-item">
                    <div className="avatar"></div>
                    <span className="member-name">User name</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="status-section">
              <h3 className="section-title">Status</h3>
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketView;
