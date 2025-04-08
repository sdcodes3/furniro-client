import './App.css';

// react router dom imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// auth provider import
import { AuthProvider } from './utils/AuthContext';
import PrivateRoutes from './utils/PrivateRoutes';

// redux toolkit imports
import store from './store';
import { Provider } from 'react-redux';

// pages imports
// import Navbar from './components/navbar/navbar';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Footer from './components/footer/Footer';
import ProductCard from './components/Product_card/ProductCard';
import BlogPost from './components/blog_post/BlogPost';
import Shop from './pages/shop/Shop';
import Home from './pages/home/Home';
import SingleItem from './pages/singleItem/SingleItem';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import Cart from './pages/cart/Cart';
import Comparison from './pages/comparison/Comparison';
import Checkout from './pages/checkout/Checkout';
import Contact from './pages/contact/Contact';
import ProductHover from './components/addToCartHover/ProductHover';
import Blog from './pages/blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoutes />,
    children: [
      {
        path: '/',
        element: <Home />,
        // element: <ProductCard />,      remove this with page
        // element: <ProductHover />,     testing
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/single-product',
        element: <SingleItem />,
      },
      {
        path: '/slidebar',
        element: <ShoppingCart />,
      },
      {
        path: '/comparison',
        element: <Comparison />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/test',
        element: <div>Test</div>,
      },
    ],
  },

  {
    path: '/signin',
    element: <Signin />,
  },

  {
    path: '/signup',
    element: <Signup />,
  },

  {
    path: '*',
    element: <div>Page not found</div>,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
