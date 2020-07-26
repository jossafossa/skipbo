import Vue from "vue";
import Vuex from "vuex";

Object.defineProperty(Array.prototype, 'shuffle', {
  value: function() {
      for (let i = this.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this[i], this[j]] = [this[j], this[i]];
      }
      return this;
  }
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activePlayer: 0,
    turn: 0,
    players: [
      {
        name: "Henk",
        cards: [4,7,6,5,5,7,8],
      },
      {
        name: "Piet",
        cards: [2,5,8,9,12,3],
      }
    ],
    piles: [
      [],
      [],
      [],
      []
    ],
    drawPile: []
  },
  // commit
  // mutates the state
  mutations: {
    setDrawPile(state, cards) {
      state.drawPile = cards;
    },
    setTurn(state, amount) {
      state.turn = amount;
    },
    resetPlayers(state) {
      state.players = [];
    },
    setActivePlayer(state, activePlayer) {
      state.activePlayer = activePlayer;
    },
    resetPiles(state) {
      state.piles = [
        [0],[0],[0],[0],[1,2,3,4,5,6,7,8,9,10,11,12]
      ];
    },
    addPlayer(state, playerObject) {
      state.players.push(playerObject);
    }
  },
  getters: {
    piles(state) {
      return state.piles;
    },
    activePlayer(state) {
      return state.players[state.activePlayer];
    }
  },

  // dispatch
  // functionality stuff. 
  actions: {
    async setupGame(context, names) {
      this.commit("resetPlayers");
      this.commit("resetPiles");
      this.dispatch("setupDrawPile");
      await this.dispatch("setupPlayers", names)
      this.dispatch("start");
    },
    setupDrawPile() {
      let pile = [];
      let deck = [1,2,3,4,5,6,7,8,9,10,11,12];

      // add 12 decks
      for (let i = 0; i < 12; i++) {
        pile.push(...deck);
      }

      // add 18 skibbo cards
      for (let i = 0; i < 18; i++) {
        pile.push(0);
      }

      // shuffle
      pile.shuffle();
      console.log(pile);
      this.commit("setDrawPile", pile);
    },
    async setupPlayers(context, names) {
      console.log(names);
      for(let name of names) {
        let playerObject = {
          name: name,
          hand: await this.dispatch("drawCards", 5),
          pile: await this.dispatch("drawCards", 30),
        }
        this.commit("addPlayer", playerObject);
      }
    },
    drawCards(context, amount) {
      console.log(context, amount);
      let items = [];
      for(let i = 0; i < amount; i++) {
        items.push(context.state.drawPile.pop());
      }
      console.log(items);
      return items;
    },
    nextPlayer(context) {
      let activePlayer = context.state.activePlayer;
      if (activePlayer >= context.state.players.length - 1) {
        this.commit("setActivePlayer", 0);
      } else {
        this.commit("setActivePlayer", context.state.activePlayer+1);
      }
    },
    start(context) {
      let randomPlayer = Math.floor(Math.random() * context.state.players.length);
      context.commit("setActivePlayer", randomPlayer);
    }
  },
  modules: {}
})
