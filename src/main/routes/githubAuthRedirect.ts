import { Router } from 'express'

export default (router: Router): void => {
  router.get('/github/auth', (req, res) => {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    )
  })
}
