import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "./ui/native-select"
import { cn } from "@/lib/utils"
import { CONTINENTS, COUNTRIES } from "@/lib/regions"

export function SelectRegion({ region, setRegion, className }: { region: string, setRegion: (region: string) => void, className?: string }) {
  return <NativeSelect
    id="selectRegion"
    value={region}
    onChange={(e) => setRegion(e.target.value)}
    wrapperClassName={cn("w-full max-w-xs", className)}
  >
    <NativeSelectOption value="World">World</NativeSelectOption>
    <NativeSelectOptGroup label="Continents">
      {CONTINENTS.map((continent) => (
        <NativeSelectOption key={continent} value={`continent-${continent}`}>
          {continent}
        </NativeSelectOption>
      ))}
    </NativeSelectOptGroup>
    <NativeSelectOptGroup label="Countries">
      {COUNTRIES.map((country) => (
        <NativeSelectOption key={country} value={`country-${country}`}>
          {country}
        </NativeSelectOption>
      ))}
    </NativeSelectOptGroup>
  </NativeSelect>
}