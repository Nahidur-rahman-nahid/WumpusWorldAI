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

                    

}
