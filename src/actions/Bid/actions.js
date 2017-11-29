import { POST_BID_REQUEST, POST_BID_SUCCESS, POST_BID_FAILURE } from '../../redux/modules/constants';

export function postBid(body) {
  return {
    types: [POST_BID_REQUEST, POST_BID_SUCCESS, POST_BID_FAILURE],
    promise: client => client.post('api/turksystem/bid/', {
        data: body
    })
  };
}