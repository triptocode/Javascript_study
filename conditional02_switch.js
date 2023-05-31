let currnetHour = new Date().getHours();
console.log(currnetHour);

switch(currnetHour){
    case 8:
        console.log("기상시간");  //  alert("일어나요");  
        break;
      case 12:
        console.log("점심시간")
        break;
      case 18:
        console.log("퇴근시간")
        break;
      case 22:
        console.log("잠잘시간")
        break;
      default:
        // 알람없음
}