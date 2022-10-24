import React, { useEffect } from 'react'
import "./featured.css"
import useFetch from "../../hooks/useFetch.js"

const Featured = () => {
    const { data, loading, error } =
        useFetch("/hotels/countbycities?cities=dublin,moscow,london,rome,milan,paris")
    console.log(data)
    console.log(loading)
    console.log(error)

    const images =
         ["https://i.picsum.photos/id/8/500/500.jpg?hmac=0wbXwgDXQno5fEwfO32ow20unvYZLc_EkWrz38bElNg",
         "https://i.picsum.photos/id/1045/500/500.jpg?hmac=d4rd8hHTofnSdpOqI3UbZ5qBGqHcT5ebOjbbil6Cxn0",
         "https://i.picsum.photos/id/524/500/500.jpg?hmac=z2uVLm01qVMf28HEDb_MReUAvHbG0uylevoJupVdCqA",
         "https://i.picsum.photos/id/718/500/500.jpg?hmac=guJUsAxsai63V1hlhDUD0JenDvsN_vRj-ijSPsA3XAs",
         "https://i.picsum.photos/id/970/500/500.jpg?hmac=cZJGl8KbVG3h9ZZ1qP2ZCPF4b9OC2smtQp6rJ9lv7Yc",
         "https://i.picsum.photos/id/655/500/500.jpg?hmac=MOF0Weg8WfVekOa7sZzLsoRq5kAZIwwyk7OEvka90n4"]

    return (

        <div className="featured">

            {loading ? ("loading...please wait.") : (
                <> {data && images.map((img, i) => (
                    <div className="featuredItem" key={i}>
                        <img src={img} className="featuredImg"/>
                        <div className="featuredTitles">
                            <h1>{data[i]?.city}</h1>
                            <h2>{data[i]?.count} Properties</h2>
                        </div>
                    </div>))}
                </>)}
        </div>

    )
}

export default Featured
