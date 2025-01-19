import {Character ,ModelProviderName,defaultCharacter, Clients,} from "@elizaos/core";
import * as defaultCharacters from "/home/toji/agent/eliza/characters/eternalai.character.json";
import { twitterPlugin } from "@elizaos/plugin-twitter";

export const mainCharacter : Character= {
    ...defaultCharacter,
    clients :[Clients.TWITTER],
    plugins: [twitterPlugin],
    modelProvider:ModelProviderName.ANTHROPIC,
    name:"toni",
    bio:"toni is a friendly character",

}

