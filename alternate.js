 // window.addEventListener('load', onLoad);

// function onLoad(){
//     let date1 = [30, 7, 2023];
//     let date2 = [15, 6, 2023];

//     totalDaysBetweenDates(date1, date2);

// }

// function totalDaysBetweenDates(date1, date2){
//     let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     let firstDate, secondDate;
//     if(date1[1]<date2[1]){
//         firstDate = date1;
//         secondDate = date2;
//     } else{
//         firstDate = date2;
//         secondDate = date1;
//     }

//     // date1[1]<date2[1]? firstDate, secondDate =date1,date2: date1[1]>date2[1]? firstDate = date2, secondDate = date1: date1[1]=date2[1] ? date1[0]>date2[0]? firstDate = date2, secondDate = date1:

//     let totalDays = 0;

//     let startingMonth = firstDate[1];
//     for(let i=startingMonth; i<secondDate[1]-1; i++){
//         totalDays += daysInMonth[i];
//     }

//     let remainingDaysInInitialMonth = daysInMonth[firstDate[1]-1] - firstDate[0];
//     let daysInFinalMonth = secondDate[0];

//     if(firstDate[0]>secondDate[0]){
//     totalDays += remainingDaysInInitialMonth + daysInFinalMonth;
// } else{
//     totalDays += secondDate[0]-firstDate[0];
// }
//     console.log(totalDays);
 

// }
// let x = 1
// 4*x