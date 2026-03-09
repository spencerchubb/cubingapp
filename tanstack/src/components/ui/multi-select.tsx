"use client"

import * as React from "react"
import { ChevronsUpDown, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandInput,
  CommandList,
} from "@/components/ui/command"

type OptionInfo = { value: string; label: string }

type MultiSelectContextType = {
  value: string[]
  toggle: (val: string) => void
  remove: (val: string) => void
}

const MultiSelectContext = React.createContext<MultiSelectContextType | null>(null)

function useMultiSelectContext() {
  const ctx = React.useContext(MultiSelectContext)
  if (!ctx) throw new Error("MultiSelect compound components must be used within <MultiSelect>")
  return ctx
}

function collectOptions(children: React.ReactNode): OptionInfo[] {
  const result: OptionInfo[] = []
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return
    const type = child.type as any
    if (type.__multiSelectOptGroup) {
      result.push(...collectOptions(child.props.children))
    } else if (type.__multiSelectOption) {
      const value = child.props.value as string
      const label = typeof child.props.children === "string"
        ? child.props.children
        : value
      result.push({ value, label })
    }
  })
  return result
}

type MultiSelectProps = Omit<React.ComponentProps<"select">, "size" | "value" | "onChange"> & {
  size?: "sm" | "default"
  wrapperClassName?: string
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
}

function MultiSelect({
  className,
  wrapperClassName,
  size = "default",
  children,
  value,
  onChange,
  placeholder = "Select items",
  ...props
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)

  const options = React.useMemo(() => collectOptions(children), [children])
  console.log(value)

  function toggle(val: string) {
    if (value.includes(val)) {
      onChange(value.filter((v) => v !== val))
    } else {
      onChange([...value, val])
    }
  }

  function remove(val: string) {
    onChange(value.filter((v) => v !== val))
  }

  const ctx = React.useMemo(() => ({ value, toggle, remove }), [value])

  return (
    <MultiSelectContext.Provider value={ctx}>
      <div className={cn("relative w-fit", wrapperClassName)}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className={cn("w-full flex items-center cursor-auto hover:bg-transparent", className)}
            >
              {value.length === 0 && (
                <p className="text-gray-300">
                  {placeholder}
                </p>
              )}

              <div className="flex-1 flex flex-wrap gap-x-4 gap-y-2">
                {value.map((val) => {
                  const option = options.find((o) => o.value === val)
                  if (!option) return null

                  return (
                    <div
                      key={val}
                      className="flex items-center p-0 gap-1 text-md rounded-none"
                    >
                      {option.label}
                      <X
                        className="w-4 h-4 cursor-pointer hover:bg-gray-700"
                        onClick={(e) => {
                          e.stopPropagation()
                          remove(val)
                        }}
                      />
                    </div>
                  )
                })}
              </div>

              <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="p-0 bg-gray-800 w-(--radix-popover-trigger-width)">
            <Command>
              <CommandInput placeholder="Search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {children}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </MultiSelectContext.Provider>
  )
}

function MultiSelectOption({ value, children, ...props }: React.ComponentProps<"option">) {
  const ctx = useMultiSelectContext()
  const val = value as string

  return (
    <CommandItem
      checked={ctx.value.includes(val)}
      onSelect={() => ctx.toggle(val)}
    >
      {children}
    </CommandItem>
  )
}
MultiSelectOption.__multiSelectOption = true

function MultiSelectOptGroup({
  className,
  label,
  children,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <CommandGroup heading={label} className={cn(className)}>
      {children}
    </CommandGroup>
  )
}
MultiSelectOptGroup.__multiSelectOptGroup = true

export { MultiSelect, MultiSelectOptGroup, MultiSelectOption }
