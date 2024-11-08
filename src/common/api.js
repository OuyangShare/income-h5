import { request } from '@/request'

const public_url = ''

export class API {
    static async getDetaInfo(data) {
        return request(public_url + '/wxDetalis/info', data, 'post')
    }
}