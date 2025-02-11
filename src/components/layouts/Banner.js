import React from "react";
import { useRouter } from "next/router";

export default function Banner({ title, description, breadcrumbs }) {
  const {basePath} = useRouter();
  return (
    <main className="main"> 
      <div className="page-title page-banner">
        <div className="container position-relative">
          <h1>{title}</h1>
          <p>{description}</p>
          <nav className="breadcrumbs">
            <ol>
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className={breadcrumb.current ? "current" : ""}>
                  <a href={`${basePath}${breadcrumb.href}`}>{breadcrumb.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </main>
  );
}