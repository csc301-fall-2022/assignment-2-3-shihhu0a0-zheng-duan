import UsersDAO from "../dao/usersDAO.js"


export default class UsersController {
    static async apiSignInUser(req, res, next) {
      try {
        const user_name = req.body.user_name
        const password = req.body.password

        let type;
        const instructor_name = req.body.instructor_name
        if (instructor_name.toUpperCase() === "DAVID") type = "TA";
        else type = "friend";

        let check_user = await UsersDAO.getUserByName(user_name)
          if (check_user) {
            res.status(400).json({ error: "User exists" })
            return
          }
        const UserResponse = await UsersDAO.addUser(
            user_name,
            password,
            type,
        )
        // res.json({ status: "success" })
        let user = await UsersDAO.getUserByName(user_name)
        res.json(user)
      } catch (e) {
        res.status(500).json({ error: e.message })
      }
    }

    static async apiChackUser(req, res, next) {
        try {
          let name = req.body.user_name || ""
          let user = await UsersDAO.getUserByName(name)
          if (!user) {
            res.status(404).json({ error: "Not found" })
            return
          }
          let password = req.body.password || ""
          if (password === user.password) {res.json(user)}
          else {res.status(404).json({ error: "Incorrect Password" })}
        } catch (e) {
          console.log(`api, ${e}`)
          res.status(500).json({ error: e })
        }
      }
}