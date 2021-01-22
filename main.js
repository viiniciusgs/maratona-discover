const modalElement = document.querySelector(".modal-overlay");

const Modal = {
  open() {
    modalElement.classList.add("active");
  },

  close() {
    modalElement.classList.remove("active");
  },
};