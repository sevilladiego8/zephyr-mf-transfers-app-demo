
    export type RemoteKeys = 'federated_settings/settings';
    type PackageType<T> = T extends 'federated_settings/settings' ? typeof import('federated_settings/settings') :any;