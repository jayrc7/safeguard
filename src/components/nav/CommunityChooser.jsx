import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const CommunityList = [
        { key: 1, text: 'Home', value: 1 },
        { key: 2, text: 'School', value: 2 },

      ]
      
      const CommunityChooser = () => (
        <Dropdown
            
            text='Choose Community'
            fluid
            selection
            options={CommunityList}
      />
      )

export default CommunityChooser