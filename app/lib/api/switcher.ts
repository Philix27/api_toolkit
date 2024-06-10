import { IApiMethods } from "@/lib"
import axios, { AxiosResponse } from "axios"

type IProps = { url: string; method: IApiMethods; data?: string }

export function runApi(props: IProps): Promise<AxiosResponse<any, any>> {
  switch (props.method) {
    case "GET":
      return get(props)
    case "POST":
      return post(props)
    case "DELETE":
      return deleteMethod(props)
    case "PATCH":
      return patch(props)
    case "PUT":
      return put(props)

    default:
      return get(props)
  }
}

async function get(props: IProps): Promise<AxiosResponse<any, any>> {
  const result = await axios.get(props.url)
  return result
}

async function deleteMethod(props: IProps): Promise<AxiosResponse<any, any>> {
  const result = await axios.delete(props.url)
  return result
}

async function post(props: IProps): Promise<AxiosResponse<any, any>> {
  const result = await axios.post(props.url, props.data)
  return result
}

async function put(props: IProps): Promise<AxiosResponse<any, any>> {
  const result = await axios.put(props.url, props.data)
  return result
}

async function patch(props: IProps): Promise<AxiosResponse<any, any>> {
  const result = await axios.patch(props.url, props.data)
  return result
}
