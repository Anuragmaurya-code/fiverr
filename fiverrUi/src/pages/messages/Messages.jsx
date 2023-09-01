import React from 'react'
import './Messages.scss'
import { Link } from 'react-router-dom'
const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Joe Rogan",
    isSeller: true
  }
  const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nunc sit amet eros vulputate semper. Nulla ac tincidunt nisl. Phasellus maximus eros vel rutrum tincidunt. Cras eget consectetur neque. Praesent bibendum ac dui sit amet vehicula. Proin tincidunt eros sapien, quis pellentesque lacus venenatis at. Etiam aliquet posuere orci et convallis. Etiam molestie nulla quis orci euismod, nec consequat dui fermentum. Suspendisse potenti. Duis lorem urna, interdum ut libero auctor, faucibus facilisis velit. Praesent ut orci mi. Mauris elementum enim sed dolor consectetur, ac malesuada justo tincidunt. Nulla quis ante quis ex laoreet varius. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
  return (
    <div>
      <div className="messages">
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>
          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <tr className='active'>
              <td>
                John Doe
              </td>
              <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
              <td>1 day ago</td>
              <td><button>Mark as read</button></td>
            </tr>
            <tr className='active'>
              <td>
                John Doe
              </td>
              <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
              <td>1 day ago</td>
              <td><button>Mark as read</button></td>
            </tr>
            <tr>
              <td>
                John Doe
              </td>
              <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
              <td>1 day ago</td>
              
            </tr>
            <tr>
              <td>
                John Doe
              </td>
              <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
              <td>1 day ago</td>
              
            </tr>
            <tr>
              <td>
                John Doe
              </td>
              <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
              <td>1 day ago</td>
              
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Messages
