import auth from "~/utils/auth"
import router from "./index"
import store from "~/store"

router.beforeEach(async () => {
  try {
    const user = await auth()
    console.log(user)
    store.commit("user/assignState", {
      currentUser: user
    })
  } catch(error) {
    console.log(error.response.data)
  }
})