// assuming non leap years, it has no limit on the number of days


window.addEventListener('load', onLoad);
let firstDate, secondDate;

let date1 = [20, 6, 2023];
let date2 = [24, 7, 2006];

function onLoad(){

    daysBetweenDates(date1, date2);
}

function daysBetweenDates(date1, date2){
    let paragraph = addElement('p', document.body);

    if(date1[2]==date2[2]){
    if(date1[1]>date2[1]){
        firstDate = date2;
        secondDate = date1;
    } else if(date2[1]>date1[1]){
        firstDate = date1;
        secondDate = date2;
    } else if(date1[1]==date2[1]){
        if(date1[0]>date2[0]){
            secondDate = date1;
            firstDate = date2;
        } else{
            firstDate = date2;
            secondDate = date1;
        }

    }
    console.log(daysBetweenMonthsInSameYear(firstDate, secondDate));
    paragraph.innerText = daysBetweenMonthsInSameYear(firstDate, secondDate);  
    }

    if(date1[2]>date2[2]){
    firstDate = date2;
    secondDate = date1;
    console.log(daysBetweenDifferentYears(firstDate, secondDate));
    paragraph.innerText = daysBetweenDifferentYears(firstDate, secondDate);

    } else if(date2[2]>date1[2]){
    firstDate = date1;
    secondDate = date2;
    console.log(daysBetweenDifferentYears(firstDate, secondDate));
    paragraph.innerText = daysBetweenDifferentYears(firstDate, secondDate);    
    }


}

function daysBetweenMonthsInSameYear(firstDate, secondDate){
    let totalDays = 0;
    let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // if(firstDate[2] % 4 == 0){
    //     daysInMonths[1]++;
    // }
    // if(secondDate[2] % 4 == 0){
    //     daysInMonths[1]++;
    // }

    if(firstDate[1] == secondDate[1]){
    totalDays = secondDate[0] - firstDate[0];
    } else{
        for(let i=firstDate[1]; i<secondDate[1]-1; i++){
            totalDays += daysInMonths[i] ;
        }
        totalDays += secondDate[0] + daysInMonths[firstDate[1]-1] - firstDate[0];
    }
    totalDays += (secondDate[2]-firstDate[2])*365;
    return totalDays;

}

function daysBetweenDifferentYears(firstDate, secondDate){
    let firstDateNew, secondDateNew;
    let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDaysFinal = 0;
    for(let i=firstDate[1]; i<daysInMonths.length; i++){
        totalDaysFinal += daysInMonths[i];
    }
    for(let i=0; i<secondDate[1]-1; i++){
            totalDaysFinal += daysInMonths[i];
    }

    if(date1[1]>date2[1]){
        firstDateNew = date2;
        secondDateNew = date1;
    } else if(date2[1]>date1[1]){
        firstDateNew = date1;
        secondDateNew = date2;
    } else if(date1[1]==date2[1]){
        if(date1[0]>date2[0]){
            secondDateNew = date1;
            firstDateNew = date2;
        } else{
            firstDateNew = date2;
            secondDateNew = date1;
        }
}
    totalDaysFinal += daysInMonths[firstDateNew[1]-1] - firstDateNew[0] + secondDateNew[0];
    if(secondDate[2]-firstDate[2]>1){
        totalDaysFinal += (secondDate[2]-firstDate[2]-1)*365;
    }
    return totalDaysFinal;
}

function addElement(elementTag, parent){
    let element = document.createElement(elementTag);
    parent.appendChild(element);
    return element;
}












