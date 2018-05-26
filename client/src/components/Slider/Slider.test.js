import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Slider from './Slider'

configure({adapter: new Adapter()})

describe('<Slider />', () => {
  let props;
  let wrapper

  beforeEach(() => {
    props = {
      select: jest.fn(),
      slide: jest.fn(),
      view: 'a',
      images: ['a', 'b', 'c', 'd']
    }
      wrapper = shallow(<Slider {...props}/>)
  })



  it('should render as many images as passed to it in props', () => {
    const imgList = wrapper.find('.img-list').children().length
    expect(imgList).toEqual(props.images.length)
  })

  it('should render view as the main image', () => {
    const view = wrapper.find('.full')
    expect(view.props().src).toEqual(props.view)
  })

  it('should trigger select when clicking on an image', () => {
    const fn = props.select
    const img = wrapper.find('.img-list').children()

    for (var i = 0; i < img.length; i++) {
      img.at(i).simulate('click')

    }
    expect(fn).toHaveBeenCalledTimes(img.length)
  })

  it('should trigger slide when clicking on an arrow', () => {
    const fn = props.slide
    const arrows = wrapper.find('.arrows').children()

    for (var i = 0; i < arrows.length; i++) {
      arrows.at(i).simulate('click')
    }
    expect(fn).toHaveBeenCalledTimes(arrows.length)
    
  })

})
