# .FeedbackControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFeedback**](FeedbackControllerApi.md#createFeedback) | **POST** /feedbacks/create | 
[**deleteFeedback**](FeedbackControllerApi.md#deleteFeedback) | **DELETE** /feedbacks/delete/{id} | 


# **createFeedback**
> ResponseDTO createFeedback(feedbackDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FeedbackControllerApi(configuration);

let body:.FeedbackControllerApiCreateFeedbackRequest = {
  // string
  authorization: "Authorization_example",
  // FeedbackDTO
  feedbackDTO: {
    feedbackType: "SUGGESTION",
    satisfactionLevel: 1,
    acceptTerms: true,
    comment: "comment_example",
  },
};

apiInstance.createFeedback(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedbackDTO** | **FeedbackDTO**|  |
 **authorization** | [**string**] |  | defaults to undefined


### Return type

**ResponseDTO**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFeedback**
> ResponseDTO deleteFeedback()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FeedbackControllerApi(configuration);

let body:.FeedbackControllerApiDeleteFeedbackRequest = {
  // number
  id: 1,
  // string
  authorization: "Authorization_example",
};

apiInstance.deleteFeedback(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **authorization** | [**string**] |  | defaults to undefined


### Return type

**ResponseDTO**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


