import React from "react";
import next from "next";
import web3 from "../ethereum/web3";
import contract from "../ethereum/helloContract.js";

class index extends React.Component {
    static async getInitialProps() {
        const instance = contract(await web3.eth.net.getId());
        const str = await instance.methods.getString().call();
        console.log(str);

        return { str };
    }
    render() {
        return <div>hello dapp: {this.props.str}</div>;
    }
}

export default index;
