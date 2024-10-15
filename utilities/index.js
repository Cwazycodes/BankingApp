import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = '@transaction_key'

export const saveTransactions = async (transactions) => {
    try {
        const jsonValue = JSON.stringify(transactions)
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
    } catch (error) {
        console.error(error)
    }
}

export const getTransactions = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY)
        return jsonValue != null ? JSON.parse(jsonValue) : []
    } catch (error) {
        console.error(error)
    }
}