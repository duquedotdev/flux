import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { ProductList } from './styles';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    console.log(data);
    this.setState({ products: data });
  }

  // Uma outra forma de fazer
  // handleAddProduct = product => {
  //   const {dispatch} = this.props;
  //   dispatch(CartActions.addToCart(product))
  // }

  handleAddProduct = id => {
    const {addToCartRequest} = this.props;
    addToCartRequest(id);
  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    console.log(products);
    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> {amount[product.id] || 0}
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount
  }, {})
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions,dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Home);
