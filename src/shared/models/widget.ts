export interface IWidget {
  id: string;
  lmMeta?: { [key: string]: any };
  createdAt: number;
  metadata: { [key: string]: any };
  parentEntityId: string;
  parentEntityType: string;
  updatedAt: number;
}
