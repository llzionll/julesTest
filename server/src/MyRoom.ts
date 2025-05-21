import { Room, Client } from "colyseus";

export class MyRoom extends Room {
  // Called when a room is created
  onCreate (options: any) {
    console.log("MyRoom created!", options);
  }

  // Called when a client joins the room
  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
  }

  // Called when a client leaves the room
  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  // Called when a room is disposed
  onDispose () {
    console.log("Room disposed");
  }
}
