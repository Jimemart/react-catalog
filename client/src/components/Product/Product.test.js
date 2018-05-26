import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Product from './Product'

configure({adapter: new Adapter()})

describe('<Product />', () => {
  let props;
  let wrapper

  beforeEach(() => {
    props = {
      phone: {
      name: "Iphone X",
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
      }
    }

    wrapper = shallow(<Product {...props}/>)

  })

  it('should render its content based on the props passed to it', () => {
    const h1 = wrapper.find('h1')
    const p = wrapper.find('p')
    const h2 = wrapper.find('h2')
    const firstLi = wrapper.find('li').at(0)
    const secondLi = wrapper.find('li').at(1)
    const thirdLi = wrapper.find('li').at(2)
    const fourthLi = wrapper.find('li').at(3)
    const fifthLi = wrapper.find('li').at(4)
    const sixthLi = wrapper.find('li').at(5)

    expect(h1.text()).toEqual(props.phone.name)
    expect(p.text()).toEqual(props.phone.brand)
    expect(h2.text()).toEqual(props.phone.price)
    expect(firstLi.text()).toEqual('Sistema operativo: ' + props.phone.details.os)
    expect(secondLi.text()).toEqual('Tamaño: ' + props.phone.details.size + ' pulgadas')
    expect(thirdLi.text()).toEqual('Almacenamiento interno: ' + props.phone.details.memory)
    expect(fourthLi.text()).toEqual('Resolución cámara: ' + props.phone.details.camera)
    expect(fifthLi.text()).toEqual('Memoria RAM: ' + props.phone.details.ram)
    expect(sixthLi.text()).toEqual('Conectividad: ' + props.phone.details.conectivity)
  })

})
