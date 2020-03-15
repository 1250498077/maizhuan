import HomeView from '../page/home';
import ClassifyView from '../page/classify';
import ProductDetail from '../page/productDetail';
import productOrder from '../page/productOrder';
import login from '../page/login';

const routers = [
    {
        key: 'home',
        path: '/home',
        component: HomeView
    },
    {
        key: 'classify',
        path: '/classify',
        component: ClassifyView
    },
    {
        key: 'product-detail',
        path: '/product-detail',
        component: ProductDetail
    },
    {
        key: 'product-order',
        path: '/product-order',
        component: productOrder
    },
    {
        key: 'login',
        path: '/login',
        component: login
    },
]

export default  routers



