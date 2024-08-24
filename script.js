let showMoreBtn = document.querySelector(".show-more-btn p");
let additionalBlocks = document.querySelector(".brands-block__additional-blocks");

showMoreBtn.addEventListener('click', () => {
  if (showMoreBtn.innerText === "Показать все") {
    additionalBlocks.classList.add('show-additional-blocks');
    showMoreBtn.innerHTML = `<div class="show-more-btn" style="margin-left: 0; cursor: pointer;">
      <p><img src="images/close.svg">Скрыть</p>
    </div>`;
  } else if (showMoreBtn.innerText === "Скрыть") {
    showMoreBtn.innerHTML = `<div class="show-more-btn" style="margin-left: 0">
      <p><img src="images/expand.svg">Показать все</p>
    </div>`;
      
    additionalBlocks.classList.remove('show-additional-blocks');
  }
});