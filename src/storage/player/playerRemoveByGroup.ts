import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYERS_COLLECTION } from "../storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";

export const playerRemoveByGroup = async (playerName: string, group: string) =>{
    try {
        const storage = await playersGetByGroup(group)

        const filtered = storage.filter(player => player.name !== playerName)

        const players = JSON.stringify(filtered)

        await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${group}`, players)
    } catch (error) {
        throw error
    }
}