import React, { Children } from "react";

export default function SectionComponent({children, name, className}) {
  return (
    <section id={name} className="mt-8 ">
      <div className={`${className} max-w-7xl mx-auto my-8 py-8 md:px-4 w-full`}>
        {children}
      </div>
    </section>
  );
}
