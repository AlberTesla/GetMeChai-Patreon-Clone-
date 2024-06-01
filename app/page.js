export default function Home() {
  return <>
  <div className="text-white flex flex-col gap-4 justify-center items-center h-[44vh]">
      <div className="flex flex-row items-center justify-center font-bold text-5xl"><span className="p-5">Buy me a chai</span><span ><iframe src="https://giphy.com/embed/YOaLwgaAjmU4Ve5psK" width={50} className="giphy-embed" allowFullScreen></iframe></span></div>
      <p>
        A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
      </p>
      <div>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Start here
        </button>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Read More
        </button>
      </div>
    </div>
    <div className="h-1 bg-blue-950"></div>
    <div className="text-white flex flex-col justify-center items-center py-10 gap-10">
      <div className="font-bold text-3xl">Your Fans can buy you a Chai</div>
      <div className="buttons flex flex-row w-[50%] justify-between items-center">
      <div className="space-y-3 flex flex-col justify-center items-center">
          <img src="images/desk.gif" className="rounded-full w-24 h-24" alt=""/>
          <p className="font-bold text-sm">
            Fans want to help
          </p>
          <p className="text-xs text-center">
            Your fans are available for you to help you
          </p>
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center">
          <img src="images/coin.gif" className="rounded-full w-24 h-24" alt=""/>
          <p className="font-bold text-sm">
            Fans want to help
          </p>
          <p className="text-xs text-center">
            Your fans are available for you to help you
          </p>
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center">
          <img src="images/group.gif" className="rounded-full w-24 h-24" alt=""/>
          <p className="font-bold text-sm">
            Fans want to help
          </p>
          <p className="text-xs text-center">
            Your fans are available for you to help you
          </p>
        </div>
      </div>
    </div>
    <div className="h-1 bg-blue-950"></div>
    <div className="text-white flex flex-col justify-center items-center py-10 gap-10">
      <div className="font-bold text-3xl">Your Fans can buy you a Chai</div>
      <div className="buttons flex flex-row w-[50%] justify-between items-center">
      <div className="space-y-3 flex flex-col justify-center items-center">
          <img src="images/desk.gif" className="rounded-full w-24 h-24" alt=""/>
          <p className="font-bold text-sm">
            Fans want to help
          </p>
          <p className="text-xs text-center">
            Your fans are available for you to help you
          </p>
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center">
          <img src="images/coin.gif" className="rounded-full w-24 h-24" alt=""/>
          <p className="font-bold text-sm">
            Fans want to help
          </p>
          <p className="text-xs text-center">
            Your fans are available for you to help you
          </p>
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center">
          <img src="images/group.gif" className="rounded-full w-24 h-24" alt=""/>
          <p className="font-bold text-sm">
            Fans want to help
          </p>
          <p className="text-xs text-center">
            Your fans are available for you to help you
          </p>
        </div>
      </div>
    </div>
    <div className="h-1 bg-blue-950"></div>
    <div className="flex flex-col justify-center items-center text-white space-y-10 pt-10 pb-20">
      <div className="font-bold text-3xl">Learn more about us</div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/7IHHLHu600g?si=ofW5X4RRjFW51I-N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </>
}
