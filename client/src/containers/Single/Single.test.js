import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Single } from './Single'
import Slider from '../../components/Slider/Slider'
import Product from '../../components/Product/Product'

configure({adapter: new Adapter()})

describe('<Single />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      selectedPhone: {
        images: ['a', 'b', 'c']
      },
      selectImage: 'a'
    }

    wrapper = shallow(<Single {...props}/>)
  })

  it('should render a <Product /> and a <Slider />', () => {
    const slider = wrapper.find(Slider)
    const product = wrapper.find(Product)

    expect(slider).toHaveLength(1)
    expect(product).toHaveLength(1)
  })
})
