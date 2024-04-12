import Layout from "./layout.js";
export { default } from "./layout.js";
import Header from "./header.js";
import Content from "./content.js";
import Footer from "./footer.js";
import Sider from "./sider.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
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
