// agregamos mas imagenes de para la animaciòn
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;

        this.flagFirstMouseDown = false;
    },
    preload: function() {
        game.load.image('tierra', 'assets/images/tierra.jpg');
        game.load.spritesheet('horse', 'assets/images/horse.png', 84, 156, 2);
        //las demas imagenes

        game.load.image('cometa', 'assets/images/cometa.png'); // 1 ********** 
        game.load.image('meteorito', 'assets/images/meteorito.png'); // 1 **********
        game.load.image('luz', 'assets/images/luz.png'); // 1 **********  
        game.load.image('roca', 'assets/images/roca.png'); // 1 **********  
        game.load.image('roca2', 'assets/images/roca2.png'); // 1 **********  
        game.load.image('roca3', 'assets/images/roca3.png'); // 1 **********  
        game.load.image('ovni', 'assets/images/ovni.png'); // 1 **********  
    },
    create: function() {
        game.add.sprite(0, 0, 'tierra');


        this.cometa = game.add.sprite(200, 0, 'cometa'); // 2 ********** 
        this.meteorito = game.add.sprite(200, 40, 'meteorito'); // 2 **********
        this.luz = game.add.sprite(1500, 550, 'luz'); // 2 **********
        this.roca = game.add.sprite(200, 350, 'roca'); // 2 ********** 
        this.roca2 = game.add.sprite(200, 350, 'roca2'); // 2 **********
        this.roca3 = game.add.sprite(200, 350, 'roca3'); // 2 **********  
        this.ovni = game.add.sprite(200, 535, 'ovni'); // 2 ********** 

        this.horse = game.add.sprite(0, 0, 'horse');
        this.horse.frame = 0;
        this.horse.x = game.width / 2;
        this.horse.y = game.height / 2;
        this.horse.anchor.setTo(0.5);
        game.input.onDown.add(this.onTap, this);

    },
    onTap: function() {
        this.flagFirstMouseDown = true;
    },
    update: function() {
        if (this.flagFirstMouseDown) {
            //para que las imagenes se muevan

            this.meteorito.x -= 2; // 3 **********
            if (this.meteorito.x < -300) { // 3 **********
                this.meteorito.x = 1300; // 3 **********
            }

            this.cometa.x -= 20; // 3 **********
            if (this.cometa.x < -300) { // 3 **********
                this.cometa.x = 3000; // 3 **********
            }
            this.luz.x -= 8; // 3 **********
            if (this.luz.x < -300) { // 3 **********
                this.luz.x = 5000; // 3 **********
            }
            this.roca.x += 0.3; // 3 **********
            if (this.roca.x > 1300) { // 3 **********
                this.roca.x = -300; // 3 **********
            }
            this.roca2.x += 0.2; // 3 **********
            if (this.roca2.x > 1300) { // 3 **********
                this.roca2.x = -300; // 3 **********
            }
            this.roca3.x += 0.3; // 3 **********
            if (this.roca3.x > 1300) { // 3 **********
                this.roca3.x = -300; // 3 **********
            }
            this.ovni.x -= 3; // 3 **********
            if (this.ovni.x < -300) { // 3 **********
                this.ovni.x = 1300; // 3 **********
            }


            var pointerX = game.input.x;
            var pointerY = game.input.y;

            var distX = pointerX - this.horse.x;
            var distY = pointerY - this.horse.y;

            if (distX > 0) {
                this.horse.scale.setTo(1, 1);
            } else {
                this.horse.scale.setTo(-1, 1);
            }
            this.horse.x += distX * 0.02;
            this.horse.y += distY * 0.02;
        }
    }
}
var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");