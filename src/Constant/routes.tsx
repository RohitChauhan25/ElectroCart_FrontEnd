import Success from 'Components/success'
import { IRoute } from 'Interfaces'
import Login from 'pages/Auth/login'
import SignUp from 'pages/Auth/signUp'
import Cart from 'pages/Cart'
import Details from 'pages/Details/Details'
import Home from 'pages/Home'
import Products from 'pages/Products'

export const HomeRoute = {
  component: Home,
  path: '/home',
  exact: true,
  restricted: false,
}

export const DetailRoute = {
  component: Details,
  path: '/detail/:category/:id',
  exact: true,
  restricted: false,
}

export const ShopeRoute = {
  component: Home,
  path: '/',
  exact: true,
  restricted: false,
}

export const ProductsRoute = {
  component: Products,
  path: '/products',
  exact: true,
  restricted: false,
}

export const ProductRoute2 = {
  component: Products,
  path: '/product/cat/:category',
  exact: true,
  restricted: false,
}

export const ProductRoute = {
  component: Products,
  path: '/:brand/:category',
  exact: true,
  restricted: false,
}

export const CartRoute = {
  component: Cart,
  path: '/cart',
  exact: true,
  restricted: false,
}

export const SignUpRoute = {
  component: SignUp,
  path: '/signup',
  exact: true,
  restricted: false,
}
export const SuccessRoute = {
  component: Success,
  path: '/sucess',
  exact: true,
  restricted: false,
}
export const LoginROute = {
  component: Login,
  path: '/login',
  exact: true,
  restricted: false,
}
const ROUTES: IRoute[] = [
  ShopeRoute,
  SuccessRoute,
  HomeRoute,
  DetailRoute,
  SignUpRoute,
  LoginROute,
  ProductRoute2,
  CartRoute,
  ProductsRoute,
  ProductRoute,
]

export default ROUTES
