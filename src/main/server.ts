import app from '@main/config/app'

const PORT = process.env.PORT

app.listen(PORT || 4000, () =>
  console.log(`Server is running on port ${PORT || 4000}`)
)
