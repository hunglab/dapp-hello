import web3 from "./web3";
import compiledContract from "../ethereum/contracts/Helloworld.json";

const instance = (networkID) => {
    return new web3.eth.Contract(
        compiledContract.abi,
        compiledContract.networks[networkID].address
    );
};

export default instance;
