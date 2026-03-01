import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "px-4 py-2 rounded-lg border-none text-md text-gray-100 outline outline-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
