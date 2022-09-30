SpeedCode
Descripción
SpeedCode es un juego 2d de un jugador que puede moverse horizontal y verticalmente.
Consiste en esquivar ordenadores infectados (tocarlos reducirá la vida en un punto),
y en recoger ordenadores que necesitan nuestra ayuda. Al recoger uno de estos ordenadores,
el jugador tendrá que copiar el codigo que aparecerá en pantalla antes de que se acabe el
tiempo. El juego acabará cuando el jugador pierda todas las vidas.

                            MVP (DOM - CANVAS)
                            game has three ship that moves horizontally
                            ship shoots cannonballs up
                            tentacles appear randomly from the top of the screen
                            four tentacles stacking will end the game
                            cannonballs destroy tentacles
                            reload time for shooting cannonballs
                            Increasing dificulty
                            Backlog
                            add scoreboard
                            Ability to start the game on increased dificulty lvl
                            Data Structure
                            main.js
                            buildSplashScreen () {}
                            buildGameScreen () {}
                            buildGameOverScreen () {}
                            game.js
                            Game () {}
                            starLoop () {}
                            checkCollisions () {}
                            addTentacle () {}
                            clearCanvas () {}
                            updateCanvas () {}
                            drawCanvas () {}
                            GameOver () {}
                            ship.js
                            Ship () { this.x; this.y; this.direction; this.size }
                            draw () {}
                            move () {}
                            shoot () {}
                            checkScreenCollision () {}
                            tentacle.js
                            Tentacle () { this.x; this.y; this.direction; this.size }
                            draw () {}
                            move () {}
                            checkCollisionBotton () {}
                            cannonball.js
                            Cannonball () { this.x; this.y; this.direction; this.size }
                            draw () {}
                            move () {}
                            checkCollisionTop () {}
                            States y States Transitions
                            Definition of the different states and their transition (transition functions)

                            splashScreen
                            gameScreen
                            gameOverScreen
                            Task
                            main - buildDom
                            main - buildSplashScreen
                            main - addEventListener
                            main - buildGameScreen
                            main - buildGameOverScreen
                            game - startLoop
                            game - buildCanvas
                            game - updateCanvas
                            game - drawCanvas
                            tentacle - draw
                            tentacle - move
                            game - addTentacle
                            ship - draw
                            ship - move
                            ship - shoot
                            game - addShip
                            cannonball - draw
                            cannonball - move
                            game - checkCollision
                            game - GameOver
                            game - addEventListener
                            Links
                            Trello
                            Link url

                            Git
                            URls for the project repo and deploy Link Repo Link Deploy

                            Slides
                            URls for the project presentation (slides) Link Slides.com