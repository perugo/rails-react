import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("Signage controller connected");
  }

  disconnect() {
  }

  async enableSlideshow(event) {
    event.preventDefault(); // デフォルトのリンク動作を無効化

    console.log("スライドショーを開始します。");

    try {
      // 非同期リクエストを送信
      const response = await fetch("/signages/enable", {
        method: "GET",
        headers: { "X-Requested-With": "XMLHttpRequest" },
      });

      if (response.ok) {
        alert("スライドショーが有効になりました！");
        // 必要に応じてページをリロードまたはリダイレクト
        window.location.reload();
      } else {
        console.error("スライドショーの有効化に失敗しました。");
        alert("スライドショーの有効化に失敗しました。");
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
      alert("エラーが発生しました。");
    }
  }

  async disableSlideshow(event) {
    event.preventDefault(); // デフォルトのリンク動作を無効化

    console.log("スライドショーを終了します。");

    try {
      // 非同期リクエストを送信
      const response = await fetch("/signages/disable", {
        method: "GET",
        headers: { "X-Requested-With": "XMLHttpRequest" },
      });

      if (response.ok) {
        // リダイレクトを実行
        window.location.href = "/"; // ルートページに遷移
      } else {
        console.error("スライドショーの終了に失敗しました。");
        alert("スライドショーの終了に失敗しました。");
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
      alert("エラーが発生しました。");
    }
  }
}