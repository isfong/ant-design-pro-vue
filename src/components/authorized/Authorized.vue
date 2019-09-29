<script>
    import { check } from '../../plugins/auth';

    export default {
        name: 'Authorized',
        functional: true,
        props: {
            authority: {
                type: Array,
                required: true,
            },
        },
        render( h, context ) {
            const { props, scopedSlots } = context;
            return check( props.authority ) ? scopedSlots.default() : null;
        },
    };
</script>

<style scoped>

</style>
