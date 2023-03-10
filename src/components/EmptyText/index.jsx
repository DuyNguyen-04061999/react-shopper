import { cn } from "@/utils";
import React from "react";

const EmptyText = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        "modal-body border bg-[#fffffb] text-[#dfbd15] border-[#fdd835]",
        className
      )}
    >
      <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>2BE3192B-C966-4849-A750-1B8F519C785D</title>
        <path
          d="M8.696 3.688c-.015-.783-.405-.992-.924-.99-.519.003-.906.213-.91.823-.005.656.404.878.962.862.527-.015.888-.27.872-.695zm-1.75 6.968H8.59V5.852H6.946v4.804zM8.386 0c.387.117 1.397.237 1.785.349 4.513 1.293 6.653 5.89 4.543 10.053-.663 1.31-1.64 2.528-2.706 3.543-1.218 1.16-2.694 2.049-4.057 3.055h-.177v-2.773c-.634-.088-1.16-.142-1.676-.237C2.828 13.386.278 10.71.022 7.63c-.25-3.01 1.667-5.907 4.69-7.054C5.306.351 5.927.191 6.537 0h1.848z"
          fill="#DFBD15"
          fillRule="evenodd"
        />
      </svg>
      <span className="ml-2">{children}</span>
    </div>
  );
};

export default EmptyText;
