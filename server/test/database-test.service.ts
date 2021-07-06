import dbDefaults from '../db-defaults'
import { getManager, getRepository } from 'typeorm'

export class DatabaseTestService {
    constructor(
        private entityManager = getManager(),
        private entities?: string[]
    ) {
        this.entities = this.entityManager.connection.entityMetadatas.map(entityMeta => entityMeta.name)
    }

    public async clearData(): Promise<void> {
        if(this.entities) {
            const entityPromises = this.entities
                .map(async entity => {
                    await this.entityManager.clear(entity)
                })
            await Promise.all(entityPromises)
        }
    }

    public async loadSampleData(): Promise<void> {
        if(this.entities) {
            const entityPromises = this.entities
            .map(async entity => {
                const values = (dbDefaults.test as Record<string, any>)[`${entity}s`]
                const repository = getRepository(entity)
                await repository.save(values)
            })
            await Promise.all(entityPromises)
        }
    }
}
