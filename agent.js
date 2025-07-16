class Agent {

constructor(pos, world) {
        this.position = pos;
        // 0: up,: 1: right, 2 down, 3: left
        this.direction = 1;
        this.world = world;
        this.alive = true;
        this.hasArrow = true;
        this.collectedGold = 0;
        world.showRoom(pos.x, pos.y);
        // world.showRoom(pos.x - 1, pos.y);
        // world.showRoom(pos.x, pos.y - 1);
        // world.showRoom(pos.x + 1, pos.y);
        // world.showRoom(pos.x, pos.y + 1);
    }

            display() {
        let img;
        switch (this.direction) {
            case 0:
                img = agent_up_image;
                break;
           case 1:
                img = agent_right_image;
                break;
           case 2:
                img = agent_down_image;
                break;
           case 3:
                img = agent_left_image;
                break;
        }
         if (this.alive) {
            var gap = this.world.roomSize/10
            image(img, this.position.x * this.world.roomSize + gap, this.position.y * this.world.roomSize + gap, this.world.roomSize - 2 * gap, this.world.roomSize - 2 * gap);
            if (this.hasArrow) {
                image(arrow_overlay_image, this.position.x * this.world.roomSize, this.position.y * this.world.roomSize, this.world.roomSize, this.world.roomSize);
            }
        }
    }

   getCurrentRoom() {
        return this.world.getRoom(this.position.x, this.position.y);
    }

      up() {
        if (this.alive) {
            numOfSteps +=1;
            if(isManualMode) {
                if (this.direction != 0) {
                    this.direction = 0;
                }
                else if (this.position.y > 0) {
                    this.position.y--;
                    this.world.showRoom(this.position.x, this.position.y);
                }
            }

            else {
                if (this.direction != 0) {
                    this.direction = 0;
                }
                if (this.position.y > 0) {
                    this.position.y--;
                    this.world.showRoom(this.position.x, this.position.y);
                }
            }
            this.checkCurrentRoom();
        }
    }

    right() {
        if (this.alive) {
            numOfSteps +=1;
            if(isManualMode) {
                if (this.direction != 1) {
                    this.direction = 1;
                }
                else if (this.position.x < this.world.roomsPerRow - 1) {
                    this.position.x++;
                    this.world.showRoom(this.position.x, this.position.y);
                }
            }

            else {
                if (this.direction != 1) {
                    this.direction = 1;
                }
                if (this.position.x < this.world.roomsPerRow - 1) {
                    this.position.x++;
                    this.world.showRoom(this.position.x, this.position.y);
                }
            }
            this.checkCurrentRoom();
        }
    }

    down() {
        if (this.alive) {
            numOfSteps +=1;
            if(isManualMode) {
                if (this.direction != 2) {
                    this.direction = 2;
                }
                else if (this.position.y < this.world.roomsPerRow - 1) {
                    this.position.y++;
                    this.world.showRoom(this.position.x, this.position.y);
                }
            }

            else {
                if (this.direction != 2) {
                    this.direction = 2;
                }
                if (this.position.y < this.world.roomsPerRow - 1) {
                    this.position.y++;
                    this.world.showRoom(this.position.x, this.position.y);
                }
            }
            this.checkCurrentRoom();
        }
    }

         left() {
        if (this.alive) {
            numOfSteps +=1;
            if(isManualMode) {
                if (this.direction != 3) {
                    this.direction = 3;
                }
                else if (this.position.x > 0) {
                    this.position.x--;
                    this.world.showRoom(this.position.x, this.position.y);
                }
            }

            else {
                if (this.direction != 3) {
                    this.direction = 3;
                }
                if (this.position.x > 0) {
                    this.position.x--;
                    this.world.showRoom(this.position.x, this.position.y);
                }
            }
            this.checkCurrentRoom();
        }
    } 

                 

}
