const Age = document.querySelector(".age");

const birthday = moment([2007, 5, 7,9,5]);


let yearOverflow = 0;

function monthBalencer(months){
  if(months >= 12){
    yearOverflow += 1;
    return months - 12;
  }
  else{
    return months;
  }
}

let monthOverflow = 0;

function dayBalencer(day, maxDays){
  if(day > maxDays){
    monthOverflow += 1;
    return day - maxDays;
  }

  else{
    return day;
  }
}  

let dayOverflow = 0;

function hourBalencer(hour){
  if(hour > 24){
    dayOverflow += 1;
    return hour - 24; 
  }
  else{
    return hour;
  }
}


let hourOverflow = 0;

function minuteBalencer(min){
  if(min > 60){
    hourOverflow += 1;
    return min - 60; 
  }
  else{
    return min
  }
}

let secOverflow = 0;

function secBalencer(sec){
  if(sec > 60){
    secOverflow += 1;
    return sec - 60;
  }
  else{
    return sec; 
  }

}

function timeSince(date) {
    yearOverflow = 0;
    monthOverflow = 0;
    
    let years = moment().diff(date, "years");
    let months = moment().diff(moment([date.year() + years, date.month(),date.date()]), "months");

    let balencedMonths = monthBalencer(date.month() + months)

    let days = moment().diff(moment([date.year() + years + yearOverflow, balencedMonths ,date.date()]), "days");

    let balencedDays = dayBalencer(date.date() + days, moment().month(balencedMonths).daysInMonth())

    let hours = moment().diff(moment([date.year() + years + yearOverflow, balencedMonths + monthOverflow, balencedDays + dayOverflow, date.hour()]), "hours");

    let balencedHours = hourBalencer(date.hour() + hours);

    let minutes = moment().diff(moment([date.year() + years + yearOverflow, balencedMonths + monthOverflow, balencedDays + dayOverflow, balencedHours +hourOverflow, date.minute()]), "minutes");

    let balencedMins = minuteBalencer(date.minute() + minutes)

    let seconds = moment().diff(moment([date.year() + years + yearOverflow, balencedMonths + monthOverflow, balencedDays + dayOverflow, balencedHours +hourOverflow, balencedMins, date.second()]), "seconds");


    


    return years + " years " + months + " months " + days + " days " + hours + " hours " + minutes + " minutes and " + seconds + " seconds ";
}

setInterval(()=>{
  Age.innerHTML = timeSince(birthday);
}, 1000)

Age.innerHTML = timeSince(birthday);




 