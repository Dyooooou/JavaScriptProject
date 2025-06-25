var Snake = (function (){
    const INITIAL_TAIL = 2;
    var fixedTail = true;

    var intervalID;

    var tileCount = 20;
    var gridSize = 800/tileCount;

    const INITIAL_PLAYER = {
        x: Math.floor(tileCount / 2),
        y: Math.floor(tileCount / 2)
    }; 

    var velocity = {
        x:0,
        y:0
    };

    var player = {
        x: INITIAL_PLAYER.x,
        y: INITIAL_PLAYER.y,
    };

    var walls = false;

    var fruit = {
        x: 1,
        y: 1
    };

    var trail = [];
    var tail = INITIAL_TAIL;

    var reward = 0;
    var points = 0;
    var pointsMax = 0;

    var ActionEnum = {
        'none': 0,
        "up": 1, 
        "down": 2,
        "left": 3,
        "right": 4   
    }; 
    var lastAction = ActionEnum.none;

    function setup(){
        canv = document.getElementById('gc');
        ctx = canv.getContext('2d');

        game.reset();
    }

    var game = {
        reset: function (){
            ctx.fllStyle = 'grey';
            ctx.fillRect(0, 0, canv.width, canv.height);

            tail = INITIAL_TAIL;
            points = 0;
            velocity.x = 0;
            velocity.y = 0;
            player.x = INITIAL_PLAYER.x;
            player.y = INITIAL_PLAYER.y;
            // this.RandomFruit()
            reward = -1;

            lastAction = ActionEnum.none;
            trail = [];
            trail.push({
                x: player.x,
                y: player.y

            });
        }, 

        action:{
            up: function (){
                if (lastAction != ActionEnum.down){
                    velocity.x = 0;
                    velocity.y = -1;
                }
            }, 
            down: function (){
                if (lastAction != ActionEnum.up){
                    velocity.x = 0;
                    velocity.y = 1;
                }
            }, 
            left: function (){
                if (lastAction != ActionEnum.right){
                    velocity.x = -1;
                    velocity.y = 0;
                }
            },
            right: function (){
                if (lastAction != ActionEnum.left){
                    velocity.x = 1;
                    velocity.y = 0;
                }
            }
        },

        RandomFruit: function(){
            if(walls){
                fruit.x = 1+Math.floor(Math.random() * (tileCount-2));
                fruit.y = 1+Math.floor(Math.random() * (tileCount-2));
            }
            else {
                fruit.x = 1+Math.floor(Math.random() * (tileCount));
                fruit.y = 1+Math.floor(Math.random() * (tileCount));
            }
        },

        log: function(){
            console.log('==========================');
            console.log('x:' + player.x + 'y:' + player.y);
            console.log('tail:' + tail + 'trail.length:' + trail.length);
        },

        loop: function(){
            reward = -1;

            function DontHitWall(){
                if (player.x < 0) 
                    player.x = tileCount - 1;
                if (player.x >= tileCount)
                    player.c = 0;
                if (player.y < 0)
                    player.y = tileCount -1;
                if (player.y >= tileCount)
                    player.y = 0;
            }
            function HitWall(){
                if (player.x < 1)
                    game.reset();
                if (player.x > tileCount-2)
                    game.reset();
                if (player.y < 1)
                    game.reset();
                if (player.y > tileCount-2)
                    game.reset();

                ctx.fillStyle = 'grey';
                ctx.fillRect(0, 0, gridSize-1, canv.height);
                ctx.fillRect(0, 0, canv.width, gridSize-1);
                ctx.fillRect(canv.width-gridSize+1, 0, gridSize, canv.height);
                ctx.fillRect(0, canv.height-gridSize+1, canv.width, gridSize);
            }
        }
    }
})