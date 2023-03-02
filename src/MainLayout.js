import { Outlet } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import React, { useEffect } from "react";

const MainLayout = () => {
  // const { i18n } = useTranslation();

  // useEffect(() => {
  //   i18n.changeLanguage("fr");
  // }, []);

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default MainLayout;
