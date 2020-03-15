import HomeView from '../page/home';
import ClassifyView from '../page/classify';
import ProductDetail from '../page/productDetail';

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
]

export default  routers



