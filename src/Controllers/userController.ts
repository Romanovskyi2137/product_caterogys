import { Response,  Request } from "express"

class UserController {
    getTest (req: Request, res: Response) {
        res.status(200).json("some response")
    }
}

export default new UserController