/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.brand} to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="MyCompany"
            />
            <span className={s.brandTxt}>MyCompany</span>
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Weather Report</h1>
            <p className={s.bannerDesc}>Making the world just a bit smaller</p>
            <p className={s.bannerDesc}>{new Date().toString()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
