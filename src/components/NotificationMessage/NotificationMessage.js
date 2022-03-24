import './NotificationMessage.css';
import React from 'react';

export function NotificationMessage(props) {
    const { value, active } = props;

    return (
        <div className={'notification-msg ' + (active && 'notification-msg--active' )}>
            <p className="notification-msg__content">
                { value }
            </p>
        </div>
    );
}