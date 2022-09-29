import React from 'react'
import "./featured.css"

const Featured = () => {
    return (
        <>
            <div className="featured">
                <div className="featuredItem">
                    <img src="https://i.picsum.photos/id/8/500/500.jpg?hmac=0wbXwgDXQno5fEwfO32ow20unvYZLc_EkWrz38bElNg"
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>Dublin</h1>
                        <h2>123 Properties</h2>
                    </div>
                </div>

                <div className="featuredItem">
                    <img src="https://i.picsum.photos/id/1045/500/500.jpg?hmac=d4rd8hHTofnSdpOqI3UbZ5qBGqHcT5ebOjbbil6Cxn0"
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>Moscow</h1>
                        <h2>56 Properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://i.picsum.photos/id/524/500/500.jpg?hmac=z2uVLm01qVMf28HEDb_MReUAvHbG0uylevoJupVdCqA"
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>London</h1>
                        <h2>433 Properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://i.picsum.photos/id/718/500/500.jpg?hmac=guJUsAxsai63V1hlhDUD0JenDvsN_vRj-ijSPsA3XAs"
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>Rome</h1>
                        <h2>244 Properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://i.picsum.photos/id/970/500/500.jpg?hmac=cZJGl8KbVG3h9ZZ1qP2ZCPF4b9OC2smtQp6rJ9lv7Yc"
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>Milan</h1>
                        <h2>322 Properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://i.picsum.photos/id/655/500/500.jpg?hmac=MOF0Weg8WfVekOa7sZzLsoRq5kAZIwwyk7OEvka90n4"
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>Paris</h1>
                        <h2>466 Properties</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured