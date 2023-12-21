import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";
import { PLAYERS_COLLECTION } from '../storageConfig';
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){
    try {
        const storage = await playersGetByGroup(group)

        const playerAlreadyExist = storage.filter(player => player.name === newPlayer.name)

        if(playerAlreadyExist.length > 0){
            return new AppError('Essa pessoa ja esta adicionada em um time aqui')
        }

        const storagePlayers = JSON.stringify([...storage, newPlayer])
        
        await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${group}`, storagePlayers )

    } catch (error) {
        throw (error)
    }
}