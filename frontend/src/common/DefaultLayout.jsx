import { Outlet } from 'react-router-dom'
import './index.css'
import css from './defaultLayout.module.css'
import { Header } from '../components/Header'

export const DefaultLayout = () => {
  return (
    <div className={css.defaultLayout}>
      <Header />
      <Outlet />
    </div>
  )
}
