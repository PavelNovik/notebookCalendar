// Add calendar

document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    // initialView: 'timeGridDay',
    // initialView: 'listWeek',
    themeSystem: 'standart',

    selectable: true,
    dateClick: function (date) {
      console.log(date);
    },
    events: [
      {
        // this object will be "parsed" into an Event Object
        title: 'Tommorow', // a property!
        start: '2023-07-01', // a property!
        end: '2023-07-03', // a property! ** see important note below about 'end' **
      },
    ],
  });
  calendar.render();
  // calendar.on('dateClick', function (info) {
  //   console.log(info);
  // });
});
