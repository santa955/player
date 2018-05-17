import { combineReducers } from 'redux'
import StackReducer from './StackReducer'
import HomeReducer from './HomeReducer'
import ProductDetailReducer from './ProductDetailReducer'
import CategoriesReducer from './CategoriesReducer'
import CategoryDetailReducer from './CategoryDetailReducer'
import SearchProducts from './SearchProductReducer'
const Reducer = combineReducers({
    nav: StackReducer,
    home: HomeReducer,
    detail: ProductDetailReducer,
    categories: CategoriesReducer,
    categoryDetail: CategoryDetailReducer,
    searchProducts: SearchProducts
})

export default Reducer