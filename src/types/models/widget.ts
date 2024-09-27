export interface Widget {
  id: string;
  lmMeta?: Record<string, LMMetaType>;
  createdAt: number;
  metadata: Record<string, MetaDataType>;
  parentEntityId: string;
  parentEntityType: string;
  updatedAt: number;
}

type LMMetaType = any;
type MetaDataType = any;
