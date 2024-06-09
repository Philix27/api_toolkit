import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type IApiMethods = "GET" | "POST" | "DELETE" | "PUT" | "PATCH"
export type IQueryParams = { key: string; value: string }
export type ICollection = {
  baseUrl: string
  path: string
  method: IApiMethods
  name?: string
}

export interface ISlice {
  collection?: ICollection[]
  responseBody?: string
  responseCookies?: string
  responseHeaders?: string
  responseDocs?: string
  responseSize?: string
  responseStatus?: string
  responseTime?: string
  bearerToken?: string
  basePath?: string
  apiMethod?: IApiMethods
  headers?: IQueryParams[]
  queryParams?: IQueryParams[]
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void
  clear: () => void
}

export const defaultValues = {
  collection: [],
  responseSize: "",
  responseTime: "",
  responseStatus: "",
  responseBody: "",
  responseCookies: "",
  responseHeaders: "",
  responseDocs: "",
  bearerToken: "",
  basePath: "",
  headers: [],
  queryParams: [],
  apiMethod: "GET" as IApiMethods,
}

export const useApiClientStore = create(
  persist<ISliceUpdate>(
    (set) => ({
      ...defaultValues,
      update: (data) =>
        set((state) => {
          return { ...state, ...data }
        }),
      clear: () =>
        set((state) => {
          return { ...state, ...defaultValues }
        }),
    }),
    {
      name: "api_client",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
