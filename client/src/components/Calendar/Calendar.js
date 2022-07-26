import React, { useContext, useState } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent} from '@syncfusion/ej2-react-calendars';
import { scheduleData } from './DummyCalData';
import "./Calendar.css";
import "../../App.css"
import calendar from '../../contexts/calendar/calendarContext';

const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Calendar = () => {
  const cal=useContext(calendar)
  cal.setCal(scheduleData)
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    setScheduleObj({
      selectedDate: args.value,
    })
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
    console.log(scheduleData.every.length)
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  return (
    <div className="cal">
      <h2 class="title" category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        ref={(schedule) => setScheduleObj(schedule)}
        selectedDate={new Date(2021, 0, 10)}
        eventSettings={{ dataSource: scheduleData }}
        dragStart={onDragStart}
      >
        <ViewsDirective>
          { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
      <PropertyPane>
        <table
          style={{ width: '100%', background: 'white' }}
        >
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>
                <DatePickerComponent
                  value={new Date(2021, 0, 10)}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                  change={change}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  );
};

export default Calendar;