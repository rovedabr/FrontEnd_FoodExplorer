import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Order } from "../pages/Order";
import { AddMeal } from "../pages/AddMeal";
import { EditMeal } from "../pages/EditMeal";
import { MealDetails } from "../pages/MealDetails";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/addmeal" element={<AddMeal/>} />
      <Route path="/editmeal/:id" element={<EditMeal/>} />
      <Route path="/mealdetails/:id" element={<MealDetails/>} />

    </Routes>
  )
}
