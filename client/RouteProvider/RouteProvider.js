'use client'
import { Route, Routes } from 'react-router-dom';
import { Products } from '../app/products/page';
import {Home} from '../app/page'
import {Reg} from '../app/reg'
import {Auth} from '../app/auth'


export default function RouteProvider(isAuth) {
    if (isAuth) {
        return (
            <Routes>
                <Route path='/' element={<Products />}></Route>
                <Route path='/products/:id' element={<Products />}></Route>
            </Routes>
        )
    }else {
        return (
            <Routes>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/reg' element={<Reg/>}></Route>
                <Route path='/auth' element={<Auth />}></Route>
            </Routes>
        )
    }
}
