import { BigInt } from "@graphprotocol/graph-ts"
import { Shoutout, Shout } from "../generated/Shoutout/Shoutout"
import { ShoutEntity } from "../generated/schema"

export function handleShout(event: Shout): void {
    
    let entity = new ShoutEntity(event.transaction.hash.toHex())

    entity.author = event.params.author
    entity.message = event.params.message

    entity.save()
}
