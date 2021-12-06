import Layout from './layout.vue';
import Header from './header.vue';
import Content from './content.vue';
import Footer from './footer.vue';
import Sider from './sider.vue';
import { prefix } from '../../constants';

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Sider = Sider;

Layout.install = (Vue) => {
  Vue.component(prefix + Layout.name, Layout);
  Vue.component(prefix + Header.name, Header);
  Vue.component(prefix + Content.name, Content);
  Vue.component(prefix + Footer.name, Footer);
  Vue.component(prefix + Sider.name, Sider);
};

export default Layout;
