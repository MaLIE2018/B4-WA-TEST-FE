console.log('Hi')
import {io} from "socket.io-client"


const socket = io("http://localhost:3001", { transports: ["websocket"] })

const socket2 = io("http://localhost:3001",{ transports: ["websocket"] })


const currChat1 = "60f83871e54eb87798cea822"
const currChat2 = "60f8341fe3eb842978ca456b"
const currUser = "60f83864e54eb87798cea81e"
const currUser2 = "60f8384be54eb87798cea819"

const chatList = [
  {
  hidden: false,
  chat: {_id: currChat2},
},
  {
  hidden: false,
  chat: {_id:currChat1}
}
]

const message1 = {
  userId: currUser, 
  text: "Hi there",
}

const message2 = {
  userId: currUser2, 
  text: "Hello there",
}

socket.emit("connect-chats", currUser, chatList)
socket2.emit("connect-chats", currUser2, chatList)

socket.on("receive-message", (arg)=>{
  console.log("socket1 got the message:", arg)
})
socket2.on("receive-message", (arg)=>{
  console.log("socket2 got the message:", arg)
})
socket.on("loggedIn", (arg) => {
  console.log(arg)
})
socket.on("rooms", (arg) => {
  console.log(arg)
})

socket2.emit("send-message", message1,currChat1)
socket.emit("send-message", message2,currChat1 )

// socket.emit("offline","60f70a82ff74c77e681932f9" )

// socket.on("loggedOut", (arg) => {
//   console.log(arg)
// })






