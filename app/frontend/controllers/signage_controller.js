import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("Signage controller connected");

    this.urls = ["/", "/alerts"];
    this.currentIndex = 0;

    const isSignage = this.element.getAttribute("data-is-signage") === "true";
    if (isSignage) {
      this.fetchAndShowScreen(this.currentIndex, this.urls);
    }

    this.interval = setInterval(() => {
      const isSignage = this.element.getAttribute("data-is-signage") === "true";
      if (!isSignage) {
        console.log("スライドショーは無効です。処理を終了します。");
        return;
      }

      this.currentIndex = (this.currentIndex + 1) % this.urls.length;
      this.fetchAndShowScreen(this.currentIndex, this.urls);
    }, 4000);
  }

  disconnect() {
    clearInterval(this.interval);
  }

  async enableSlideshow(event) {
    event.preventDefault();

    console.log("スライドショーを開始します。");

    try {
      const response = await fetch("/signages/enable", {
        method: "GET",
        headers: { "X-Requested-With": "XMLHttpRequest" },
      });

      if (response.ok) {
        window.location.reload();
      } else {
        alert("スライドショーの有効化に失敗しました。");
      }
    } catch (error) {
      alert("エラーが発生しました。");
    }
  }

  fetchAndShowScreen(index, urls) {
    try {
      const screens = document.querySelectorAll("[data-signage-target='screen']");
      const iframe = screens[index].querySelector("iframe");
      iframe.src = urls[index];
      screens.forEach((screen, i) => {
        screen.hidden = i !== index;
      });
    } catch (error) {
      console.error(`Failed to load screen ${index}:`, error);
    }
  }
}