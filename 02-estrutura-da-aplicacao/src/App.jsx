import styles from "./App.module.css";
import "./global.css";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Post } from "../components/Post";

// author: {avatar_url: '', name: '', role: ''}
// content: String
// publishedAt: Date

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Washdevs.png',
      name: 'Washington',
      role: 'Suporte de TI'
    },
    content: [
      { type: 'paragraph', content: 'Iai Pessoal 👋' },
      { type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz'},
      { type: 'paragraph', content:  'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:  '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date(Date.now() - 60 * 60 * 1000)
  },{
    id: 2,
    author: {
      avatarUrl: 'https://github.com/cannyster.png',
      name: 'Jhonanthan',
      role: 'Desenvolvedor Full Stack'
    },
    content: [
      { type: 'paragraph', content: 'Iai Pessoal 👋' },
      { type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz'},
      { type: 'paragraph', content:  'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 👉'},
      { type: 'link', content:  'jane.design/doctorcare'}
    ],
    publishedAt: new Date(Date.now() - 120 * 60 * 1000)
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />)
          } ) }
        </main>
      </div>
    </div>
  );
}
