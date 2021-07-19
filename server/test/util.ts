export const idsToString = (objects: any[]): any[] => {
    return objects.map(object => ({
        ...object,
        _id: String(object._id)
    }))
}
