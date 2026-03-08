import { Link as TanStackLink } from "@tanstack/react-router"
import { cn } from "@/lib/utils"

export function Link({ children, ...props }: React.ComponentProps<typeof TanStackLink>) {
  return <TanStackLink
    {...props}
    className={cn("text-sky-500 no-underline hover:underline", props.className)}
  >
    {children}
  </TanStackLink>
}
