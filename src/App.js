import "./App.css";
import ContentLoader, {
  List,
  BulletList,
  Facebook,
  Instagram,
  Code,
} from "react-content-loader";
import { useEffect, useState } from "react";

function App() {
  const [laoding, setLaoding] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLaoding(false);
    }, 15000);

    return () => {
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {laoding ? (
          <>
            <h2>Loading for 15sec for demo purposes</h2>
            <h1>List</h1>
            <List />

            <h1>BulletList</h1>
            <BulletList />

            <h1>Facebook</h1>
            <Facebook />

            <h1>Instagram</h1>
            <Instagram />

            <h1>Code</h1>
            <Code />

            <h1 style={{ marginBottom: 0 }}>Custom</h1>
            <p style={{ margin: 0, color: "#585858" }}>
              speed = 3 | width = 600px | height = 200px
            </p>
            <ContentLoader
              speed={3}
              width={600}
              height={200}
              viewBox="0 0 380 70"
            >
              <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
              <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
              <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
            </ContentLoader>

            <div className="dark">
              <h1 style={{ marginBottom: 0 }}>Custom Dark mode</h1>
              <p style={{ margin: 0, color: "#919191" }}>
                speed = 1 | height = 140px | backgroundColor = #333 |
                foregroundColor = #999"
              </p>
              <ContentLoader
                height={140}
                speed={1}
                backgroundColor={"#333"}
                foregroundColor={"#999"}
                viewBox="0 0 380 70"
              >
                {/* Only SVG shapes */}
                <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
              </ContentLoader>
            </div>
          </>
        ) : (
          <div className="content">
            <h2>Rrefresh the page to see it again (CTRL + R)</h2>
            <p>Your content / data here</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
