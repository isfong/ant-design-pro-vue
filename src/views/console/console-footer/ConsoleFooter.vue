<template>
    <div>Ant Design Vue Pro ©2019 Created by Evfoo</div>
</template>

<script>
    export default {
        name: 'ConsoleFooter',
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
