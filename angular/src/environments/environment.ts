 import { Environment } from '@abp/ng.core';

const baseUrl = 'http://{0}.localhost:4200';

/*const oAuthConfig = {
  issuer: 'https://{0}.localhost:44304/',
  redirectUri: baseUrl,
  clientId: 'Kasherk_App',
  responseType: 'code',
  scope: 'offline_access Kasherk',
  requireHttps: true,
};*/

const oAuthConfig = {
  issuer: 'https://{0}.localhost:44304/',
  clientId: 'Kasherk_App',
  grantType: 'password',
  scope: 'offline_access Kasherk',
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Kasherk',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://{0}.localhost:44304',
      rootNamespace: 'eLite.Kasherk',
    },
    /*AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },*/
  },
} as Environment;
