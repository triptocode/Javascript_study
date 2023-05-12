const enButton = document.querySelector('.en');
const korButton = document.querySelector('.kor');
const element = document.querySelector('.date');

// 영어식 표기
function printDate() {
  const today = new Date(); // 현재 날짜
  const year = today.toLocaleDateString('en-US', {
    year: 'numeric',
  });
  const month = today.toLocaleDateString('en-US', {
    month: '2-digit',
  });
  const day = today.toLocaleDateString('en-US', {
    day: '2-digit',
  });
  const weekday = today.toLocaleDateString('en-US', {
    weekday: 'long',
  });
  
  return `${year}-${month}-${day} ${weekday}`;
}

// 한글식 표기
function printKorDate() {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });
  
  return `${dateString} ${dayName}`;
}

// 영어 버튼 클릭
enButton.addEventListener('click', () => {
  const text = printDate();
  element.textContent = text;
});

// 한글 버튼 클릭
korButton.addEventListener('click', () => {
  const text = printKorDate();
  element.textContent = text;
});