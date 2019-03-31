import React from 'react'
import ScheduleTable from './ScheduleTable'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Monday', render: () => <Tab.Pane><ScheduleTable/></Tab.Pane> },
  { menuItem: 'Tuesday', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Wednesday', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Thursday', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Friday', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Saturday', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Sunday', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

class Schedule extends React.Component {
  render() {
    return (
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    )
  }
}

export default Schedule
