  import React, { Component } from 'react';
import Product from '../../components/Product/Product'
import Slide from '../../components/Slider/Slider'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as phoneActions from '../../store/actions'

export class Single extends Component {
  state = {}



  selectImageHandler = (index) => {
     this.props.onSelectImage(index)
  }

  slideImageHandler = (direction) => {
    this.props.onSlideImage(direction)
  }

  render() {
    return (
      <div className="catalog">
        <div className="product">
          <Slide
            images={this.props.selectedPhone.images}
            view={this.props.selectedImage}
            select={this.selectImageHandler}
            slide={this.slideImageHandler}
            />
          <Product phone={this.props.selectedPhone}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedPhone: state.selectedPhone,
    selectedImage: state.selectedImage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectImage: (imageIndex) => dispatch(phoneActions.selectImage(imageIndex)),
    onSlideImage: (direction) => dispatch(phoneActions.slideImage(direction))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Single))
