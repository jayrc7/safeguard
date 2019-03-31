import React from 'react'
import ScheduleTable from './ScheduleTable'
import { Tab } from 'semantic-ui-react'

const patrolDataExample = [
  {
    time: '07:00',
    user: 'Jorge Aparicio',
    route: 'Avenue street, 2nd street, Pointer avenue, Financial street, Eatery garden, Father columbus street.',
    completed: 'checkmark'
  },
  {
    time: '07:30',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '08:00',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '08:30',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '09:00',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '09:30',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '10:00',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '10:30',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '11:00',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '11:30',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '12:00',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '12:30',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '13:00',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '13:30',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '14:00',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '14:30',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '15:00',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '15:30',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '16:00',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '16:30',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '17:00',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '17:30',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '18:00',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '18:30',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '19:00',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '20:30',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '21:00',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '21:30',
    user: '',
    route: '',
    completed: ''
  },
  {
    time: '22:00',
    user: '',
    route: '',
    completed: ''
  },
]

const panes = [
  { menuItem: 'Monday', render: () => <Tab.Pane><ScheduleTable patrolData={patrolDataExample}/></Tab.Pane> },
  { menuItem: 'Tuesday', render: () => <Tab.Pane><ScheduleTable patrolData={patrolDataExample}/></Tab.Pane> },
  { menuItem: 'Wednesday', render: () => <Tab.Pane><ScheduleTable patrolData={patrolDataExample}/></Tab.Pane> },
  { menuItem: 'Thursday', render: () => <Tab.Pane><ScheduleTable patrolData={patrolDataExample}/></Tab.Pane> },
  { menuItem: 'Friday', render: () => <Tab.Pane><ScheduleTable patrolData={patrolDataExample}/></Tab.Pane> },
  { menuItem: 'Saturday', render: () => <Tab.Pane><ScheduleTable patrolData={patrolDataExample}/></Tab.Pane> },
  { menuItem: 'Sunday', render: () => <Tab.Pane><ScheduleTable patrolData={patrolDataExample}/></Tab.Pane> },
]

class Schedule extends React.Component {
  render() {
    return (
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    )
  }
}

export default Schedule
