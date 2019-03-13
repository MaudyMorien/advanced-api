const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt')
const router = new Router()

router.post('/users', (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10)  
    User
        .create(req.body)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: `User does not exist`
                })
            }
            return res.status(201).send(user)
        })
        .catch(error => next(error))
})

module.exports = router
