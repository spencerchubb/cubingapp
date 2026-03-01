import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"

type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "default"
  wrapperClassName?: string
}

function NativeSelect({
  className,
  wrapperClassName,
  size = "default",
  children,
  ...props
}: NativeSelectProps) {
  return (
    <div className={cn("relative w-fit", wrapperClassName)}>
      <select
        data-slot="native-select"
        data-size={size}
        className={cn(
          "w-full appearance-none rounded-lg border-none py-2 pl-4 pr-10 text-md text-gray-100 outline outline-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
        <ChevronDownIcon className="size-5" />
      </span>
    </div>
  )
}

function NativeSelectOption({ ...props }: React.ComponentProps<"option">) {
  return <option data-slot="native-select-option" {...props} />
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn(className)}
      {...props}
    />
  )
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
