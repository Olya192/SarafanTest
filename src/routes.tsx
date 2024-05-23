import { Route, Routes } from "react-router-dom";
import { Container } from "./components/container/container";
import { RecipeCard } from "./components/recipeCard/recipeCard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Container />} />
      <Route path="/about" element={<RecipeCard/>}/>
    </Routes>
  );
};
