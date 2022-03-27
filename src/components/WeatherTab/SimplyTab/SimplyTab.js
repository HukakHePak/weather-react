import likeSvg from './heart-ico.svg';
import activeLikeSvg from './heart-active-ico.svg';
import './SimplyTab.css';
import React from 'react';

export function SimplyTab(props) {
    const { weather, onLike, active, liked } = props;
    const { img, alt, temp, city } = weather || {};

    return (
      <div className={ 'simply-tab ' + (active && 'simply-tab--active') }>
        <img className="simply-tab__weather-img" src={ img } alt={ alt } />
        <div className="simply-tab__temperature">
          <span> { temp } </span>°
        </div>
        <span className="simply-tab__city"> { city }</span>
        <button className={ 'simply-tab__like-btn'} 
            style={{ backgroundImage: `url(${liked ? likeSvg : activeLikeSvg})` }} 
            onClick={ () => onLike(city) }/>
      </div>
    );
}