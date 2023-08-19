import Stripe from "stripe";

export interface UserDetails {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avtar_url?: string;
  bill_address?: Stripe.Address;
  payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}

export interface Product {
  id: string;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  metadata?: Stripe.Metadata;
}

export interface Price {
  id: string;
  product_id?: string;
  active?: boolean;
  description?: string;
  unit_amount?: number;
  currency?: string;
  type?: Stripe.Price.Type;
  interval?: Stripe.Price.Recurring.Interval;
  interval_count?: number;
  trial_period_days?: number | null;
  metadata?: Stripe.Metadata;
  product?: Product;
}

export interface Suscription {
  id: string;
  user_id: string;
  status?: string;
  metadata?: string;
  price_id?: string;
  quantity?: string;
  cancle_at_period_start?: string;
  cancle_at_period_end?: string;
  ended_at?: string;
  cancle_at?: string;
  cancled_at?: string;
  trial_start?: string;
  trial_end?: string;
  prices?: Price;
}
