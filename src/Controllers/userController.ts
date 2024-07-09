


class UserController {
    async getTest (req: any, res: any) {
        res.status(200).json("some response")
    }
}

module.exports = new UserController