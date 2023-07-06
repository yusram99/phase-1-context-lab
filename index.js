/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }


function createEmployeeRecord(arr) {
    const employee = {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
    return employee;
  };
  function createEmployeeRecords(arr){
    const createEmployeeRecords = arr.map(EmployeeData=>createEmployeeRecord(EmployeeData))
    return createEmployeeRecords;
  };
  
  const createTimeInEvent = function (dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
    });
    return this;
  };

const createTimeOutEvent = function (dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  });
  return this;
};
  const hoursWorkedOnDate = function (appropriateDate) {
    let inEvent = this.timeInEvents.find((event) => {
      return event.date === appropriateDate;
    });
    let outEvent = this.timeOutEvents.find(function (event) {
      return event.date === appropriateDate;
    });
    return (outEvent.hour - inEvent.hour) / 100;
  };
  const wagesEarnedOnDate = function (appropriateDate) {
    let rawSalary =
      hoursWorkedOnDate.call(this, appropriateDate) * this.payPerHour;
    return parseFloat(rawSalary.toString());
  };
  
  let allWages = function () {
    let appropriateDates = this.timeInEvents.map(function (e) {
      return e.date;
    });
  
    let payable = appropriateDates.reduce(
      function (memo, date) {
        return memo + wagesEarnedOnDate.call(this, date);
      }.bind(this),
      0
    );
  
    return payable;
  };
  
  const findEmployeeByFirstName = function (arr, firstName) {
    return arr.find(function (records) {
      return records.firstName === firstName;
    });
  };
  
  const calculatePayroll = function (arrayOfEmployeeRecords) {
    return arrayOfEmployeeRecords.reduce(function (memo, records) {
      return memo + allWages.call(records);
    }, 0);
  };


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass and it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

