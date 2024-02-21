import { Header } from "./components/Header"
import styles from "./App.module.css"
import "./global.css"

export function App() {

  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <aside>Sidebar</aside>
      <main>Post</main>
    </div>

    </>
  )
}

