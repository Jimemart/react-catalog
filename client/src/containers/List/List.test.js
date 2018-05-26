import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { List } from './List'
import Card from '../../components/Card/Card'

configure({adapter: new Adapter()})

describe('<List />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      phones: [
        {
          name: 'Iphone X',
          id:'1'
        },
        {
          name: 'Iphone X',
          id:'2'
        },
        {
          name: 'Iphone X',
          id:'3'
        }
      ],
      onGetPhones: () => {}
    }

    wrapper = shallow(<List {...props} />)
  })

  it('should render as many <Cards /> as phones if props.phones is not undefined', () => {
    expect(wrapper.find(Card)).toHaveLength(props.phones.length)
  })

  it('should render a loading sign if props.phones is undefined and not render and <Card />', () => {
    props.phones = undefined
    wrapper.setProps({...props})
    const p = wrapper.find('p').first()
    expect(p.text()).toEqual('Cargando..')
    expect(wrapper.find(Card)).toHaveLength(0)
  })
})
