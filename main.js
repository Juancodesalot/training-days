// The scope of `random` is too loose 


const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 


const getTrainingDays = event => {
    let days = 1
  if (event === 'Marathon') {
     days = 50;
    return days;
  } else if (event === 'Triathlon') {
     days = 100;
    return days;
  } else if (event === 'Pentathlon') {
     days = 200;
    return days;
  }

//   return days; removed this from here put it in the if functions 
};

// The scope of `name` is too tight |
// added the the name function here V
const name = 'Juan'
const logEvent = (name, event) => {
//   const name = 'Nala'; placed it above to make sure the it didnt have to be repeated
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name,days) => {
//   const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name,event);
logTime(name,days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);
