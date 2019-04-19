import React, { Fragment } from 'react';

import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';

export default ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className="page_container">  
        {children}
      </div>
      <Footer />
    </Fragment>
  )
}