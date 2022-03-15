import likeSvg from '.';

export function SimplyTab(props) {
    const { img, imgAlt, temp, name, onLike, isLiked, isActive } = props;
    
    return (
      <div className={ isActive ? 'simply-tab--active' : 'simply-tab' }>
        <img className="simply-tab__weather-img" src={ img } alt={ imgAlt } class="icon" />
        <div className="simply-tab__temperature">
          <span> { temp } </span>°
        </div>
        <span className="simply-tab__city"> { name }</span>
        <button className={ 'simply-tab__like-btn' + isLiked ? '--liked' : '' } 
            style={{ backgroundImage: likeSvg }} 
            onClick={ onLike }/>
      </div>
    );
}