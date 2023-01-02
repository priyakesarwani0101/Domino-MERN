
const express = require('express')
const { register, login, loginMobile, getUserById } = require('../controllers/userController')
const auth = require('../middleware/auth')

const userRouter = express.Router()

userRouter.get('/user/loggedInUser', auth, (req, res) => {

    return res.send({
        data: req.user
    })
})

userRouter.get('/user/:id', auth, async (req, res) => {

    const { id } = req.params;

    try {
        const user = await getUserById(id);

        if (user) {
            return res.send({
                data: user
            })

        } else {
            return res.status(404).send({
                error: 'User does not exist'
            })
        }
    } catch (err) {
        return res.status(500).send({
            error: 'Something went wrong'
        });
    }
})

userRouter.post('/user/login', async (req, res) => {
    const body = req.body

    try {
        const token = await login(body);

        return res.send({
            data: {
                token
            }
        })
    } catch (err) {

        if (err.message == 'User does not exist with the given email' || err.message == 'The password is incorrect') {
            return res.status(400).send({
                error: err.message
            })
        } else {
            return res.status(500).send({
                error: 'Something went wrong'
            })
        }
    }
})

userRouter.post('/user/register', async (req, res) => {

    const body = req.body;

    try {
        const user = await register(body);

        return res.send({
            data: user
        })

    } catch (err) {

        if (err.message == 'User already exists with the given email') {
            return res.status(400).send({
                error: err.message
            })
        } else {
            return res.status(500).send({
                error: 'Something went wrong'
            })
        }
    }
})


userRouter.post('/user/mobile', async (req, res) => {
    console.log("---fafaf")
    const body = req.body

    try {
        const token = await loginMobile(body);

        return res.send({
            data: {
                token
            }
        })
    } catch (err) {
        return res.status(500).send({
            error: 'Something went wrong'
        })
    }
})


module.exports = userRouter;