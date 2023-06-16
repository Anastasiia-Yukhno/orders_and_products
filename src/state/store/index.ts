import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"
import { reducer } from "../reducer"
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({reducer})