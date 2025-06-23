import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["timer"];

  connect() {
    console.log("タイマーコントローラが接続されました。");

    this.milliseconds = 0;
    this.timerInterval = null;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startTimer();
        } else {
          this.resetTimer();
        }
      });
    });

    this.observer.observe(this.timerTarget);
  }

  disconnect() {
    this.resetTimer();
    this.observer.disconnect();
  }

  startTimer() {
    if (this.timerInterval) return;
    this.timerInterval = setInterval(() => {
      this.milliseconds += 100; // 100msごとに更新
      const seconds = (this.milliseconds / 1000).toFixed(1);
      this.timerTarget.textContent = `経過時間: ${seconds} 秒`;
    }, 100);
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.milliseconds = 0;
    this.timerTarget.textContent = `経過時間: 0.0 秒`;
  }
}