export function SelectButton(props) {
    const { value, isActive, onClick } = props;

    const className = isActive ? 'select-button--active' : 'select-button';

    return (
        <button className={className} onClick={ onClick }>
            {value}
        </button>
    );
}