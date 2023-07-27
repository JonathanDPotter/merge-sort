import "./sass/style.scss";
import mergeSort from "./utils/mergeSort";
import fibonacci from "./utils/fibonacci";

const fibForm = document.forms[0];
const mergeForm = document.forms[1];
const sequence = document.getElementById("sequence") as HTMLParagraphElement;
const randomArrayDisplay = document.getElementById(
  "random-array"
) as HTMLParagraphElement;
const sortedArray = document.getElementById(
  "sorted-array"
) as HTMLParagraphElement;
const aboutFib = document.getElementById("about-fib") as HTMLButtonElement;
const aboutMerge = document.getElementById("about-merge") as HTMLButtonElement;
const fibDialog = document.getElementById("fib-dialog") as HTMLDialogElement;
const mergeDialog = document.getElementById(
  "merge-dialog"
) as HTMLDialogElement;

fibForm.addEventListener("submit", (event: any) => {
  event.preventDefault();
  sequence.innerText = fibonacci(
    parseInt(event.target?.elements["number-fib"].value)
  ).join(", ");
});

mergeForm.addEventListener("submit", (event: any) => {
  event.preventDefault();
  const number = parseInt(event.target!.elements["number-merge"].value);
  const randomArray = Array.from({ length: number }, () =>
    Math.floor(Math.random() * 100)
  );

  randomArrayDisplay.innerText = randomArray.join(", ");

  sortedArray.innerText = mergeSort(randomArray).join(", ");
});

aboutFib.addEventListener("click", () => fibDialog.showModal());
aboutMerge.addEventListener("click", () => mergeDialog.showModal());
