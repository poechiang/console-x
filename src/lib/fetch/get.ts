import fetch from 'node-fetch';
import { from, Observable } from 'rxjs';
import queryString from './queryString';

export const get = <T = any>(url: string, query: PlainObject, options?: any): Observable<T> => {
    return from(
        new Promise<T>((resolve, reject) => {
            fetch([url, queryString(query)].join('?'), { ...options, method: 'GET', mode: 'cors' })
                .then(resp => resp.json())
                .then(resp => {
                    resolve(resp);
                })
                .catch(error => {
                    reject(error);
                })
                .finally(() => {});
        })
    );
};
