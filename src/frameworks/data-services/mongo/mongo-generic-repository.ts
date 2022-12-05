import { IGenericRepository } from '../../../core/abstracts/generic-repository.abstract';
import { Model } from 'mongoose';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  getAllByCriteria(criteria: any) {
    return this._repository
      .find(criteria)
      .populate(this._populateOnFind)
      .lean()
      .exec();
  }

  get(id: any) {
    return this._repository.findById(id).populate(this._populateOnFind).exec();
  }

  getByCriteria(criteria: any) {
    return this._repository
      .findOne(criteria)
      .populate(this._populateOnFind)
      .exec();
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  update(id: string, item: T): Promise<T> {
    return this._repository
      .findOneAndUpdate({ id }, item, { new: true })
      .exec();
  }

  updateById(id: string, item: T): Promise<T> {
    return this._repository.findByIdAndUpdate(id, item, { new: true }).exec();
  }
}
