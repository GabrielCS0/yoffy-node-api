export type HttpResponse = {
  statusCode: number
  data: unknown
}

export const success = (data: unknown) => ({
  statusCode: 200,
  data
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: { error: error.message }
})
