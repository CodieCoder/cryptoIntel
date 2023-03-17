import DefaultBody from "../../../components/DefaultBody"
import CenterBody from "./CenterBody"
import LeftBody from "./LeftBody"

const Body = () => {
  return <DefaultBody center={<CenterBody />} left={<LeftBody />} />
}

export default Body
