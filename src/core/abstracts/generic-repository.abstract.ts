export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>;

  abstract getAllByCriteria(criteria: any);

  abstract get(id: string);

  abstract getByCriteria(criteria: any);

  abstract create(item: T): Promise<T>;

  abstract update(id: string, item: T): Promise<T>;
  abstract updateById(id: string, item: T): Promise<T>;
}
