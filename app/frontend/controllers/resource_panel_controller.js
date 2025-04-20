import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["panel"];
  connect() {
    console.log("Hello, Stimulus!");
  }
  toggle() {
    console.log("cliekeikd");
    this.panelTarget.classList.toggle("hidden");
  }
}
