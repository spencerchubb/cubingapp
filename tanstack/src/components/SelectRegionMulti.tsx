import { MultiSelect, MultiSelectOptGroup, MultiSelectOption } from "./ui/multi-select"
import { cn } from "@/lib/utils"
import { CONTINENTS, COUNTRIES } from "@/lib/regions"

export function SelectRegionMulti({ region, setRegion, className }: { region: string, setRegion: (region: string) => void, className?: string }) {
  const value = region ? region.split(',') : []

  return <MultiSelect
    id="selectRegion"
    value={value}
    onChange={(newValue) => {
      const added = newValue.filter((v) => !value.includes(v))
      if (added.length > 0) {
        const addedIsContinent = CONTINENTS.includes(added[0])
        if (addedIsContinent) {
          newValue = newValue.filter((v) => CONTINENTS.includes(v))
        } else {
          newValue = newValue.filter((v) => !CONTINENTS.includes(v))
        }
      }
      setRegion(newValue.join(','))
    }}
    wrapperClassName={cn("w-full max-w-xs", className)}
    placeholder="Filter region(s)"
  >
    <MultiSelectOptGroup label="Continents">
      {CONTINENTS.map((continent) => (
        <MultiSelectOption key={continent} value={continent}>
          {continent}
        </MultiSelectOption>
      ))}
    </MultiSelectOptGroup>
    <MultiSelectOptGroup label="Countries">
      {COUNTRIES.map((country) => (
        <MultiSelectOption key={country} value={country}>
          {country}
        </MultiSelectOption>
      ))}
    </MultiSelectOptGroup>
  </MultiSelect>
}