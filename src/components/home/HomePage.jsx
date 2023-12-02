import React from 'react'
import classNames from 'classnames/bind';
import styles from './Header.scss';
import Header from './header/Header';
import PersistentDrawerLeft from './content/Content';


let cx = classNames.bind(styles);

function HomePage() {
  return (
    // <div className={}>HomePage</div>
    <div cx={''}><PersistentDrawerLeft /></div>
  )
}

export default HomePage