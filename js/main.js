$.get('html/app.html').done(template => {
    window.dnbApp = new Vue({ el: '#dnbApp', template: template,
        data: {            
            
        },
        created() {
            console.log('dnbApp created')

        },
        mounted() {
            console.log('dnbApp mounted DOM');

            // this.$nextTick(() => {            

            // });
        },
        computed: {
        }, 
        watch: {
            
        },
        provide() {
            return {
                getData: () => {},
            }
        },
        updated() {
            console.log('RoadmapApp updated DOM');

        },
        methods: {
            getData() {
                console.log('getData');
            },
        }
    });
});
