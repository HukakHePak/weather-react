export function SelectButton(props) {
    const { name, isActive, onClick } = props;

    const className = isActive ? 'select-button--active' : 'select-button';

    return (
        <button className={className} onClick={ onClick }>
            {name}
        </button>
    );
}