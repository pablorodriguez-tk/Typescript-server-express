import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { methods } from './Methods';

interface RouterHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouterHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBinder(methods.get);
export const put = routeBinder(methods.put);
export const post = routeBinder(methods.post);
export const del = routeBinder(methods.del);
export const patch = routeBinder(methods.patch);
