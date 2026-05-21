import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Historia } from "./pages/Historia";
import { Cursos } from "./pages/Cursos";
import { Inscricoes } from "./pages/Inscricoes";
import { Noticias } from "./pages/Noticias";
import { Programacao } from "./pages/Programacao";
import { Galeria } from "./pages/Galeria";
import { Associe } from "./pages/Associe";
import { Doacao } from "./pages/Doacao";
import { Parcerias } from "./pages/Parcerias";
import { Contato } from "./pages/Contato";
import { Artistas } from "./pages/Artistas";
import { Diretoria } from "./pages/Diretoria";
import { Eventos } from "./pages/Eventos";
import { Politica } from "./pages/Politica";
import { Termo } from "./pages/Termo";
import { VideosLibras } from "./pages/VideosLibras";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "sobre", Component: Sobre },
      { path: "historia", Component: Historia },
      { path: "diretoria", Component: Diretoria },
      { path: "cursos", Component: Cursos },
      { path: "inscricoes", Component: Inscricoes },
      { path: "noticias", Component: Noticias },
      { path: "eventos", Component: Eventos },
      { path: "programacao", Component: Programacao },
      { path: "galeria", Component: Galeria },
      { path: "artistas", Component: Artistas },
      { path: "videos-em-libras", Component: VideosLibras },
      { path: "associe-se", Component: Associe },
      { path: "doacao", Component: Doacao },
      { path: "parcerias", Component: Parcerias },
      { path: "contato", Component: Contato },
      { path: "politica-de-privacidade", Component: Politica },
      { path: "termo-de-compromisso", Component: Termo },
    ],
  },
]);
