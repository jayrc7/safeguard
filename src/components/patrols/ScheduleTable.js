import React from 'react'
import { Icon, Table, Segment} from 'semantic-ui-react'

const patrolData = [
  {
    time: '07:00',
    user: '',
    route: '',
    completed: ''
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
]


class ScheduleTable extends React.Component {
  render() {
    const patrols = patrolData.map((data)=><Table.Body>
      <Table.Cell>data.time</Table.Cell>
      <Table.Cell>data.user</Table.Cell>
      <Table.Cell>data.route</Table.Cell>
      <Table.Cell>data.completed</Table.Cell>
    </Table.Body>)
    return (
      <div>
        <Segment style={{overflow:'auto', maxHeight:770}} size='tiny'>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>User</Table.HeaderCell>
                <Table.HeaderCell>Route</Table.HeaderCell>
                <Table.HeaderCell>Completed</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {patrols}

          </Table>
        </Segment>
      </div>
    )
  }
}

export default ScheduleTable
