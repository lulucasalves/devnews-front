import React from 'react';
import { GetServerSideProps } from 'next';
import { stripe } from '../services/stripe';
import { FirstPage } from '../templates/FirstPage';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function index({ product }: HomeProps) {
  return <FirstPage price={product.amount} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1JzBFNDkU1gzBqXSqUmD9KAG', {
    expand: ['product'],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-Us', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24
  };
};
