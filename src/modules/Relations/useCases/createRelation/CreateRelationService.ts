import { inject, injectable } from 'tsyringe'

import { AppError } from '@modules/Error/models/AppError'
import { IProductsRepository } from '@modules/Products/repositories/Product/IProductsRepository.types'
import { RelationModel } from '@modules/Relations/models/RelationModel'
import { IRelationsRepository } from '@modules/Relations/repositories/Relation/IRelationsRepository.types'
import { IRequestsRepository } from '@modules/Requests/repositories/Request/IRequestsRepository.types'

@injectable()
export class CreateRelationService {
  constructor(
    @inject('RelationsRepository')
    private relationsRepository: IRelationsRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('RequestsRepository')
    private requestsRepository: IRequestsRepository
  ) {}

  execute = async data => {
    const product = await this.productsRepository.findById(data.product_id)

    if (!product) throw new AppError('Product does not exist')

    const request = await this.requestsRepository.findById(data.request_id)

    if (!request) throw new AppError('Request does not exist')

    const newProductQuantity = product.quantity - 1

    if (newProductQuantity >= 0) {
      await this.productsRepository.update({
        id: product.id,
        quantity: newProductQuantity
      })
    }

    const newRequestQuantity = request.quantity - 1

    if (newRequestQuantity >= 0)
      await this.requestsRepository.update({
        id: request.id,
        quantity: newRequestQuantity
      })

    const newRelation = new RelationModel()

    Object.assign(newRelation, data)

    const createdRelation = await this.relationsRepository.create(newRelation)

    return { createdRelation: { ...createdRelation } }
  }
}
