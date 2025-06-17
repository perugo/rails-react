import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["screen"];
  
  connect() {
    console.log("Signage controller connected");
    this.currentIndex = 0;
    this.fetchAndShowScreen(this.currentIndex);

    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.screenTargets.length;
      this.fetchAndShowScreen(this.currentIndex);
    }, 3000); // 3秒ごとに画面を切り替え
  }

  disconnect() {
    clearInterval(this.interval);
  }

  async fetchAndShowScreen(index) {
    const urls = [
      "/alerts",
      "/"
    ];

    try {
      const res = await fetch(urls[index], { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
      const html = await res.text();
      this.screenTargets[index].innerHTML = html;
      this.hideAll();
      this.screenTargets[index].hidden = false;
    } catch (error) {
      console.error(`Failed to fetch data for screen ${index}:`, error);
    }
  }

  hideAll() {
    this.screenTargets.forEach((el) => el.hidden = true);
  }
}