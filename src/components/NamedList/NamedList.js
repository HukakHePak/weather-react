export function NamedList(props) {
    const { list, title } = props;

    return (
        <div className="named-list">
            <span className="named-list__title"> { title } </span>
            <ul className="named-list__list">
                { list }
            </ul>
        </div>
    );
}