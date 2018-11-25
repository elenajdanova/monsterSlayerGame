new Vue({
  el: "#app",
  data: {
    show: false,
    counterU: 100,
    counterM: 100,
    logs: []
  },
  methods:{
    newGame: function(){
      this.show= false,
      this.counterU= 100,
      this.counterM= 100,
      this.logs = []
    },
    checkEndGame: function(){
      if(this.counterU <= 0){
        alert("You loose! Play again?");
        this.newGame();
      }
      if(this.counterM <= 0){
        alert("You won! Play again?")
        this.newGame();
      }
    },
    calculateDamage: function(){
      return Math.ceil(Math.random() * 15);
    },
    attack: function(){
      let damage = this.calculateDamage();
      this.counterM-= damage;
      this.logs.unshift({
        isPlayer: true,
        text: "You hit monster for " + damage
      });
      this.monsterAttaks();
      this.checkEndGame();
    },
    monsterAttaks: function(){
      let damage = this.calculateDamage();
      this.counterU-= damage;
      this.logs.unshift({
        isPlayer: false,
        text: "Monster hits you for " + damage
      });
    },
    specialAttack: function(){
      let damage = this.calculateDamage() + 5;
      this.counterM-= damage;
      this.logs.unshift({
        isPlayer: true,
        text: "You hit monster for " + damage
      });
      this.monsterAttaks();
      this.checkEndGame();
    },
    heal: function(){
      let health = this.calculateDamage();
      this.counterU+= health;
      this.logs.unshift({
        isPlayer: true,
        text: "You heal yourself for " + health
      });
      this.monsterAttaks();
      this.checkEndGame();
    }
  }
})
