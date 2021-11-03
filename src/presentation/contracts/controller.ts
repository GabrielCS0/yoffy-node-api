import { HttpResponse } from '@presentation/contracts'

export interface ControllerContract<T = unknown> {
  handle(request: T): Promise<HttpResponse>
}
