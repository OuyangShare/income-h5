import { request } from '@/request'

const public_url = '/api'

export class API {
    static async getDetaInfo(params, data) {
        return request(public_url + '/wxDetalis/info', params, data, 'post')
    }
}