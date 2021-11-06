type User = {
  id: string
  name: string
  githubId: number
  avatarUrl: string
  login: string
}

export type CreateMessageEntity = {
  id: string
  text: string
  createdAt: Date
  userId: string
  user: User
}
