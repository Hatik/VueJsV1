new Vue({
	el: '#app',
	data: {
		gameIsRunning: false,
		playerHealth: 100,
		monsterHealth: 100

	},
	methods: {
		startGame: function() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},

		attack: function() {
			
			this.monsterHealth -= this.calculateDamage(3, 10);
			if (this.checkWin()) {
				return;
			}

			this.monsterAttacks();
		},

		specialAttack: function() {
			this.monsterHealth -= this.calculateDamage(10, 20);
			if (this.checkWin()) {
				return;
			}
			this.monsterAttacks();
		},

		heal: function() {
			if (this.playerHealth <= 90){
				this.playerHealth += 10;
			}
			this.monsterAttacks();
		},

		giveUp: function() {

		},

		monsterAttacks: function() {
			this.playerHealth -= this.calculateDamage(5, 12);
			this.checkWin();
		},

		calculateDamage: function(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},

		checkWin: function() {
			if (this.monsterHealth <= 0) {
				if(confirm("You won!, \nWould you like to start again?")){
					this.startGame();
				}
				else {
					this.gameIsRunning = false;
				}
				return true;
			}
			else if (this.playerHealth <= 0) {
				if(confirm("You lost!, \nWould you like to start again?")){
					this.startGame();
				}
				else {
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		}

	}
});