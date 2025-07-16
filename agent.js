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
}
