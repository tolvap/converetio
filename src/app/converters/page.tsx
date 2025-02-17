import React from "react";
import ClientConverters from "./ClientConverters";

export default async function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <ClientConverters />
    </div>
  );
}
