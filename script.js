const app = new Vue({
    el: "#root",
    data: {
        prova: null,
    },
    methods: {
    },
    created() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
            this.prova = response.data.response;
        })
        .catch(function (error) {
            console.log(error);
        });
    }
});