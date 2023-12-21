import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYERS_COLLECTION } from "../storageConfig";
import { groupGetData } from "./groupGetData";


export const groupRemoveByName = async (deletedGroup: string) => {
    try {
        const storageGroup = await groupGetData()

    const groups = storageGroup.filter(group => group !== deletedGroup)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
    await AsyncStorage.removeItem(`${PLAYERS_COLLECTION}-${deletedGroup}`)
    
    } catch (error) {
        throw error
    }
}