import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let user;

export default class UsersDAO {
    static async injectDB(conn) {
      if (user) {
        return
      }
      try {
        user = await conn.db(process.env.A2_DB_NS).collection("users")
      } catch (e) {
        console.error(
          `Unable to establish a collection handle in usersDAO: ${e}`,
        )
      }
    }

    static async addUser(user_name, password, type) {
      try {
        const userDoc = { 
            user_name: user_name,
            password: password,
            type:type, 
          }
        return await user.insertOne(userDoc)
      } catch (e) {
        console.error(`Unable to sign up user: ${e}`)
        return { error: e }
      }
    }

    static async getUserByName(name) {
          const query = { user_name: name }
          return await user.findOne(query)
        } catch (e) {
          console.error(`Something went wrong in getUserByName: ${e}`)
          throw e
        }
}
    