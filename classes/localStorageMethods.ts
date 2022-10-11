class LocalStorage {
    getItem(key: string) {
        const item = global?.localStorage?.getItem(key)
        if (item === null) return undefined
        try {
            return JSON.parse(item)
        } catch { }
        return item
    }
    setItem(key: string, value: any) {
        if (value === undefined) {
            global?.localStorage?.removeItem(key)
        } else {
            global?.localStorage?.setItem(key, JSON.stringify(value))
        }
    }
}

export const localStorageMethods = new LocalStorage()

