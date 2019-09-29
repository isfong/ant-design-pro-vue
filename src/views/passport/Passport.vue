<template>
    <div id="userLayout" :class="['user-layout-wrapper']">
        <div class="container">
            <div class="content">
                <div class="top">
                    <div class="header">
                        <router-link to="/">
                            <img alt="logo" class="logo" :src="logo"/>
                            <span class="title">Ant Design</span>
                        </router-link>
                    </div>
                    <div class="desc">
                        Ant Design 是西湖区最具影响力的 Web 设计规范
                    </div>
                </div>
                <router-view></router-view>
            </div>
            <global-footer/>
        </div>
    </div>
</template>

<script>
    import GlobalFooter from '../../components/global-footer/GlobalFooter';
    import logo         from '../../assets/logo.png';

    export default {
        name: 'Passport',
        components: { GlobalFooter },
        data() {
            return {
                logo,
            };
        },
    };
</script>

<style lang="less" scoped>
    @import "~ant-design-vue/lib/style/themes/default.less";

    #userLayout.user-layout-wrapper {
        height: 100%;

        &.mobile {
            .container {
                .main {
                    max-width: 368px;
                    width: 98%;
                }
            }
        }

        .container {
            width: 100%;
            min-height: 100%;
            background: #f0f2f5 url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg") no-repeat 50%;
            background-size: 100%;
            padding: 110px 0 144px;
            position: relative;

            a {
                text-decoration: none;
            }

            .top {
                text-align: center;

                .header {
                    height: 44px;
                    line-height: 44px;

                    .badge {
                        position: absolute;
                        display: inline-block;
                        line-height: 1;
                        vertical-align: middle;
                        margin-left: -12px;
                        margin-top: -10px;
                        opacity: 0.8;
                    }

                    .logo {
                        height: 44px;
                        vertical-align: top;
                        margin-right: 16px;
                        border-style: none;
                    }

                    .title {
                        font-size: 33px;
                        color: rgba(0, 0, 0, .85);
                        font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
                        font-weight: 600;
                        position: relative;
                        top: 2px;
                    }
                }

                .desc {
                    font-size: 14px;
                    color: rgba(0, 0, 0, 0.45);
                    margin-top: 12px;
                    margin-bottom: 40px;
                }
            }

            .main {
                min-width: 260px;
                width: 368px;
                margin: 0 auto;
            }

            .footer {
                position: absolute;
                width: 100%;
                bottom: 0;
                padding: 0 16px;
                margin: 48px 0 24px;
                text-align: center;

                .links {
                    margin-bottom: 8px;
                    font-size: 14px;

                    a {
                        color: rgba(0, 0, 0, 0.45);
                        transition: all 0.3s;

                        &:not(:last-child) {
                            margin-right: 40px;
                        }
                    }
                }

                .copyright {
                    color: rgba(0, 0, 0, 0.45);
                    font-size: 14px;
                }
            }
        }
    }

    .desc {
        margin-top: 12px;
        margin-bottom: 40px;
        color: @text-color-secondary;
        font-size: @font-size-base;
    }
</style>
