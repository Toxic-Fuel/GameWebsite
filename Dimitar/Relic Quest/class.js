class Runes{
    constructor (x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
    }

    collide (playerX, playerY, playerWidth, playerHeight) {
        if(areColliding(this.x, this.y, this.size, this.size, playerX, playerY, playerWidth, playerHeight)){
            collectedRunes++;
            this.x = NaN;
        }
    }
}

class Enemies{
    constructor (x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    
    pathfind (playerX, playerY, speed) {
        distanceY = playerY - this.y;
        distanceX = playerX - this.x;
        angle = Math.atan2(distanceY, distanceX);
        this.x += Math.cos(angle) * speed;
        this.y += Math.sin(angle) * speed;
    }

    collide (playerX, playerY, playerWidth, playerHeight, bool) {
        if(areColliding(this.x, this.y, this.width, this.height, playerX, playerY, playerWidth, playerHeight)){
            this.x = NaN;
            deathAnimation = true;
        }
    }
}
