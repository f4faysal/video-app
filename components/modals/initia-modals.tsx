"use client";

import { Button } from "../ui/button";

export const InitialModals = async () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to Star Connect</h1>
      <p className="text-lg">Click the button below to create a server</p>
      <Button>Booking Call</Button>
    </div>
  );
};
