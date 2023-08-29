import React from "react";

export default function IconDots(): React.JSX.Element {
  return (
    <div className="menu-hover-dot-container">
      <span
        className="menu-hover-dot -top-4 
          left-2 
          w-2 
          h-2 
          translate-x-10 
          translate-y-10"
      />

      <span
        className="menu-hover-dot 
          -left-6 
          top-10 
          w-3 
          h-3 
          translate-x-10 
          translate-y-0"
      />

      <span
        className="menu-hover-dot 
          -bottom-6 
          left-4 
          w-4 
          h-4 
          translate-x-10 
          -translate-y-10"
      />

      <span
        className="menu-hover-dot 
          -bottom-0 
          -right-4 
          w-2 
          h-2 
          -translate-x-10 
          -translate-y-10"
      />

      <span
        className="menu-hover-dot 
          -right-2 
          -top-2
          w-4 
          h-4 
          -translate-x-10 
          translate-y-10"
      />
    </div>
  );
}
