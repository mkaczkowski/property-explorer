import * as React from 'react';
import { PropertiesContext } from '../../providers/Properties';
import Header from './Header';

//prettier-ignore
export default () => (
  <PropertiesContext.Consumer>
    { context => <Header {...context} />}
  </PropertiesContext.Consumer>
);
