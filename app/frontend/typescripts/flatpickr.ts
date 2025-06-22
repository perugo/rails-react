import flatpickr from "flatpickr";
import { Japanese } from "flatpickr/dist/l10n/ja.js";

const apply = () => {
  flatpickr(".flatpickr", {
    allowInput: true,
    locale: Japanese
  });
};

const initialFlatpickr = () => {
  //["turbo:load", "turbo:render"].forEach((event) => document.addEventListener(event, apply));
  document.addEventListener("DOMContentLoaded", apply);
};

export default initialFlatpickr;
