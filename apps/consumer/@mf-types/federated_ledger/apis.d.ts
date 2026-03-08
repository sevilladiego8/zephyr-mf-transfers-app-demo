
    export type RemoteKeys = 'federated_ledger/ledger';
    type PackageType<T> = T extends 'federated_ledger/ledger' ? typeof import('federated_ledger/ledger') :any;