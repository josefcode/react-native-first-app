import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { groupGetData } from "./groupGetData";
import { AppError } from "../../utils/AppError";

export async function groupCreate(newGroupName: string){
   try {

    const storageGroups = await groupGetData();

    const groupAlreadyExists = await storageGroups.includes(newGroupName)

    if(groupAlreadyExists){
     throw new AppError('ja exist um grupo cadastrado com esse nome');
    }
    const storage = JSON.stringify([...storageGroups,newGroupName])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)

   } catch (error) {
    throw error;
   }
}