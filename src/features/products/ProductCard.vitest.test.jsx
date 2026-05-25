import React from "react";
import {describe, it, expect, vi} from 'vitest';
import {render,screen,fireEvent} from '@testing-library/react';
import ProductCard from "./ProductCard";
import {addToCart} from '../cart/cartSlice';

const mockDispatch = vi.fn();

vi.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

const mockProduct = {
  id: 1,
  sku: '12064273040195392',
  title: 'Urban Black Tee',
  price: 29.99,
  currencyFormat: '$',
  sizes: ['M', 'XL'],
  isFreeShipping: true
};


describe('Product Card', ()=>{
    it('should render Product Card',()=>{
        render(<ProductCard product={mockProduct}/>);

        expect(screen.getByTestId('productCard')).toBeInTheDocument();
    });

    it('should render free Shipping Badge', ()=>{
        render(<ProductCard product={mockProduct} />);

        expect(screen.getByText("Free Shipping"));
    });

    // it('should render Product Image', ()=>{
    //     render(<ProductCard product={mockProduct}/>);

    //     expect(screen.getByAltText(mockProduct.title));
    // });

    it('should render Product Image', ()=>{
        render(<ProductCard product={mockProduct}/>);

        expect(screen.getByTestId('productImage')).toBeInTheDocument();
    });

    it('should render Product Title',()=>{
        render(<ProductCard product={mockProduct} />);

        expect(screen.getByTestId('productTitle')).toHaveTextContent(mockProduct.title);
    });

    it('should render Product Price', ()=>{
        render(<ProductCard product={mockProduct}/>);

        expect(screen.getByTestId('productPrice')).toHaveTextContent('$29.99');
    });

    it('should render add To Cart text ', ()=>{
        render(<ProductCard product={mockProduct} />);

        expect(screen.getByText('Add to Cart'));
    });

    it('should dispatch addToCart action on button click', ()=>{
        render(<ProductCard product={mockProduct}/>);

        fireEvent.click(screen.getByTestId('addToCart'));

        expect(mockDispatch).toHaveBeenCalledWith(addToCart(mockProduct));
    });

});


