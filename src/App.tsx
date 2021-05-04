import Layout from "./layouts/Layout";
import Header from "./layouts/Header";
import Introducer from "./containers/Introducer";
import Results from "./containers/Results";
import About from "./containers/About";
import useModal from "./hooks/useModal";
import { ModalProvider } from "./contexts/ModalContext";
import RewardModal from "./components/RewardModal";

function App() {
  const [isModalActive, toggleModal] = useModal(false);

  return (
    <ModalProvider value={{ isModalActive, toggleModal }}>
      <Layout>
        <Header />
        <main>
          <Introducer />
          <Results />
          <About />
        </main>
      </Layout>

      {isModalActive && (
        <RewardModal currentPledgeTitle="Pledge with no reward" />
      )}
    </ModalProvider>
  );
}

export default App;
