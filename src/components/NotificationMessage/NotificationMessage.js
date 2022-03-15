export function NotificationMessage(props) {
    const { value, isActive } = props;
    const className = isActive ? 'notification-msg--active' : 'notification-msg';

    return (
        <div className={className}>
            <p className="notification-msg__content">
                { value }
            </p>
        </div>
    );
}