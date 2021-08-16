import {useDispatch} from "react-redux";
import {getClients} from "../../reduxToolkit/clientSlice";
import {postClients} from "../../reduxToolkit/clientSlice";
import {getEmployees} from "../../reduxToolkit/employeesSlice";
import {getFreelancers} from "../../reduxToolkit/freelancersSlice";


const ToolKit = () => {
const dispatch = useDispatch()
const handleClickPosts = () => {
  dispatch(getEmployees({}))
}
const handleClick = () => {
  // dispatch(getPosts({}))
  dispatch(getFreelancers({}))
}
  return (
    <>
      <button onClick={handleClickPosts}>Add posts</button>
      <button onClick={handleClick}>Add clients</button>
    </>

  )
}
export default ToolKit