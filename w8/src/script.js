import Vue from 'vue';
import RoundDetail from './components/RoundDetail.vue';

let app = new Vue({
    el: '#app',
    components: {
        'round-detail': RoundDetail
    },
    data: {
        rounds: [
            {number: 1, winner: 'Player', coin: 'heads', choice: 'heads'},
            {number: 2, winner: 'Player', coin: 'tails', choice: 'tails'},
            {number: 3, winner: 'Computer', coin: 'heads', choice: 'tails'},
        ]
    },
    methods: {
        deleteRound: function (number) {
            function isMatchingRound(round) {
                return round.number != this;
            }

            this.rounds = this.rounds.filter(isMatchingRound, number);
        }
    },
    computed: {},
    mounted: function () {

    },
})