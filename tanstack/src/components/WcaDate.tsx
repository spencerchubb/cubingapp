import { wcaDb } from "@/utils/wca-db"
import { createServerFn } from "@tanstack/react-start"
import { use } from "react"
import { cn } from "@/lib/utils"

const getWcaDate = createServerFn({ method: "GET" })
  .handler(async () => {
    const db = await wcaDb()
    const exportDateStmt = db.query(
      "SELECT value FROM Miscellaneous WHERE key = 'export_date'"
    )
    const exportDateRow = exportDateStmt.get() as { value: string } | undefined
    const exportDate = exportDateRow?.value || ''
    db.close()
    return exportDate
  });

const wcaDatePromise = getWcaDate()

export function WcaDate({ className }: { className?: string }) {
  const data = use(wcaDatePromise)

  return (
    <p className={cn("text-gray-300", className)}>
      {data ? `WCA data from ${data}` : ''}
    </p>
  );
}
