
    export type RemoteKeys = 'federated_transfers/home';
    type PackageType<T> = T extends 'federated_transfers/home' ? typeof import('federated_transfers/home') :any;