class UserController {
    getTest (req: any, res: any) {
        res.status(200).json("some response")
    }
}

export default new UserController