export default {
    data() {
        return {
            biblia: null,
        }
    },

    methods: {
        fetchBiblia(url) {
            this.loading = true
            fetch(url)
                .then(r => r.json())
                .then(r => {
                    this.biblia = r
                })
        },
    }
}