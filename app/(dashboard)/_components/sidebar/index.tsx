import React from "react";
import { NewButton } from "./new-button";
import { List } from "./list";

export const Sidebar = () => {
  return (
    <aside className="fixed text-white z-[1] left-o bg-blue-950 h-full w-60px flex p-3 flex-col gap-y-4">
      <List />
      <NewButton />
    </aside>
  );
};
