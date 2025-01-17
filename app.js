const showToastBtn = document.querySelector(".show-toast");
const horizontalPosition = document.querySelector("#horizontal-position");
const verticalPosition = document.querySelector("#vertical-position");
const toastType = document.querySelector("#toast-type");
const toastMessageInput = document.querySelector("#toast-message");
const durationInput = document.querySelector("#duration");
const toastContainer = document.querySelector(".toasts-container");

showToastBtn.addEventListener("click", () => {
  const message = toastMessageInput.value;
  const type = toastType.value;
  const duration = durationInput.value * 1000;

  // Create and display toast
  createToast(message, type, duration);
});

function createToast(message, type, duration) {
  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.textContent = message;

  // Add close button
  const closeButton = document.createElement("span");
  closeButton.textContent = "X";
  closeButton.classList.add("close-btn");
  closeButton.onclick = () => toast.remove();

  toast.appendChild(closeButton);

  // Positioning
  toastContainer.style.left = horizontalPosition.value === "left" ? "1rem" : "auto";
  toastContainer.style.right = horizontalPosition.value === "right" ? "1rem" : "auto";
  toastContainer.style.top = verticalPosition.value === "top" ? "1rem" : "auto";
  toastContainer.style.bottom = verticalPosition.value === "bottom" ? "1rem" : "auto";

  // Add to container
  toastContainer.appendChild(toast);

  // Auto-remove after duration
  setTimeout(() => toast.remove(), duration);
}
