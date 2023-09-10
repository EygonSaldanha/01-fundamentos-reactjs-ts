import styles from "./App.module.css";
import "./Global.css";
import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { SideBar } from "./components/Sidebar";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/EygonSaldanha.png",
      name: "Eygon",
      role: "CTO @ RocketSeat",
    },
    content: [
      { type: "paragraph", content: "Hello" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/EygonSaldanha.png",
      name: "Teste",
      role: "Teste de Cargo",
    },
    content: [
      { type: "paragraph", content: "Olá" },
      {
        type: "paragraph",
        content:
          "subir não mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "isso é um teste Galera" },
    ],
    publishedAt: new Date("2022-05-13 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
