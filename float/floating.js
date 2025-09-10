const avatars = document.querySelectorAll(".avatar");

avatars.forEach((avatar) => {
  const statusSpan = avatar.querySelector(".status span:nth-child(2)");
  const img = avatar.querySelector("img");

  if (statusSpan.textContent !== "접속중") {
    img.style.filter = "grayscale(100%)";
    statusSpan.style.color = "#808080";
  }
});

const avatarButtons = document.querySelectorAll(".avatar-btn");
let openStatus = null; // 현재 열린 상태 카드

avatarButtons.forEach((btn) => {
  const status = btn.parentElement.querySelector(".status");

  // hover 또는 focus 시 열기
  btn.addEventListener("mouseenter", () => {
    // 이전에 열려있던 카드 닫기
    if (openStatus && openStatus !== status) {
      openStatus.style.display = "none";
    }
    status.style.display = "flex";
    openStatus = status;
  });

  btn.addEventListener("focus", () => {
    if (openStatus && openStatus !== status) {
      openStatus.style.display = "none";
    }
    status.style.display = "flex";
    openStatus = status;
  });
});

// ESC 키로 닫기
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && openStatus) {
    openStatus.style.display = "none";
    openStatus = null;
  }
});
