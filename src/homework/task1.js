const ladder = {
    step: 0,
    stepUp: function() {
        this.step++;
        return this;
    },
    stepDown: function() {
        this.step--;
        return this;
    },
    currentPosition: function() {
        console.log(this.step);
        return this;
    }
}

ladder.stepUp().stepUp().stepDown().currentPosition().stepDown().stepDown().currentPosition();

