
    export type RemoteKeys = 'federated_balances/balances';
    type PackageType<T> = T extends 'federated_balances/balances' ? typeof import('federated_balances/balances') :any;