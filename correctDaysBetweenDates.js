window.addEventListener('load', onLoad);

function onLoad(){
    // let date1 = [24, 7, 2023];
    // let date2 = [20, 6, 2023];

    // console.log(countDaysBetweenDates(date1, date2));
    datePicker();
}

function getNoDaysInMonthYear(month, year){
    let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(month>0 && month<=12){
        let isLeapYear = year % 4 == 0;
        if(isLeapYear){
            daysInMonths[1] = 29;
        }
        return daysInMonths[month-1];
    } 
    return 0;

}

function getNoOfDaysInYear(year){
    let isLeapYear = year % 4 == 0;
    if(isLeapYear) {
        return 366;
    } else {
        return 365;
    }
}

function countDaysBetweenDates(date1, date2){
    // check date order, first date < second Date

    let firstDate = date1;
    let secondDate = date2;
    if(!isFirstDateSmaller(date1, date2)){
        firstDate = date2;
        secondDate = date1;
    }

    // calculate given month days in first date
    if(firstDate[1]==secondDate[1] && firstDate[2]==secondDate[2]){
        return secondDate[0]-firstDate[0];
    }

    if(firstDate[1]!==secondDate[1]){
    let totalDaysInMonth = getNoDaysInMonthYear(firstDate[1], firstDate[2]);
    totalDaysInMonth = totalDaysInMonth - firstDate[0];
   
    // calculate remaining in the year in first date
    let lastMonth = 12;
    if(firstDate[2]==secondDate[2]){
        lastMonth = secondDate[1];
    }
    for(let i=firstDate[1]+1; i<lastMonth; i++){
        totalDaysInMonth += getNoDaysInMonthYear(i, firstDate[2]);
    }

    // calculate number of days in years between first date and second date
   
    for(let i=firstDate[2]+1; i<secondDate[2]; i++){
        totalDaysInMonth += getNoOfDaysInYear(i);
    }
    

    // calculate months before the given month in second date
    if(firstDate[2]!==secondDate[2]){    
        for(let i=0; i<secondDate[1]; i++){
            totalDaysInMonth += getNoDaysInMonthYear(i, secondDate[2]);
        }
    }
    // calculate number of days in the given month in the second date

    totalDaysInMonth += secondDate[0]; 
    
    
    return totalDaysInMonth;
    }
}

function isFirstDateSmaller(date1, date2){
    //year is different
    if(date2[2]>date1[2]){
        return true;
    } 
    
    //is year same
    if(date2[2]==date1[2]){
        if(date2[1]>date1[1]){
            return true;
        } 

        //is month same
        if(date2[1]==date1[1]){
            if(date2[0]>date1[0]){
                return true;
            } 
        }
    }   
    return false;
}

function datePicker(){
    let firstDateInput = document.createElement('input');
    document.body.appendChild(firstDateInput);
    firstDateInput.type = 'date';
    firstDateInput.id = 'datePicker1';

    let secondDateInput = document.createElement('input');
    document.body.appendChild(secondDateInput);
    secondDateInput.type = 'date';
    secondDateInput.id = 'datePicker2';

    let button = document.createElement('button');
    document.body.appendChild(button);
    button.innerText = 'Calculate';

    let date1, date2;

    firstDateInput.addEventListener('change', function(){
        date1 = dateStringToArray(firstDateInput.value);
        // console.log(date1);
    })

    secondDateInput.addEventListener('change', function(){
        date2 = dateStringToArray(secondDateInput.value);
        // console.log(date2);
    })

    button.addEventListener('click', function(){
        console.log(countDaysBetweenDates(date1, date2));
        // console.log(secondDateInput.value);
        // console.log(firstDateInput.value);

    })
}

function dateStringToArray(dateStr){
    let resultDate = [];
    let date = dateStr.split('-');
    resultDate.push(parseInt(date[2]));
    resultDate.push(parseInt(date[1]));
    resultDate.push(parseInt(date[0]));
    return resultDate;
}