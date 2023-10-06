import { checkIcon } from "@/assets/icons";
import { Link } from "react-router-dom";

const todos = [
  "Afficher la liste des projets dans un tableau. (faire une route spécifique)",
  "Ajouter un projet (ouvrir une modale)",
  "Modifier un projet (ouvrir une modale)",
  "Consulter un projet (faire une route spécifique)",
  "Supprimer un projet (depuis la liste des projets)",
  "Filtrer les projets selon l’attribut “etape” (dans la liste des projets)",
  "Utilisation du Framework CSS Tailwind.",
];
const Home = () => {
  return (
    <div className="w-10/12 m-auto shadow-xl p-10 mt-8 bg-slate-50 rounded-xl text-slate-500">
      <h1 className="text-2xl text-center uppercase">
        Bienvenu sur mon petit projet
      </h1>
      <div className="w-full">
        <h2 className="font-bold text-lg">Rappel du projet :</h2>
        <ul className="pl-2 pt-4">
          {todos.map((todo, idx) => (
            <li className="flex p-2 gap-2" key={idx}>
              {checkIcon()} {todo}
            </li>
          ))}
        </ul>
        <div className="flex justify-center w-full pt-8">
          <Link
            to="projets"
            className="m-auto p-4 bg-orange-100 text-orange-400 rounded-md border-[1px] border-orange-100 uppercase hover:shadow-lg"
          >
            accéder à la liste des projets
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
