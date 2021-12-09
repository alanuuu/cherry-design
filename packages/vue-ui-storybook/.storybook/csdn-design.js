import {create} from '@storybook/theming';
import logo from '../stories/asset/images/csdn-logo.png';

console.log('logo', logo);

export default create({
  base: 'light',

  brandTitle: 'CSDN Design',
  brandUrl: '//design.csdn.net',
  brandImage: logo,
})