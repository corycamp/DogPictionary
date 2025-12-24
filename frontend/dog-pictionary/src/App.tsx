import PageProvider from "./components/common/PageProvider";
import Landing from "./pages/Landing";

function App() {
  const isAuthenticated = false;
  return (
    <PageProvider>
      {!isAuthenticated ? <Landing /> : <div>Authenticated App Content</div>}
    </PageProvider>
  );
}

export default App;
