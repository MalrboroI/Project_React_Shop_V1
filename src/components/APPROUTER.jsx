import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../store/routes";
import Shop from "../pages/Shop";
import { useContext } from "react";
import { Context } from "../index.jsx";

export default function APPROUTER() {
  const { user } = useContext(Context); // дефолт-е зн-е false, то есть поль-ль не авториз-н. Здесь с помощью диструктур-и создаем динам-е соостояние useContecst и импорт-м его сос-е как COntext из Index,jsx

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(
          (
            { path, Component } // Обязательно указ-м key для map. Exact для указания строгого сравнения route
          ) => <Route key={path} path={path} element={<Component />} exact />
        )}
      {publicRoutes.map(
        (
          { path, Component } // Обязательно указ-м key для map. Exact для указания строгого сравнения route
        ) => (
          <Route key={path} path={path} element={<Component />} exact />
        )
      )}
      <Route path="/*" element={<Shop />} />
    </Routes>
  );
}
