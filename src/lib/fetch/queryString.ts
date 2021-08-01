import { isEmpty, map, pickBy } from 'lodash';

/**
 * 根据给定对象生成查询参数字符串
 * @param params 查询参数对象
 * @param pick 是否需要去空
 * @returns 查询参数的的序列化表示
 */
const queryString = (params: PlainObject, pick?: boolean): string => {
    if (!params || isEmpty(params)) {
        return '';
    }
    const entries = Object.entries(pick === false ? params : pickBy(params));

    if (!entries?.length) {
        return '';
    }
    return map(entries, ([k, v]) => `${k}=${v}`)?.join('&');
};
export default queryString;
