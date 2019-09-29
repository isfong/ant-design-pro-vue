import Vue          from 'vue';
import AntDesignVue from 'ant-design-vue';
import Authorized   from '../components/authorized/Authorized';

const ALayout = Vue.component( 'a-layout', {
    name: 'ALayout',
    extends: AntDesignVue.Layout,
} );
const ALayoutHeader = Vue.component( 'a-layout-header', {
    name: 'ALayoutHeader',
    extends: AntDesignVue.Layout.Header,
} );
const ALayoutContent = Vue.component( 'a-layout-content', {
    name: 'ALayoutContent',
    extends: AntDesignVue.Layout.Content,
} );
const ALayoutFooter = Vue.component( 'a-layout-footer', {
    name: 'ALayoutFooter',
    extends: AntDesignVue.Layout.Footer,
} );
const AForm = Vue.component( 'a-form', {
    name: 'AForm',
    extends: AntDesignVue.Form,
} );
const ATabPane = Vue.component( 'a-tab-pane', {
    name: 'ATabPane',
    extends: AntDesignVue.Tabs.TabPane,
} );
const ASelectOption = Vue.component( 'a-select-option', {
    name: 'ASelectOption',
    extends: AntDesignVue.Select.Option,
} );
const AMenuItem = Vue.component( 'a-menu-item', {
    name: 'AMenuItem',
    extends: AntDesignVue.Menu.Item,
} );
const ASubMenu = Vue.component( 'a-sub-menu', {
    name: 'ASubMenu',
    extends: AntDesignVue.Menu.SubMenu,
} );

Vue.component( ALayout.name, ALayout );
Vue.component( ALayoutHeader.name, ALayoutHeader );
Vue.component( ALayoutContent.name, ALayoutContent );
Vue.component( ALayoutFooter.name, ALayoutFooter );
Vue.component( AForm.name, AForm );
Vue.component( ATabPane.name, ATabPane );
Vue.component( ASelectOption.name, ASelectOption );
Vue.component( AMenuItem.name, AMenuItem );
Vue.component( ASubMenu.name, ASubMenu );

Vue.component( AntDesignVue.LocaleProvider.name, AntDesignVue.LocaleProvider );
Vue.component( AntDesignVue.Button.name, AntDesignVue.Button );
Vue.component( AntDesignVue.Icon.name, AntDesignVue.Icon );
Vue.component( AntDesignVue.Tabs.name, AntDesignVue.Tabs );
Vue.component( AntDesignVue.Form.Item.name, AntDesignVue.Form.Item );
Vue.component( AntDesignVue.Input.name, AntDesignVue.Input );
Vue.component( AntDesignVue.Checkbox.name, AntDesignVue.Checkbox );
Vue.component( AntDesignVue.Row.name, AntDesignVue.Row );
Vue.component( AntDesignVue.Col.name, AntDesignVue.Col );
Vue.component( AntDesignVue.Popover.name, AntDesignVue.Popover );
Vue.component( AntDesignVue.Progress.name, AntDesignVue.Progress );
Vue.component( AntDesignVue.Select.name, AntDesignVue.Select );
Vue.component( AntDesignVue.Menu.name, AntDesignVue.Menu );

Vue.component( Authorized.name, Authorized );
