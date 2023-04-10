import { Routes, Route } from "react-router-dom";

import { AdminHome } from "../pages/AdminHome";
import { AdminMenu } from "../pages/AdminMenu";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { AddMeal } from "../pages/AddMeal";
import { EditMeal } from "../pages/EditMeal";
import { MealDetails } from "../pages/MealDetails";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/addmeal" element={<AddMeal/>} />
      <Route path="/editmeal" element={<EditMeal/>} />
      <Route path="/mealdetails/:id" element={<MealDetails/>} />

      <Route path="/adminhome" element={<AdminHome/>} />
      <Route path="/adminmenu" element={<AdminMenu/>} />

    </Routes>
  )
}
