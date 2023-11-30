import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const events = [
  {
    title: 'event 2',
    start: '2023-12-01',
    end: '2023-12-05',
    allDay: true,
    HostName: 'William',
  },
  {
    title: 'event 3',
    start: '2023-12-05',
    end: '2023-12-07',
    allDay: true,
  },
  {
    title: 'event 4',
    start: '2023-12-05',
    end: '2023-12-07',
    allDay: true,
  },
  {
    title: 'event 5',
    start: '2023-12-05',
    end: '2023-12-07',
    allDay: true,
  },
  {
    title: 'event 6',
    start: '2023-12-05',
    end: '2023-12-07',
    allDay: true,
  },
];

export const ShiftCalendar = () => {
  const handleDateClick = (arg: { dateStr: any }) => {
    alert(arg.dateStr);
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        locale='ja'
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth',
        }}
        nowIndicator={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        events={events}
        initialEvents={[{ title: 'initial event', start: new Date() }]}
        dateClick={handleDateClick}
      />
    </>
  );
};
