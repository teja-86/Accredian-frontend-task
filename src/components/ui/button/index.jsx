import React from "react";
import "./style.scss";

function Button({ type, children, onClick, disabled = false, block = false }) {
    return (
        <button
            className={`btn-base btn-${type || "primary"} ${block && "w-full block"}`}
            onClick={onClick}
            disabled={disabled}>
            {
                children
            }
        </button>
    );
}

export default Button;
