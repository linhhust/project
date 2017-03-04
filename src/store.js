import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


import reducers from './reducers'

const logger = createLogger();

export default store = createStore(
		reducers,
		{},
		applyMiddleware(thunk)
	)