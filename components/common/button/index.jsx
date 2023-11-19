import React from "react";

function Button({ title, img, click }) {
  return (
    <div className="flex items-center justify-end mx-2 my-4">
      <>
        <button
          onClick={click ? click : () => {}}
          className="flex items-center gap-3 px-6 py-2 border rounded-md"
        >
          <div>{title}</div>
          <div>{img}</div>
        </button>
      </>
    </div>
  );
}

export default Button;
