// Menu Slaider

const FirstMenuSlideBtn = document.querySelector('.services__menu-btn:first-child');
const SecondMenuSlideBtn = document.querySelector('.services__menu-btn:nth-child(2)');
const ThirdMenuSlideBtn = document.querySelector('.services__menu-btn:nth-child(3)');
const FirstMenuSlide = document.querySelector('.service-slaid-1');
const SecondMenuSlide = document.querySelector('.service-slaid-2');
const ThirdMenuSlide = document.querySelector('.service-slaid-3');

FirstMenuSlideBtn.addEventListener('click', function() {
  FirstMenuSlide.classList.add('slaid-active');
  SecondMenuSlide.classList.remove('slaid-active');
  ThirdMenuSlide.classList.remove('slaid-active');
  FirstMenuSlideBtn.classList.add('services__menu-btn-active');
  SecondMenuSlideBtn.classList.remove('services__menu-btn-active');
  ThirdMenuSlideBtn.classList.remove('services__menu-btn-active');
});

SecondMenuSlideBtn.addEventListener('click', function() {
  SecondMenuSlide.classList.add('slaid-active');
  FirstMenuSlide.classList.remove('slaid-active');
  ThirdMenuSlide.classList.remove('slaid-active');
  SecondMenuSlideBtn.classList.add('services__menu-btn-active');
  FirstMenuSlideBtn.classList.remove('services__menu-btn-active');
  ThirdMenuSlideBtn.classList.remove('services__menu-btn-active');
});

ThirdMenuSlideBtn.addEventListener('click', function() {
  ThirdMenuSlide.classList.add('slaid-active');
  FirstMenuSlide.classList.remove('slaid-active');
  SecondMenuSlide.classList.remove('slaid-active');
  ThirdMenuSlideBtn.classList.add('services__menu-btn-active');
  FirstMenuSlideBtn.classList.remove('services__menu-btn-active');
  SecondMenuSlideBtn.classList.remove('services__menu-btn-active');
});

// Offer Slaider

const leftOfferArrowBtn = document.querySelector('.arrow-left');
const rightOfferArrowBtn = document.querySelector('.arrow-right');
const leftOfferSwitch = document.querySelector('.switch-first');
const rightOfferSwitch = document.querySelector('.switch-second');
const firstOfferSlaid = document.querySelector('.offer__slaid-1');
const secondOfferSlaid = document.querySelector('.offer__slaid-2');

leftOfferArrowBtn.addEventListener('click', function() {
  if (firstOfferSlaid.classList.contains('active-slaid')) {
    firstOfferSlaid.classList.remove('active-slaid');
    secondOfferSlaid.classList.add('active-slaid');
    leftOfferSwitch.classList.remove('switch-active');
    rightOfferSwitch.classList.add('switch-active');
  }
  else {
    firstOfferSlaid.classList.add('active-slaid');
    secondOfferSlaid.classList.remove('active-slaid');
    leftOfferSwitch.classList.add('switch-active');
    rightOfferSwitch.classList.remove('switch-active');
  }
});

rightOfferArrowBtn.addEventListener('click', function() {
  if (firstOfferSlaid.classList.contains('active-slaid')) {
    firstOfferSlaid.classList.remove('active-slaid');
    secondOfferSlaid.classList.add('active-slaid');
    leftOfferSwitch.classList.remove('switch-active');
    rightOfferSwitch.classList.add('switch-active');
  }
  else {
    firstOfferSlaid.classList.add('active-slaid');
    secondOfferSlaid.classList.remove('active-slaid');
    leftOfferSwitch.classList.add('switch-active');
    rightOfferSwitch.classList.remove('switch-active');
  }
});

leftOfferSwitch.addEventListener('click', function() {
  if (firstOfferSlaid.classList.contains('active-slaid')) {
    firstOfferSlaid.classList.remove('active-slaid');
    secondOfferSlaid.classList.add('active-slaid');
    leftOfferSwitch.classList.remove('switch-active');
    rightOfferSwitch.classList.add('switch-active');
  }
  else {
    firstOfferSlaid.classList.add('active-slaid');
    secondOfferSlaid.classList.remove('active-slaid');
    leftOfferSwitch.classList.add('switch-active');
    rightOfferSwitch.classList.remove('switch-active');
  }
});

rightOfferSwitch.addEventListener('click', function() {
  if (firstOfferSlaid.classList.contains('active-slaid')) {
    firstOfferSlaid.classList.remove('active-slaid');
    secondOfferSlaid.classList.add('active-slaid');
    leftOfferSwitch.classList.remove('switch-active');
    rightOfferSwitch.classList.add('switch-active');
  }
  else {
    firstOfferSlaid.classList.add('active-slaid');
    secondOfferSlaid.classList.remove('active-slaid');
    leftOfferSwitch.classList.add('switch-active');
    rightOfferSwitch.classList.remove('switch-active');
  }
});

// Modal

const communicationBtn = document.querySelector('.communication-button');
const mapBtn = document.querySelector('.column__map');
const modal = document.querySelector('.modal-letter');
const modalMap = document.querySelector('.modal-map');
const modalClose = modal.querySelector('.modal-close');
const modalCloseMap = modalMap.querySelector('.modal-close-map');
const nameModal = modal.querySelector('.input-name');
const modalForm = modal.querySelector('.modal-form');
const emailModal = modal.querySelector('.input-email');
const textModal = modal.querySelector('.modal-textarea');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

communicationBtn.addEventListener('click', function() {
  modal.classList.add('modal-show');
  if (storage) {
    nameModal.value = storage;
    emailModal.focus();
  } else {
    nameModal.focus();
  }
});

mapBtn.addEventListener('click', function() {
  modalMap.classList.add('modal-show');
});

modalClose.addEventListener('click', function() {
  modal.classList.remove('modal-show');
  modal.classList.remove("modal-error");
});

modalCloseMap.addEventListener('click', function() {
  modalMap.classList.remove('modal-show');
  modalMap.classList.remove('modal-error');
});

modalForm.addEventListener('submit', function(evt) {
  if (!nameModal.value || !emailModal.value || !textModal.value) {
    evt.preventDefault();
    modal.classList.remove('modal-error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("login", nameModal.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show") || modalMap.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
      modalMap.classList.remove("modal-show");
      modalMap.classList.remove("modal-error");
    }
  }
});

