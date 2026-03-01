import { cn } from "@/lib/utils"
import { Button } from "./button"
import { NativeSelect, NativeSelectOption } from "./native-select"

export function Pagination({
  goToPage,
  page,
  pages,
  className,
}: {
  goToPage: (newPage: number, pages: number) => void,
  page: number,
  pages: number,
  className?: string,
}) {
  const previousPage = Math.max(1, page - 1)
  const nextPage = Math.min(pages, page + 1)

  return <div
    className={cn(
      "w-full max-w-xs flex items-center",
      className,
    )}
  >
    <Button
      variant="outline"
      className="text-gray-100 rounded-l-lg rounded-r-none"
      onClick={() => goToPage(previousPage, pages)}
    >
      ◀
    </Button>
    <NativeSelect
      value={page}
      onChange={(e) => goToPage(parseInt(e.target.value), pages)}
      wrapperClassName="flex-1 border-t border-b border-gray-400"
      className="text-md text-center rounded-none border-none outline-none"
    >
      {Array.from({ length: pages }, (_, i) => (
        <NativeSelectOption key={i} value={i + 1}>{i + 1} / {pages}</NativeSelectOption>
      ))}
    </NativeSelect>
    <Button
      variant="outline"
      className="text-gray-100 rounded-l-none rounded-r-lg"
      onClick={() => goToPage(nextPage, pages)}
    >
      ▶
    </Button>
  </div>
}