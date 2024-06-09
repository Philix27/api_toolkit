import { invoke } from "@tauri-apps/api/tauri"

export class TauriFn {
  async greet(payload: { name: string }): Promise<string> {
    const c = await invoke<string>("greet", payload)

    console.log(c)
    return c
  }
  greetFx(payload: { name: string }): Promise<string> {
    return invoke("greet", payload)
  }
}
