import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './SearchBar.module.css';

class Gallery extends Component {
  state = {
    pictureName: '',
  };

  handleNameChange = e => {
    this.setState({ pictureName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.pictureName.trim() === '') {
      return toast.error('Please, enter picture name');
    }
    this.props.onSubmit(this.state.pictureName);
    this.setState({ pictureName: '' });
  };

  render() {
    return (
      <header onSubmit={this.handleSubmit} className="Searchbar">
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.pictureName}
            onChange={this.handleNameChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Gallery;
// const Searchbar = () => (
//   <>
// <header className="Searchbar">
//   <form className="SearchForm">
//     <button type="submit" className="SearchForm-button">
//       <span className="SearchForm-button-label">Search</span>
//     </button>

//     <input
//       className="SearchForm-input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>
//   </>
// );

// export default Searchbar;



