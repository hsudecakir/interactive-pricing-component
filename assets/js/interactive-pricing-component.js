
let isActive = true;

function handlePageViewChange() {
  pageViewsLeft.innerText = (Number(pageViewRange.value) / 16) * 100;
  if(isActive){
    pageViews.innerText = `$ ${Number(pageViewRange.value).toFixed(2)}`;
    pageViewsMobile.innerText = `$ ${Number(pageViewRange.value).toFixed(2)}`;
  } else {
    pageViews.innerText = `$ ${(Number(pageViewRange.value) * 0.75).toFixed(2)}`;
    pageViewsMobile.innerText = `$ ${(Number(pageViewRange.value) * 0.75).toFixed(2)}`;
  }
}

function changeSwitchBtn() {
  isActive = !isActive;
  handlePageViewChange();
  if (isActive) {
    switchCircle.style.display = 'block';
    switchCircleActive.style.display = 'none';
    switchBtn.style.justifyContent = 'start';
    switchBtn.style.backgroundColor = '#CFD8EF';
  } else {
    switchCircle.style.display = 'none';
    switchCircleActive.style.display = 'block';
    switchCircleActive.style.backgroundColor = '#FFFFFF';
    switchBtn.style.justifyContent = 'end';
    switchBtn.style.backgroundColor = '#7AEADF';
  }
}

handlePageViewChange();

function changeSliderColor(){
  const min = pageViewRange.min;
  const max = pageViewRange.max;
  const percentage = ((pageViewRange.value - min) / (max - min)) * 100;
  pageViewRange.style.background = `linear-gradient(to right, #A4F3EB ${percentage}%, #ECF0FB ${percentage}%)`;
}


// function handlePageViewChange() {
//   if(isActive){
//     pageViews.innerText = `$ ${Number(pageViewRange.value).toFixed(2)}`;
//     pageViewsMobile.innerText = `$ ${Number(pageViewRange.value).toFixed(2)}`;
//   } else {
//     pageViews.innerText = `$ ${(Number(pageViewRange.value) * 0.75).toFixed(2)}`;
//     pageViewsMobile.innerText = `$ ${(Number(pageViewRange.value) * 0.75).toFixed(2)}`;
//   }
//   isActive = !isActive;
// }


switchBtn.addEventListener('click', changeSwitchBtn);
pageViewRange.addEventListener('input', handlePageViewChange);
pageViewRange.addEventListener('input', changeSliderColor);


