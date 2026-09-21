import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import "./Components/Css/Global.css"
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import NotFoundScreen from './Screens/NotFoundScreen/NotFoundScreen'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
import { ThemeContext } from './Context/ThemeContext'
import { LangContext } from './Context/LangContext'
import ProductsScreen from './Screens/ProductsScreen/ProductsScreen'
import NewProductScreen from './Screens/NewProductScreen/NewProductScreen'
import { ProductContextProvider } from './Context/ProductContext'
import { ContactContextProvider } from './Context/ContactContext'




export default function App() {
  const { langSelected } = useContext(LangContext)
  console.log('[App.jsx]', langSelected)
  return (
    <Routes>
      <Route path='/home' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='*' element={<NotFoundScreen />} />


      <Route element={<ContactContextProvider />}>
        <Route
          path='/'
          element={<HomeScreen />}
        />
        <Route
          path='/contact/:contact_id'
          element={<ContactDetailScreen />}
        />
      </Route>

      <Route element={<ProductContextProvider />}>
        <Route
          path="/products"
          element={<ProductsScreen />}
        />
        <Route
          path='/products/:products_id'
          element={<ProductDetailScreen />}
        />
        <Route
          path='/products/new'
          element={<NewProductScreen />}
        />
      </Route>
    </Routes>
  )
}
