import React, { useContext } from 'react';
import './ItemDetail.css';
import Counter from '../Counter/Counter';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ItemDetail = ({ product }) => {
  const { isInCart } = useContext(CartContext);

  if (!product) {
    return <Loading />;
  }

  return (
    <div>
      <article className='contenedor-item'>
        <header className='item-header'>
          <h3>{product.name}</h3>
        </header>
        <picture className='item-contenedor-img'>
          <img src={product.img} alt={product.name} />
        </picture>
        <section className='item-contenedor-info'>
          <p className='item-info'>Precio: ${product.price}</p>
          <p className='item-info'>Stock: {product.stock}</p>
          <p>{product.description}</p>
        </section>
        {isInCart(product.id) ? (
          <Link to='/cart'>
            <button className='buttonGoToCart'>Ir al carrito</button>
          </Link>
        ) : product.stock === 0 ? (
            <p className='noStock'>No hay stock disponible, pronto repondremos mas de este producto.</p> 
        ) : (
          <section className='item-counter'>
            <Counter product={{ ...product }} stock={product.stock} />
          </section>
        )}
      </article>
    </div>
  );
};

export default ItemDetail;
