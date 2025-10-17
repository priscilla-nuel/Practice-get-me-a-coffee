//import a typescript interface for ethereuem
import { createWalletClient, custom } from "https://esm.sh/viem";
import { sepolia } from "https://esm.sh/viem/chains";

// this button connects to the wallet
const getCoffee = document.getElementById("getCoffee");

// this button checks the balance in the wallet
const getBalance = document.getElementById("getBalance");

//First create a walletClient variable
let walletClient;

// creating a function for the getCoffee button by calling the connect fuction 
// async makes it wait for a promise
async function connect() {
    // to check if the installed wallet is evm
    if (typeof window.ethereum !== "undefined") {
        // create a wallet client with a transport that connects to ethereum
        walletClient = createWalletClient({
            transport: custom(window.ethereum)
        });
        // this funtuion tells it to request the wallet address
        await walletClient.requestAddresses();
        console.log("hi");


        console.log("connect your wallet");

     // Adding conditional statement to check if installed wallet is metamask

    } else {
        getCoffee.innerHTML="please install metamask";}
}


//creating a fuction for the getBalance button by calling the allow function
function yes() {
    if (typeof window.ethereum !=="undefined"){
        // to check if the installed wallet is evm
        console.log("check your balance");}
    else {
       getBalance.innerHTML="please install metamask";}
}

// this allows a clicker when you click on the vutton
getCoffee.onclick = connect
getBalance.onclick = yes  