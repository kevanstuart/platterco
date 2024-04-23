import * as React from "react";
import type { Metadata } from "next";

import type { LayoutProps } from "~/utils/types";

export const metadata: Metadata = {
  title: "Profile Page | Platter Tech Challenge",
  description: "Generally, some useful content is available for this section.",
};

export default function ProfileLayout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-100">
      {children}
    </div>
  );
}