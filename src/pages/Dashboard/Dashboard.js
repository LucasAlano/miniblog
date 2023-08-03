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

  const deleteDocument = (id) => {

  }

  if(loading) {
    <p>Carregando...</p>
  }

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
        <>
          <div>
            <span>Título</span>
            <span>Ações</span>
          </div>

          {posts && posts.map((post) => <div key={post.id}>
            <p>{post.title}</p>
            <div>
              <Link to={`/posts/${post.id}`} className="btn btn-outline">
                Ver
              </Link>
              <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                Editar
              </Link>
              <button onClick={() => deleteDocument(post.id)} className='btn btn-outline btn-danger'> 
                Excluir
              </button>
            </div>
          </div>)}
        </>)}

    </div>
  )
}

export default Dashboard