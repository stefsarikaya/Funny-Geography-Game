import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Već ste uneli ovo slovo, pokušajte opet sa nekim drugim!</p>
    </div>
  )
}

export default Notification
