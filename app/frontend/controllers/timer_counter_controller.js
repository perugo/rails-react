import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["timer"];

  connect() {
    console.log("タイマーコントローラが接続されました。");

    this.milliseconds = 0;
    this.timerInterval = null;

    // IntersectionObserver を設定
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startTimer();
        } else {
          this.resetTimer();
        }
      });
    });

    // タイマー要素を監視
    this.observer.observe(this.timerTarget);
  }

  disconnect() {
    // コントローラが切断されたときにタイマーをリセット
    this.resetTimer();
    this.observer.disconnect();
  }

  startTimer() {
    if (this.timerInterval) return; // 既にタイマーが動作中の場合は何もしない
    this.timerInterval = setInterval(() => {
      this.milliseconds += 100; // 100msごとに更新
      const seconds = (this.milliseconds / 1000).toFixed(1); // 小数点第1位まで計算
      this.timerTarget.textContent = `経過時間: ${seconds} 秒`;
    }, 100);
  }

  resetTimer() {
    clearInterval(this.timerInterval); // タイマーを停止
    this.timerInterval = null;
    this.milliseconds = 0; // 経過時間をリセット
    this.timerTarget.textContent = `経過時間: 0.0 秒`;
  }
}