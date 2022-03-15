import likeSvg from './heart-ico.svg';

export function SimplyTab(props) {
    const { weather, onLike, active } = props;
    const { img, alt, temp, city, liked } = weather;

    console.log(weather)
    
    return (
      <div className={ active ? 'simply-tab--active' : 'simply-tab' }>
        <img className="simply-tab__weather-img" src={ img } alt={ alt } />
        <div className="simply-tab__temperature">
          <span> { temp } </span>°
        </div>
        <span className="simply-tab__city"> { city }</span>
        <button className={ 'simply-tab__like-btn' + liked ? '--liked' : '' } 
            style={{ backgroundImage: likeSvg }} 
            onClick={ onLike }/>
      </div>
    );
}