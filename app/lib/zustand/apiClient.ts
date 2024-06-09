import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type IApiMethods = "GET" | "POST" | "DELETE" | "PUT" | "PATCH"
export type IQueryParams = { key: string; value: string }
export type ISlice = {
  bearerToken: string
  basePath: string
  apiMethod: IApiMethods
  headers: IQueryParams[]
  queryParams: IQueryParams[]
  update: (data: {
    basePath?: string
    bearerToken?: string
    apiMethod?: IApiMethods
    headers?: IQueryParams[]
    queryParams?: IQueryParams[]
  }) => void
}

export const useApiClientStore = create(
  persist<ISlice>(
    (set) => ({
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
      name: "settings",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
