import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import productsReducer from './Products/reducers'
import authReducer from './Auth/reducers'
import cartReducer from './Cart/reducers'
import formCheckOutReducer from './FormCheckout/reducers'
import formContactReducer from './FormContact/reducers'

const rootReducer = combineReducers({
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
    formCheckout: formCheckOutReducer,
    formContact: formContactReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'cart', 'formCheckout', 'formContact']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export const persistor = persistStore(store)

export default store
