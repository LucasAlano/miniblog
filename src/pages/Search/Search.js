import styles from './Search.module.css'

//Hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

//Components
import PostDetail from '../../components/PostDetail'
import { Link } from 'react-router-dom'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const {documents: posts} = useFetchDocuments("posts", search)

    return (
        <div>
            <h2>Search</h2>
            <div>
                {posts && posts.lenngth === 0 && ( 
                    <>
                        <p>
                            Não foram encontrados post a partir da sua busca...
                        </p>
                        <Link to='/' className='btn btn-dark'>
                            Voltar
                        </Link>             
                    </>
                )}
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
}

export default Search