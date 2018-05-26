import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Card from './Card'

configure({adapter: new Adapter()})

describe('<Card />', () => {
  let props;
  let wrapper
  beforeEach(() => {
    props = {
      phone: {
      id: "1",
      name: "Iphone X",
      frontImage: "https://i.imgur.com/AN8zOXO.png",
      logo: "https://i.imgur.com/Sd5I3t2.png",
      color: "black",
      price: "1103€",
      brand: "Apple",
      details: {
        os: "iOS 11",
        size: "5.8",
        ram: "3GB",
        memory: "64GB",
        camera: "12Mpx",
        conectivity: "WiFi, 4G, NFC"
      }
    },
    click: jest.fn()
    }
        wrapper = shallow(<Card {...props}/>)
  })

  it('should render the content based on prop', () => {
    const h1 = wrapper.find("h1")
    const color = wrapper.find(".color")
    const img = wrapper.find('img').first()
    const specifications = wrapper.find('.specifications')
    const brand = wrapper.find('.brand').children()

    expect(img.props().src).toEqual(props.phone.frontImage)
    expect(h1.text()).toEqual(props.phone.name)
    expect(color.props().style.backgroundColor).toEqual(props.phone.color)
    expect(specifications.text()).toEqual(props.phone.details.memory+" / "+props.phone.details.ram+" RAM / " +props.phone.details.size+'"')
    expect(brand.props().src).toEqual(props.phone.logo)
  })

  it('should trigger the fn of the prop when clicking on the card div', () => {
    const fn = props.click
    const card = wrapper.find("div").first()

    card.simulate('click')
    expect(fn).toHaveBeenCalled()
  })

})
