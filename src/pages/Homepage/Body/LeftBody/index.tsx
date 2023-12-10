import "./index.scss"
import NewsBrief from "Widgets/Briefs"

const LeftBody = () => {
  return (
    <div className="left-body">
      <div className="">
        {/* <NftList /> */}
        <br />
        <br />
      </div>
      <div className="news-brief">
        <NewsBrief count={12} />
      </div>
    </div>
  )
}

export default LeftBody
