import { Router } from 'express'

export default (router: Router): void => {
  router.get('/github/callback', (req, res) => {
    const { code } = req.query

    if (!code) {
      return res.status(400).json({
        statusCode: 400,
        data: {
          error: 'The code was not provided.'
        }
      })
    }

    return res.json({ code })
  })
}
