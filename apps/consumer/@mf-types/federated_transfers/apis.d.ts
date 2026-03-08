
    export type RemoteKeys = 'federated_transfers/transfers';
    type PackageType<T> = T extends 'federated_transfers/transfers' ? typeof import('federated_transfers/transfers') :any;