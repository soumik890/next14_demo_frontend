"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const searchParams = useSearchParams();
  const filter = searchParams.get("todo");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <Link href="/" className={filter === null ? "active" : ""}>
        All
      </Link>
      <Link
        href="/?todo=active"
        className={filter === "active" ? "active" : ""}
      >
        Active
      </Link>
      <Link
        href="/?todo=completed"
        className={filter === "completed" ? "active" : ""}
      >
        Completed
      </Link>
    </div>
  );
};

export default Navbar;
