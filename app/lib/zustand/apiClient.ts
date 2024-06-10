import { AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type IApiRequestTab = "QUERY" | "HEADER" | "BODY" | "AUTH"
export type IApiResponseTab = "RESPONSE" | "HEADER" | "COOKIES" | "SESSION"
export type IApiMethods = "GET" | "POST" | "DELETE" | "PUT" | "PATCH"
export type IQueryParams = { key: string; value: string }
export type ICollection = {
  baseUrl: string
  path: string
  method: IApiMethods
  name?: string
}

export interface ISlice {
  responseBody?: string
  responseCookies?: string
  responseHeaders?: RawAxiosResponseHeaders | AxiosResponseHeaders
  responseDocs?: string
  responseSize?: string
  responseStatus?: number
  responseTime?: number
  requestBearerToken?: string
  requestBasePath?: string
  activeReqTab?: IApiRequestTab
  activeResTab?: IApiResponseTab
  requestApiMethod?: IApiMethods
  requestHeaders?: any
  collection?: ICollection[]
  requestQueryParams?: IQueryParams[]
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void
  clear: () => void
}

export const defaultValues: Required<ISlice> = {
  requestHeaders: [],
  collection: [],
  requestQueryParams: [],
  requestApiMethod: "GET" as IApiMethods,
  activeReqTab: "BODY" as IApiRequestTab,
  activeResTab: "RESPONSE" as IApiResponseTab,
  responseBody: "",
  responseCookies: "",
  responseDocs: "",
  responseSize: "",
  responseStatus: 0,
  responseTime: 0,
  requestBearerToken: "",
  requestBasePath: "http://localhost:3666/",
  responseHeaders: {},
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
