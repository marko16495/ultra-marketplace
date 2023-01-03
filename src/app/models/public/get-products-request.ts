export interface GetProductsRequest {
  /** Zero-based page index */
  pageIndex: number;
  pageSize: number;
  filter?: string;
}
