
    export type RemoteKeys = 'federated_reports/about';
    type PackageType<T> = T extends 'federated_reports/about' ? typeof import('federated_reports/about') :any;