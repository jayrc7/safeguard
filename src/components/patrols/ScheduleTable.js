import React from 'react'
import { Icon, Table, Segment} from 'semantic-ui-react'

class ScheduleTable extends React.Component {
  render() {
    const patrols = this.props.patrolData.map((data)=><Table.Body>
      <Table.Cell>{data.time}</Table.Cell>
      <Table.Cell>{data.user}</Table.Cell>
      <Table.Cell>{data.route}</Table.Cell>
      <Table.Cell><Icon color='green' name={data.completed} size='large' /></Table.Cell>
    </Table.Body>)

    return (
      <div>
        <Segment style={{overflow:'auto', maxHeight:610}} size='tiny'>
          <Table celled >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>User</Table.HeaderCell>
                <Table.HeaderCell>Route</Table.HeaderCell>
                <Table.HeaderCell>Complete</Table.HeaderCell>
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
