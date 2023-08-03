import styles from './Dashboard.module.css'

import {Link} from 'react-router-dom'

//Hooks
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.uid
  
  //Posts dos usuários
  const {documents: posts, loading} = useFetchDocuments('posts', null, uid)

  return (
    <div>
        <h2>Dashboard</h2>
        <p>Gerencie os seus posts</p>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to='/post/create' className='btn'>Criar primeiro post</Link>
          </div>

        ) : ( 
        <div>

        </div>)}
        
        {posts && posts.map((post) => 
          <h3>{post.title}</h3>)}
    </div>
  )
}

export default Dashboard