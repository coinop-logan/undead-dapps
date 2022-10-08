import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { Shout } from "../generated/Shoutout/Shoutout"

export function createShoutEvent(author: Address, message: string): Shout {
  let shoutEvent = changetype<Shout>(newMockEvent())

  shoutEvent.parameters = new Array()

  shoutEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )
  shoutEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )

  return shoutEvent
}
