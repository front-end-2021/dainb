dnbComponent = (function () {
    const __rootHTML__ = '../html';

    Vue.component('Header', (resolve) => {
        $.get( getPath('header.html'), template => {
            resolve({ template: template,
                inject: [''],
                data: () => {
                    return {
                        
                    };
                },
                computed: { 
                    Hi(){                    
                        return 'Hello';
                    },
                },
                mounted() {
                    console.log('Header mounted DOM');
                },
                methods: {
                    getData(){
                        // sorry
                    },
                }
            });
        });
    });
    function getPath(fileName, subfolders) {
        var path = __rootHTML__;
        if(subfolders && Array.isArray(subfolders)) {
            subfolders.forEach(function (sub) {
                path += `/${sub}`;
            });
        }
        return `${path}/${fileName}` 
    };
    return {
        getPath : getPath
    }
})();
