import React, { useEffect } from 'react'
import "./featured.css"
import useFetch from "../../hooks/useFetch.js"

class FeaturedClass extends React.component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: false,
            error: false
        }
    }

    render() {

        const { data, loading, error } =
            useFetch("/hotels/countbycities?cities=dublin,moscow,london,rome,milan,paris")
        console.log(data)
        console.log(loading)
        console.log(error)


        return (
        <div className="featured">

            {loading ? ("loading...please wait.") : (
                <><div className="featuredItem">
                    <img src="https://i.picsum.photos/id/8/500/500.jpg?hmac=0wbXwgDXQno5fEwfO32ow20unvYZLc_EkWrz38bElNg"
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>{data[0]['city']}</h1>
                        <h2>{data[0]['count']} Properties</h2>
                    </div>
                </div>

                    <div className="featuredItem">
                        <img src="https://i.picsum.photos/id/1045/500/500.jpg?hmac=d4rd8hHTofnSdpOqI3UbZ5qBGqHcT5ebOjbbil6Cxn0"
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
                            <h1>{data[1]['city']}</h1>
                            <h2>{data[1]['count']} Properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src="https://i.picsum.photos/id/524/500/500.jpg?hmac=z2uVLm01qVMf28HEDb_MReUAvHbG0uylevoJupVdCqA"
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
                            <h1>{data[2]['city']}</h1>
                            <h2>{data[2]['count']} Properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src="https://i.picsum.photos/id/718/500/500.jpg?hmac=guJUsAxsai63V1hlhDUD0JenDvsN_vRj-ijSPsA3XAs"
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
                            <h1>{data[3]['city']}</h1>
                            <h2>{data[3]['count']} Properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src="https://i.picsum.photos/id/970/500/500.jpg?hmac=cZJGl8KbVG3h9ZZ1qP2ZCPF4b9OC2smtQp6rJ9lv7Yc"
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
                            <h1>{data[4]['city']}</h1>
                            <h2>{data[4]['count']} Properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src="https://i.picsum.photos/id/655/500/500.jpg?hmac=MOF0Weg8WfVekOa7sZzLsoRq5kAZIwwyk7OEvka90n4"
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
                            <h1>{data[5]['city']}</h1>
                            <h2>{data[5]['count']} Properties</h2>
                        </div>
                    </div></>)}

        </div>

    )
}}

export default FeaturedClass