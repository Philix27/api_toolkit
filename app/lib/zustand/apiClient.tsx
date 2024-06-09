import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type IApiMethods = "GET" | "POST" | "DELETE" | "PUT" | "PATCH"
export type IQueryParams = { key: string; value: string }

export interface ISlice {
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
}

export const useApiClientStore = create(
  persist<ISliceUpdate>(
    (set) => ({
      responseSize: "",
      responseTime: "",
      responseStatus: "",
      responseBody: "",
      responseCookies: "",
      responseHeaders: "",
      responseDocs: "",
      bearerToken: "",
      basePath: "",
      apiMethod: "GET",
      headers: [],
      queryParams: [],
      update: (data) =>
        set((state) => {
          return { ...state, ...data }
        }),
    }),
    {
      name: "api_client",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
