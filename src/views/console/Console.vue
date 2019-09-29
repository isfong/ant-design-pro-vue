<template>
    <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
        <a-layout style="min-height: 100vh">
            <a-layout-sider v-if="navLayout === 'left'" :theme="navTheme" :trigger="null" collapsible
                            v-model="collapsed" width="256px">
                <div class="logo">
                    <logo></logo>
                    <h1>Ant Design Pro</h1>
                </div>
                <console-side-menu :theme="navTheme" :collapsed="collapsed"/>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <a-icon
                            v-auth="['admin']"
                            class="trigger"
                            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                            @click="collapsed = !collapsed"
                    ></a-icon>
                    <!--                    <Header/>-->
                </a-layout-header>
                <a-layout-content style="margin: 24px 24px 0">
                    <router-view></router-view>
                </a-layout-content>
                <a-layout-footer style="text-align: center">
                    <console-footer/>
                </a-layout-footer>
            </a-layout>
        </a-layout>
        <authorized :authority="['admin']">
            <console-setting-drawer/>
        </authorized>
    </div>
</template>

<script>
    import logo                 from '../../assets/logo.png';
    import ConsoleSideMenu      from './console-side-menu/ConsoleSideMenu';
    import ConsoleFooter        from './console-footer/ConsoleFooter';
    import ConsoleSettingDrawer from './console-setting-drawer/ConsoleSettingDrawer';

    export default {
        name: 'Console',
        components: {
            ConsoleSettingDrawer,
            ConsoleFooter,
            ConsoleSideMenu,
            logo,
        },
        data() {
            return {
                collapsed: false,
            };
        },
        computed: {
            navTheme() {
                return this.$route.query.navTheme || 'dark';
            },
            navLayout() {
                return this.$route.query.navLayout || 'left';
            },
        },
    };
</script>

<style scoped>

</style>
