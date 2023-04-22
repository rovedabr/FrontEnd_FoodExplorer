import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { AddMeal } from "../pages/AddMeal";
import { EditMeal } from "../pages/EditMeal";
import { MealDetails } from "../pages/MealDetails";
import { Payment } from "../pages/Payment";
import { Order } from "../pages/Order";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/addmeal" element={<AddMeal/>} />
      <Route path="/editmeal/:id" element={<EditMeal/>} />
      <Route path="/mealdetails/:id" element={<MealDetails/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/order" element={<Order/>} />

    </Routes>
  )
}
