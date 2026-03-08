
    export type RemoteKeys = 'federated_reports/reports';
    type PackageType<T> = T extends 'federated_reports/reports' ? typeof import('federated_reports/reports') :any;