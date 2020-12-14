import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  {
    key: 'Ireland',
    text: '🇮🇪 Ireland',
    value: '🇮🇪',
  },
  {
    key: 'Spain',
    text: '🇪🇸 Spain',
    value: 'Elliot Fu',
  },
  {
    key: 'Italy',
    text: '🇲🇽 Italy',
    value: '🇲🇽',
  },
]

const FlagDropdown = () => (
  <Dropdown
    placeholder='State'
    fluid
    multiple
    search
    selection
    options={countryOptions}
  />
)

export default FlagDropdown