
    export type RemoteKeys = 'federated_shared_ui/button';
    type PackageType<T> = T extends 'federated_shared_ui/button' ? typeof import('federated_shared_ui/button') :any;