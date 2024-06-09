import React from "react"
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form"

import { Input } from "@/app/comps"

export type IFormTypes = "text" | "no" | "date" | "file"
export function InputSorter<T extends FieldValues>(props: {
  place: string | undefined
  type: IFormTypes
  field: ControllerRenderProps<T, Path<T>>
}): JSX.Element {
  switch (props.type) {
    case "text":
      return <Input placeholder={props.place} {...props.field} />
    case "no":
      return <Input placeholder={props.place} {...props.field} />
    default:
      return <Input placeholder={props.place} {...props.field} />
      break
  }
}
