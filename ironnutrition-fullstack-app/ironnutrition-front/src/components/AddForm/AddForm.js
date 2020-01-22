import React, { Component } from 'react';
import { Button } from '../../components';

class AddForm extends Component {
  state = {
    foodInfo: {
      name: '',
      calories: '',
      image: '',
    },
    showForm: false,
  };

  handleChange = (e) => {
    const { foodInfo } = this.state;

    foodInfo[e.target.name] = e.target.value;

    this.setState({ foodInfo });
  }

  addFood = async () => {
    const { handleSubmit } = this.props;
    const { foodInfo } = this.state

    await handleSubmit(foodInfo);
    this.closeForm();
    this.clearForm();
  }

  showForm = () => {
    this.setState({ showForm: true });
  }

  closeForm = () => {
    this.setState({ showForm: false });
  }

  clearForm = () => {
    this.setState({
      foodInfo: {
        name: '',
        calories: '',
        image: '',
      }
    });
  }

  render() {
    const { foodInfo, showForm } = this.state;

    return (
      <div>
        <Button type="button" onclick={() => this.showForm()}>Add New Food</Button>
        {showForm && (
          <div>
            <input type="text" name="name" placeholder="Food Name" value={foodInfo.name} onChange={(e) => this.handleChange(e)} />
            <input type="number" name="calories" placeholder="Food Calories" value={foodInfo.calories} onChange={(e) => this.handleChange(e)} />
            <input type="text" name="image" placeholder="Food Image Url" value={foodInfo.image} onChange={(e) => this.handleChange(e)} />
            <Button type="button" onclick={() => this.addFood()}>Criar Produto</Button>
            <Button type="button" onclick={() => this.closeForm()}>Cancelar</Button>
          </div>
        )}
      </div>
    );
  }
}

export default AddForm;
