import likeSvg from './heart-ico.svg';

export function SimplyTab(props) {
    const { weather, onLike, active, liked } = props;
    const { img, alt, temp, city } = weather || {};

    console.log("is liked: " + liked)
    
    return (
      <div className={ active ? 'simply-tab--active' : 'simply-tab' }>
        <img className="simply-tab__weather-img" src={ img } alt={ alt } />
        <div className="simply-tab__temperature">
          <span> { temp } </span>°
        </div>
        <span className="simply-tab__city"> { city }</span>
        <button className={ 'simply-tab__like-btn' + (liked ? '--liked' : '') } 
            style={{ backgroundImage: likeSvg, width: "20px", height: "20px", backgroundColor: "white" }} 
            onClick={ () => onLike(city) }/>
      </div>
    );
}