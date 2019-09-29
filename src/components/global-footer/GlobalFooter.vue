<template>
    <div class="footer">
        <div class="links">
            <a href="#" target="_blank" title="首页">Pro 首页</a>
            <a
                    href="https://github.com/isfong/ant-design-pro-vue"
                    target="_blank"
            >
                <a-icon type="github"/>
                Github
            </a>
            <a href="https://ant.design/" title="Ant Design">Ant Design</a>
            <a href="https://vue.ant.design/" title="Vue Antd">Vue Antd</a>
        </div>
        <div class="copyright">
            Copyright
            <a-icon type="copyright"/>
            2019 <span>isfong</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GlobalFooter',
    };
</script>

<style lang="less" scoped>
    @import "~ant-design-vue/lib/style/themes/default.less";

    .footer {
        padding: 0 16px;
        margin: 48px 0 24px;
        text-align: center;

        .links {
            margin-bottom: 8px;

            a {
                color: rgba(0, 0, 0, 0.45);

                &:hover {
                    color: rgba(0, 0, 0, 0.65);
                }

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
</style>
