export default class Timeout {
    id;
    handler;
    start;
    timeLeft;

    constructor(handler: TimerHandler, time: number) {
        this.id = setTimeout(handler, time);
        this.handler = handler;
        this.start = Date.now();
        this.timeLeft = time
    }

    clear(): void {
        clearTimeout(this.id);
    }

    pause(): void {
        const passed = Date.now() - this.start;
        this.timeLeft = this.timeLeft - passed;
        this.clear();
    }

    continue(): void {
        this.clear();
        this.id = setTimeout(this.handler, this.timeLeft);
        this.start = Date.now();
    }

}