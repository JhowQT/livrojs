import { Routes, Route } from "react-router-dom";
import Menusuperior from "./components/MenuSuperior";
import InclusaoLivros from "./components/InclusaoLivros";
import ManutencaoLivros from "./components/ManutencaoLivros"
import ResumoLivros from "./components/ResumoLivros"

const App = () => {
  return (
    <>
    <Menusuperior />
    <Routes>
      <Route path="/" element={<InclusaoLivros/>}/>
      <Route path="manut" element={<ManutencaoLivros/>}/>
      <Route path="resumo" element={<ResumoLivros/>}/>
    </Routes>
    </>
  );
};

export default App;
